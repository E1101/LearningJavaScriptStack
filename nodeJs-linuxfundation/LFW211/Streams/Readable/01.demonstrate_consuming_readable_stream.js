'use strict'
const fs = require('fs')

// fs module here is used for demonstrate purpose

// readableStream have a default highWaterMark of 16kb, that
// means 16kb of data can be read before emitting a data event.
// in case of 64kb data file it would emit 4 times.
const readable = fs.createReadStream(__filename)
readable.on('data', (data) => { console.log(' got data', data) })
readable.on('end', () => { console.log(' finished reading') })

// Readable streams emit buffers by default

/*
 got data <Buffer 27 75 73 65 20 73 74 72 69 63 74 27 0a 63 6f 6e 73 74 20 6 72 65 28 27 66 73 27 29 0a 0a 2f 2f 20 66 73 20 6d 6f 64 75 6c ... 395 more bytes>
 finished reading
*/
