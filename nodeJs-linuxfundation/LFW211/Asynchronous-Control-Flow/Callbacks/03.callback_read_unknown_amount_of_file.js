const { readFile } = require('fs')

const data = []
const files = Array.from(Array(3)).fill(__filename)

const print = (err, contents) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(contents.toString())
}

let index = 0
let count = files.length
const read = (file) => {
  readFile(file, (err, contents) => {
    if (err) print(err)
    else data.push(contents)

    index += 1
    if (index < count) read(files[index])
    else print(null, Buffer.concat(data))
  })
}

read(files[index])
