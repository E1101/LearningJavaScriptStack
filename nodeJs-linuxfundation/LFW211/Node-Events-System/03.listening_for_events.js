const { EventEmitter } = require('events')

const ee = new EventEmitter()

ee.on('close', () => { console.log('close event fired!') })
// it also could be written as:
ee.addListener('close', () => {
  console.log('close event fired!')
})

ee.emit('close')

// argument passed to emit are received by the listener function:
ee.on('add', (a, b) => { console.log(a + b) }) // logs 13
ee.emit('add', 7, 6)

// listeners are also called in the order that they registered:
ee.on('my-event', () => { console.log('1st') })
ee.on('my-event', () => { console.log('2nd') })
ee.emit('my-event')

// listeners can be added in top positions with prepend:
ee.on('my-event', () => { console.log('2nd') })
ee.prependListener('my-event', () => { console.log('1st') })
ee.emit('my-event')
