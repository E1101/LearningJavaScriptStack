/**
 * As a rule of thumb, we use the Array generic type notation
 * when parentheses would be needed to make the square bracket
 * notation work as expected:
 * meaning any value in the array may be a `number` or a `string`.
 */
const numsOrStrs1: (string | number)[] = [1, '2'];
const numsOrStrs2: Array<string | number> = ['1', 2, 3]; // preferred

/**
 * In the code below, we demonstrate array types:
 */
const numbers = [1, 2, 3]; // inferred number[]
const strings = ['a', 'b']; // inferred string[]
const strsOrNums = ['a', 2]; // inferred (number | string)[]

const booleans: boolean[] = [true, false]; // explicit boolean[]

/**
 * Even though we know that the first element in strsOrNums is type string and the
 * second element is type number, TypeScript interprets each element as having the same type.
 * If we try to assign an element in the array to a more specific type, we will get an error:
 */
const strNums = ['a', 2];
const myNum: number = strsOrNums[1]; // Error: number | string is not assignable to number
// we can use the as keyword to make a type assertion as our last resort:
const myNumc: number = strsOrNums[1] as number; // OK

/**
 * [ Tuples ]
 *
 * Similar to array types, tuple types represent sequential collections of data.
 * Unlike array types, tuple types also convey the length and order of the
 * elements in the array.
 *
 * we show a tuple of size three containing three number types
 * that together represent an RGB color:
 * Notice that the order and length of the array has to exactly
 * match the order and length of the type definition.
 */
type RGB = [number, number, number];

let color: RGB;

color = []; // Error
color = [1, 'a']; // Error
color = ['a', 1, 2]; // Error

color = [100, 200, 250]; // OK
color = [0, 0, 0]; // OK

/**
 * Type checking for tuples works as expected when adding elements to the array by index.
 */
color = [200, 200, 200];

color[0] = 200; // OK
color[1] = 'a'; // Error: expected number
color[3] = 250; // Error: index 3 does not exist in rgb

/**
 * But adding elements to tuples using built-in functions (such as Array.push() and Array.shift())
 * lets us sidestep type-checking by allowing any value to be added or removed from the array,
 * even if those values are not part of the tuple's type:
 */
color.push('a'); // OK, but should probably be an error
color.push(true); // OK, but should probably be an error

/**
 * -- Optional Elements
 *
 */
type RGBA = [number, number, number, number?];

let colorA: RGBA;

colorA = []; // Error
colorA = [1, 2]; // Error

colorA = [100, 200, 300]; // OK
colorA = [255, 255, 255, .5]; // OK
