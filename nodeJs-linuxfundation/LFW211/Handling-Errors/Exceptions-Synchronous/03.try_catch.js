function doTask (amount) {
  if (typeof amount !== 'number') throw new TypeError('amount must be a number')
  if (amount <= 0) throw new RangeError('amount must be greater than zero')
  if (amount % 2) throw new OddError('amount')
  return amount / 2
}

try {
  const result = doTask(4)
  // this will return an error object of typeError cause number is not a func.
  // this can cause confusion, it's all too easy to assume that the typeError
  // came from `doTask` whereas it was actually generated locally.
  result()
  console.log('result', result)
} catch (err) {
  if (err instanceof TypeError) {
    console.error('wrong type')
  } else if (err instanceof RangeError) {
    console.error('out of range')
  } else if (err.code === 'ERR_MUST_BE_EVEN') {
    console.error('cannot be odd')
  } else {
    console.error('Unknown error', err)
  }
}
