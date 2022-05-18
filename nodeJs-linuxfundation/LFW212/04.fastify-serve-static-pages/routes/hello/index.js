'use strict'

module.exports = async (fastify, opts) => {
    fastify.get('/', async (request, reply) => {
        // fastify-static-content decorate `reply` object with
        // `sendFile` to serve static file contents
        return reply.sendFile('hello.html')
    })
}
