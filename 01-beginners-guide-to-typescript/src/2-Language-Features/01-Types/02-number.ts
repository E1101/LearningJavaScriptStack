/**
 * using Number, String, and Boolean over their lowercase counterparts:
 * number, string, and boolean.
 * In general, you should never use the uppercase variants as they refer
 * to objects and not primitives. Using a combination of the two can lead
 * to unexpected errors.
 */
let x: number;
let y: Number;

x = y; // Error


/**
 * [ Number ]
 *
 * All numbers in TypeScript are treated equally, so a number with a
 * decimal (i.e. 3.14) has the same type as that of a whole number (i.e. 42)
 */
const pi = 3.14; // inferred number
const year = 2019; // inferred number
const quantity: number = 92; // explicit number

/**
 * [ Number Literal Types ]
 *
 * In cases where we need an exact match to a specific number, we can use a
 * number literal type to only accept values that are equal to that number
 */
type LowPriority = 5;
type HighPriority = 1;

const yy: LowPriority = 5; // OK
const zz: HighPriority = 3; // Error: 3 is not assignable to 1

/**
 * [ Numeric Separators ]
 *
 */
const MILES_FROM_SUN = 93_000_000;
