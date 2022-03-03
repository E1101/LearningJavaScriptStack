const { readFile } = require('fs').promises

const files = Array.from(Array(3)).fill(__filename)

const print = (data) => {
  console.log(Buffer.concat(data).toString())
}

const readers = files.map((file) => readFile(file))
// it takes an array of promises and return a promise that resolves when
// all promises have been resolved.
// that returned promise resolve to an array of the values for each of the promises.
// * promises will run in parallel
Promise.all(readers)
  .then(print)
  .catch(console.error)
