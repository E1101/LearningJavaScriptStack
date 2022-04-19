'use strict'

const { Writable } = require('stream')

const createWriteStream = (data) => {
  return new Writable({
    // the default decoding mode is true, so each string written to our
    // writable stream instance is converted to buffer before it become
    // chunk argument passed to `write` method.
    decodeStrings: true,
    write (chunk, enc, next) {
      data.push(chunk)
      // next is a callback which must be called to indicate that we're
      // ready for the next piece of data.
      next()
    }
  })
}

const data = []
const writable = createWriteStream(data)

writable.on('finish', () => { console.log('finished writing', data) })

writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.end('nothing more to write')
