'use strict'

const { promisify } = require('util')
const { bicycle } = require('../../model')

const { uid } = bicycle
const read = promisify(bicycle.read)
const create = promisify(bicycle.create)
const update = promisify(bicycle.update)
const del = promisify(bicycle.del)

// promisify approach:
module.exports = async (fastify, opts) => {
    const { notFound } = fastify.httpErrors

    const dataSchema = {
        type: 'object',
        required: ['brand', 'color'],
        additionalProperties: false,
        properties: {
            brand: {type: 'string'},
            color: {type: 'string'}
        }
    }
    const bodySchema = {
        type: 'object',
        required: ['data'],
        additionalProperties: false,
        properties: {
            data: dataSchema
        }
    }

    const idSchema = { type: 'integer' }
    const paramsSchema = { id: idSchema }

    fastify.post('/',
        {
            schema: {
                body: bodySchema,
                response: {
                    201: {
                        id: idSchema
                    }
                }
            }
        },
        async (request, reply) => {
            const { data } = request.body
            const id = uid()

            await create(id, data)

            reply.code(201)
            return { id }
        })

    fastify.post('/:id/update', {
        schema: {
            body: bodySchema,
            params: paramsSchema
        }
    }, async (request, reply) => {
        const { id } = request.params
        const { data } = request.body
        try {
            await update(id, data)
            reply.code(204)
        } catch (err) {
            if (err.message === 'not found') throw notFound()
            throw err
        }
    })

    fastify.put('/:id', {
        schema: {
            body: bodySchema,
            params: paramsSchema
        }
    }, async (request, reply) => {
        const { id } = request.params
        const { data } = request.body
        try {
            await create(id, data)
            reply.code(201)
            return {}
        } catch (err) {
            if (err.message === 'resource exists') {
                await update(id, data)
                reply.code(204)
            } else {
                throw err
            }
        }
    })

    fastify.get('/:id', {
        schema: {
            params: paramsSchema,
            // invalidated data will result in 500 server error
            response: {
                200: dataSchema
            }
        }
    }, async (request, reply) => {
        const { id } = request.params
        try {
            return await read(id)
        } catch (err) {
            if (err.message === 'not found') throw notFound()
            // any unexpected error will result in 500 error
            throw err
        }
    })

    fastify.delete('/:id', {
        schema: {
            params: paramsSchema
        }
    }, async (request, reply) => {
        const { id } = request.params
        try {
            await del(id)
            reply.code(204)
        } catch (err) {
            if (err.message === 'not found') throw notFound()
            throw err
        }
    })
}

// callback approach:
module.exports = async (fastify, opts) => {
    fastify.get('/:id', (request, reply) => {
        const { id } = request.params
        bicycle.read(id, (err, result) => {
            if (err) {
                if (err.message === 'not found')
                    // `notFound` is wrapped by `fastify-sensible`
                    reply.notFound()
                else reply.send(err)
            } else reply.send(result)
        })
    })
}

// async approach:
module.exports = async (fastify, opts) => {
    fastify.get('/:id', async (request, reply) => {
        const { id } = request.params
        bicycle.read(id, (err, result) => {
            if (err) {
                if (err.message === 'not found') reply.notFound()
                else reply.send(err)
            } else reply.send(result)
        })
        await reply // <======
    })
}
