// with `Promise.all()` if one of promises was to fail, Promise.all will reject,
// and any successful promises are ignored.
// here `Promise.allSettled` can be used if we want more tolerance of each error.
const { readFile } = require('fs').promises

const print = (results) => {
  results
    .filter(({status}) => status === 'rejected')
    .forEach(({reason}) => console.error(reason))

  const data = results
    .filter(({status}) => status === 'fulfilled')
    .map(({value}) => value)

  const contents = Buffer.concat(data)
  console.log(contents.toString())
}

const files = [__filename, 'not a file', __filename]
const readers = files.map((file) => readFile(file))
Promise.allSettled(readers)
  .then(print)
  .catch(console.error)
