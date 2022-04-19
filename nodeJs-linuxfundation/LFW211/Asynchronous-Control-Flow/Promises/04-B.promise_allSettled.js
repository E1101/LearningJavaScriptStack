const Arr = ['P1', 'P2', 'P3']

const asyncCall = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.floor((Math.random() * Arr.length)) / Arr.length === 0)
                reject(new Error(`error reading ${value}`))
            resolve(value)
        }, Math.floor(Math.random() * 100))
    })
}

const data = [];
Promise.allSettled(Arr.map(value => asyncCall(value)))
    .then(result => {
        result.filter(settled => settled.status === 'rejected')
            .forEach(settled => {
                console.error(settled.reason)
            })
        return result
    })
    .then(result => {
        result.filter(({ status }) => status === 'fulfilled')
            .forEach(({ value }) => {
                data.push(value)
            })
    }).then(() => {
    console.log(data)
})
