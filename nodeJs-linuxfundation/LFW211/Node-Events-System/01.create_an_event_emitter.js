const { EventEmitter } = require('events')
// or
const EventEmitter = require('events')

// To create new emitter we instantiate it
const myEmitter = new EventEmitter()

// more typical pattern of usage of it is to inherit it
class MyEmitter extends EventEmitter {
  constructor (opts = {}) {
    super(opts)
    this.name = opts.name
  }
}
