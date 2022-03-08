const { StringDecoder } = require('string_decoder')

console.log(Buffer.from('👀')) // <Buffer f0 9f 91 80>
// 👀 in two chunk
const frag1 = Buffer.from('f09f', 'hex')
const frag2 = Buffer.from('9180', 'hex')

console.log(frag1.toString()) // prints �
console.log(frag2.toString()) // prints ��

// calling decoder.write will output character only when all of
// the bytes representing that character have been written to decoder.
const decoder = new StringDecoder()
console.log(decoder.write(frag1)) // prints nothing
console.log(decoder.write(frag2)) // prints 👀
