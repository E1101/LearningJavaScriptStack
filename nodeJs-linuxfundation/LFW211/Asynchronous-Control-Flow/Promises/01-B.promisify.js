const { promisify } = require('util')

const promisified = promisify((arg1, arg2, cb) => {
    if (arg1 < 0 || arg2 < 0) {
        cb(new Error('negative numbers are not acceptable.'))
        return
    }

    cb(null, arg1 + arg2)
})

promisified(1, 2)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
