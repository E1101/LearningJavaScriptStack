// emitting an `error` event on an event emitter will cause the
// event emitter to throw an exception if a listener for the `error`
// event has not been registered.
const { EventEmitter } = require('events')

// this will cause the process to crash and output an error
const ee = new EventEmitter()
process.stdin.resume() // keep process alive
ee.emit('error', new Error('oh oh'))

// if listener registered it will no longer crash
ee.on('error', (err) => {
  console.log('got error:', err.message )
})
