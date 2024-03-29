'use strict'

const { createGzip } = require('zlib')

const transform = createGzip()

transform.on('data', (data) => {
  console.log('got gzip data', data)
})

transform.write('first')

setTimeout(() => {
  transform.end('second')
}, 500)
