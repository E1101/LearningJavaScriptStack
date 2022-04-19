P1 = new Promise((resolve, reject) => {
    return resolve('P1')
})

P1.then(result => {
    console.log(result)
    return new Promise((resolve, reject) => {
        // throw new Error('Error!');
        return resolve('P2')
    })
}).then(result => {
    console.log('is this running?')
    console.log(result) // P2
}).catch(err => {
    console.log('error happen')
    throw err // to continue to next .catch chain
}).catch(err => {
    console.log('error log')
    console.log(err)
})
