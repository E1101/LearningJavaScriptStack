const Arr = ['P1', 'P2', 'P3']

const myPromiseFunction = function(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value)
      resolve(value)
    }, Math.floor(Math.random() * 100))
  })
}

const promises = Arr.map(value => myPromiseFunction(value))
Promise.all(promises)
    .then(data => {
        console.log(data) // [ 'P1', 'P2', 'P3' ]
    })
    .catch(error => {
        // if one of promises was to fail, Promise.all will reject
        console.log(error)
    })
