'use strict'

const { Readable } = require('stream')

const createReadStream = (data) => {
  return new Readable({
    // the `read` function is called any time Node internals request
    // more data from readableStream.
    read () {
      // `this.` point to readable stream instance

      // passing `null` as argument to indicate that this is end of stream
      if (data.length === 0) this.push(null)
      else this.push(data.shift())
    }
  })
}

const readable = createReadStream(['some', 'data', 'to', 'read'])
readable.on('data', (data) => { console.log('got data', data) })
readable.on('end', () => { console.log('finished reading') })

/*
got data <Buffer 73 6f 6d 65>
got data <Buffer 64 61 74 61>
got data <Buffer 74 6f>
got data <Buffer 72 65 61 64>
finished reading
 */
