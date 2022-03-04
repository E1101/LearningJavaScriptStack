// WARNING: NEVER DO THIS:
try
{
  setTimeout(() => {
    // will throw OddError but will not be handled in catch block
    const result = doTask(3)
    console.log('result', result)
  }, 100)
} catch (err) {
  if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
    console.error('wrong type')
  } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
    console.error('out of range')
  } else if (err.code === 'ERR_MUST_BE_EVEN') {
    console.error('cannot be odd')
  } else {
    console.error('Unknown error', err)
  }
}
