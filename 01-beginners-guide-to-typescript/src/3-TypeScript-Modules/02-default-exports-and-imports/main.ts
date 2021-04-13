/**
 * When a file only contains one export, it is customary to use
 * a default export over a named export.
 */
import getMax from './getMax';
import getMin from './getMin';
import MAX from './maxNumber';

getMax([1, 2, 3]); // 3
getMax([9999, MAX]); // Infinity

getMin([1, 2, 3]); // 1
getMin([MAX, 1, 0]); // 0
