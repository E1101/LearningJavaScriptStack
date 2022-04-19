'use strict'

const fs = require('fs')

// fs module here is used for demonstrate purpose

// readableStream have a default highWaterMark of 16kb, that
// means 16kb of data can be read before emitting a data event.
// in case of 64kb data file it would emit 4 times.
const readable = fs.createReadStream(__filename)

const contents = []
readable.on('data', (data) => {
  // Readable streams emit buffers by default
  contents.push(data)
  console.log(' got data', data)
})

readable.on('end', () => {
  console.log(Buffer.concat(contents).toString())
  console.log(' finished reading')
})
