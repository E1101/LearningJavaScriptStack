'use strict'

const { Writable } = require('stream')

const createWriteStream = (data) => {
  return new Writable({
    // by default it's not possible to write any other type other
    // than string with `objectMode` set to true it wont crash by writing int
    // in this example.
    objectMode: true, // <===----
    write (chunk, enc, next) {
      data.push(chunk)
      next()
    }
  })
}

const data = []
const writable = createWriteStream(data)

writable.on('finish', () => { console.log('finished writing', data) })
writable.write('A\n')
writable.write(1) // <=====-----
writable.end('nothing more to write')
