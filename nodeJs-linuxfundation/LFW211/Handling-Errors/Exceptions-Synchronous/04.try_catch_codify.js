function codify (err, code) {
  err.code = code
  return err
}

function doTask (amount) {
  if (typeof amount !== 'number') throw codify(
    new TypeError('amount must be a number'),
    'ERR_AMOUNT_MUST_BE_NUMBER'
  )

  if (amount <= 0) throw codify(
    new RangeError('amount must be greater than zero'),
    'ERR_AMOUNT_MUST_EXCEED_ZERO'
  )

  if (amount % 2) throw new OddError('amount')

  return amount/2
}

try {
  const result = doTask(4)
  result()
  console.log('result', result)
} catch (err) {
  if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
    console.error('wrong type')
  } else {
      if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
        console.error('out of range')
      } else if (err.code === 'ERR_MUST_BE_EVEN') {
        console.error('cannot be odd')
      } else {
        console.error('Unknown error', err)
      }
    }
}
