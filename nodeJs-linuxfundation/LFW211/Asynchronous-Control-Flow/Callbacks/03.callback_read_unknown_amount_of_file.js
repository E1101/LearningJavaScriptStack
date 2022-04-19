const { readFile } = require('fs')

const files = Array.from(Array(3).fill(__filename))

function readFiles(files, callback) {
  const data = [];

  let index = 0;
  const read = (file) => {
    readFile(file, (err, content) => {
      if (err) return callback(err)
      data.push(content)

      index += 1
      if (index < files.length) read(files[index])
      else callback(null, Buffer.concat(data))
    })
  }

  read(files[index])
}

const printCallback = (err, content) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(content.toString())
}

readFiles(files, printCallback)
