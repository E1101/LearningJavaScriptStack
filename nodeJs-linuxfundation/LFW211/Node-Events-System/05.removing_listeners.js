const { EventEmitter } = require('events')

const ee = new EventEmitter()
const listener1 = () => { console.log('listener 1') }
const listener2 = () => { console.log('listener 2') }

ee.on('my-event', listener1)
ee.on('my-event', listener2)

// `my-event` emitted every 200 ms
setInterval(() => {
  ee.emit('my-event')
}, 200)

// after 500 ms `listener1` is removed,
// so `listener1` is only called twice before it's removed
setTimeout(() => {
  ee.removeListener('my-event', listener1)
}, 500)

// `listener2` is triggered five times
setTimeout(() => {
  ee.removeListener('my-event', listener2)
}, 1100)

setTimeout(() => {
  ee.removeAllListeners('my-event')
}, 2000)
