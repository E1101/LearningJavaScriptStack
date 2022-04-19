'use strict'

const { opendir } = require('fs')
const { createServer } = require('http')
const { Readable, Transform, pipeline } = require('stream')

function serverPageNotFound(res) {
  res.statusCode = 404
  res.end('Not Found')
}

function serverError(res) {
  res.statusCode = 500
  res.end('Server Error')
}

const createEntryStream = () => {
  let LF = '[\n'
  return new Transform({
    writableObjectMode: true,
    readableObjectMode: false,
    transform(entry, enc, next) {
      next(null, `${LF} "${entry.name}"`)
      LF = ',\n'
    },
    final(cb) {
      this.push('\n]\n')
      cb()
    }
  })
}

createServer((req, res) => {
  if (req.url !== '/') return serverPageNotFound(res)

  opendir(__dirname, (err, dir) => {
    if (err) return serverError(res)

    const dirStream = Readable.from(dir)

    res.setHeader('Content-Type', 'application/json')

    pipeline(dirStream, createEntryStream(), res, err => {
      serverError(res)
      console.log(err)
    })
  })
}).listen(3000)
