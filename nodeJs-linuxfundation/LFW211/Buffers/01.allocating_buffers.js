// allocate buffer of 10 bytes by default it produces a zero-filled buffer.
// when we output buffers it appear in hexadecimal form so the 64 represent the number 100
const buffer = Buffer.alloc(10)

// with an unwiped memory
const bufferUnsafe = Buffer.allocUnsafe(10)
