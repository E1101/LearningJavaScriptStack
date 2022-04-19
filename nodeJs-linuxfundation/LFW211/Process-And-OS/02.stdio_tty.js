'use strict'

const { Transform } = require('stream')

// we can pipe from command line or input by running command alone
console.log(process.stdin.isTTY ? 'terminal' : 'piped to')

const createUppercaseStream = () => {
  return new Transform({
    transform (chunk, enc, next) {
      const uppercase = chunk.toString().toUpperCase()
      next(null, uppercase)
    }
  })
}

// process streams are never finish, error or close.
process.stdin
  .pipe(createUppercaseStream())
  .pipe(process.stdout)
