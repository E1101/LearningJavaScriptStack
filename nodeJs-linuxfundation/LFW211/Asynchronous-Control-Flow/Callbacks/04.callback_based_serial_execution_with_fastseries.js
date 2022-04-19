const { readFile } = require('fs')
const series = require('fastseries')()

// `data` is an array of all results processed with `series`
const print = (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(Buffer.concat(data).toString())
}

const files = Array.from(Array(3)).fill(__filename)

// here the array of files is mapped into an [array of functions] that
// `fastseries` can consume.
const readers = files.map((file) => {
  // the second parameter is the callback function which we must
  // call to let `fastseries` know we have finished an async operation.
  // the first parameter of mapped function will be whatever the last result was,
  // since we dont use parameter we assigned the parameter to `_`.
  return (_, cb) => {
    readFile(file, (err, contents) => {
      if (err) cb(err)
      else cb(null, contents)
    })
  }
})

// last parameter `print` will be called when all the `readers`
// have been processed with `series`
series(null, readers, null, print)
