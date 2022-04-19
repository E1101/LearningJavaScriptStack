// 'use strict'
// we don't need it as ESM Modules essentially execute in strict mode anyway.

export const upper = (str) => {
    if (typeof str === 'symbol') str = str.toString();
    str += ''
    return str.toUpperCase();
}

export default {
    upper
}
