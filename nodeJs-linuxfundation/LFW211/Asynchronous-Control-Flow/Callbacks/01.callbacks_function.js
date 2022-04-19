const { readFile } = require('fs')

// always having error as first parameter for callbacks is
// convention in NodeJs. this type of error first callback
// known as ErrBack.

// `__filename` hold the path of current file being executed
readFile(__filename, (err, contents) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(contents.toString())
})
