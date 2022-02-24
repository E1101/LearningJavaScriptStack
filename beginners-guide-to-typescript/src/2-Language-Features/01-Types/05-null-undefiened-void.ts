/**
 * By default, the null and undefined types are assignable to all types:
 */
const a: number = null; // OK
const b: string = null; // OK
const c: undefined = null; // OK

const x: number = undefined; // OK
const y: string = undefined; // OK
const z: null = undefined; // OK

/**
 * [ --strictNullChecks ]
 * we are able to turn on compiler flags to change the behavior of the compiler.
 * Among the most popular and recommended flags is the --strictNullChecks flag,
 * which changes the behavior of null and undefined to the following:
 * null is only assignable to null and any undefined is only assignable to undefined, any, and void.
 * With this flag enabled, we can't unintentionally use null or undefined unless we explicitly allow it.
 * In cases where we want a value to be assignable to null or undefined, we have to make that relationship explicit:
 */
const x: number = undefined; // Error
// with strictNullChecks
const x: number | undefined = undefined; // OK

/**
 * only recommended use for void is as the return type for functions that do not return any value
 */
function log(msg: string): void {
    console.log(msg);
    // OK -- no return type
}
