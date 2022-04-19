let buffer = Buffer.from('👀')

console.group('Json')
console.log(buffer.toJSON())
console.log(
    // JSON.stringify will call buffer.toJSON() and the result is equivalent
    JSON.parse(JSON.stringify(buffer))
)

console.log(
    Buffer.from(buffer.toJSON().data)
)
console.log(
    Buffer.from(buffer.toJSON())
)


const buf = Buffer.from(JSON.stringify(buffer))
console.log(buf)
console.log(buf.toString())
