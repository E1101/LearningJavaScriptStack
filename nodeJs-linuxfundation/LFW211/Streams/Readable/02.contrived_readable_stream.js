'use strict'
const { Readable } = require('stream')

const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    // the `read` function is called any time Node internals request
    // more data from readableStream.
    read () {
      // `this` point to readable stream instance

      // passing `null` as argument to indicate that this is end of stream
      if (data.length === 0) this.push(null)
      else this.push(data.shift())
    }
  })
}

const readable = createReadStream()
readable.on('data', (data) => { console.log('got data', data) })
readable.on('end', () => { console.log('finished reading') })
