const { readFile } = require('fs')
const { promisify } = require('util')

// Convert call-back based API to promise.
const readFileProm = promisify(readFile)
const promise = readFileProm(__filename)

promise.then((contents) => {
  console.log(contents.toString())
})

promise.catch((err) => {
  console.error(err)
})
