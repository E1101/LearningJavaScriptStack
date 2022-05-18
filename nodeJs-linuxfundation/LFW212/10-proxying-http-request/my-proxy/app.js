'use strict'

const proxy = require('fastify-http-proxy')
const sensible = require('fastify-sensible')

module.exports = async function (fastify, opts) {
  // `sensible` to create appropriate response message
  fastify.register(sensible)

  fastify.register(proxy, {
    upstream: 'https://news.ycombinator.com/',
    async preHandler(request, reply) {
      if (request.query.token !== 'abc') {
        throw fastify.httpErrors.unauthorized()
      }
    }
  })
}

// to view proxy we need to visit http://localhost:3000/?token=abc with provided token
