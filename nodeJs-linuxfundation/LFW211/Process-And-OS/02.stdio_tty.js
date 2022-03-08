'use strict'
const { Transform } = require('stream')

// we can pipe from command line or input by running command alone
console.log(process.stdin.isTTY ? 'terminal' : 'piped to')

const createUppercaseStream = () => {
  return new Transform({
    transform (chunk, enc, next) {
      const uppercased = chunk.toString().toUpperCase()
      next(null, uppercased)
    }
  })
}

const uppercase = createUppercaseStream()
// process streams are never finish, error or close.
process.stdin.pipe(uppercase).pipe(process.stdout)
