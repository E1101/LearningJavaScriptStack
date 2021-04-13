/**
 * To import named imports from another file, we use an import statement followed
 * by the names of the declarations that are being imported. In the example below,
 * we have a file main.js that imports utilities from numberUtils.js:
 */
import {
    getMax,
    getMin,
    MAX_NUMBER,
} from './numberUtils';

getMax([1, 2, 3]); // 3
getMax([9999, MAX_NUMBER]); // Infinity

getMin([1, 2, 3]); // 1
getMin([MAX_NUMBER, 1, 0]); // 0
