// convert string to bytes value, the default encoding that Buffer.from
// uses is utf8
const buffer = Buffer.from('hello world')

// utf8 encoding may have up to 4 bytes per character:
console.log('👀'.length) // 2 for more detail on js unicode problem https://mathiasbynens.be/notes/javascript-unicode
console.log(Buffer.from('👀').length) // the emoji eyes represented by 4 bytes

console.log(Buffer.from('8J+RgA==', 'base64')) // <Buffer f0 9f 91 80>
console.log(Buffer.from('👀'))                    // <Buffer f0 9f 91 80>
