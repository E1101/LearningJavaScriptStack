'use strict'

const { Readable } = require('stream')

// (*) for async generator function signature
async function * upper (res) {
  // `res` is an async iterable so it could be used by `for await of`
  for await (const chunk of res) {
    yield chunk.toString().toUpperCase()
  }
}

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const { url } = request.query

    try {
      // validate url
      new URL(url)
    } catch (err) {
      throw fastify.httpErrors.badRequest()
    }

    // `from` is supplied from `fastify-reply-from` plugin
    return reply.from(url, {
      onResponse (request, reply, res) {
        reply.send(
            // convert async iterable to stream
            Readable.from(upper(res))
        )
      }
    })
  })
}

/*
Create a server on other terminal:
> node -e "http.createServer((_, res) => (res.setHeader('Content-Type', 'text/plain'), res.end('hello world'))).listen(5000)"
*/

// Then navigate to http://localhost:3000/?url=http://localhost:5000
// we should see 'HELLO WORLD'
