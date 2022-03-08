'use strict'
const { Readable } = require('stream')

const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    objectMode: true, // <====----
    read () {
      if (data.length === 0) this.push(null)
      else this.push(data.pop())
    }
  })
}

const readable = createReadStream()
readable.on('data', (data) => { console.log('got data', data) })
readable.on('end', () => { console.log('finished reading') })

// this way it will directly read as object without first read as buffer then converted with encoding option

/*
got data some
got data data
got data to
got data read
finished reading
*/
