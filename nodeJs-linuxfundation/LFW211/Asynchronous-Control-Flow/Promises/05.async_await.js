// async/await syntax enables cleaner approach to serial execution.

const { readFile } = require('fs').promises
// an async function always return a promise which will be
// resolved to whatever function return.
async function run () {
  // execution pause here until readFile resolved and return with value
  const contents = await readFile(__filename)
  console.log(contents.toString())
}

run().catch(console.error)
