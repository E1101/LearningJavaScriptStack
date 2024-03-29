'use strict'

const { Readable } = require('stream')

// sets objectMode to true by default
const readable = Readable.from(['some', 'data', 'to', 'read'])

readable.on('data', (data) => { console.log('got data', data) })
readable.on('end', () => { console.log('finished reading') })

/*
got data some
got data data
got data to
got data read
finished reading
 */
