/**
 * [ Functions as values ]
 *
 * Typing these functions is the same as typing named functions:
 * we add parameter types and a return type:
 */
const oneSecond = 1000;

setTimeout(
    function(delay: number): void {
        console.log(`${delay} seconds have passed.`);
    },
    oneSecond,
    /* passed to function: */ oneSecond,
);

/**
 * To create our own version of setTimeout(), we need a way of
 * representing functions as input parameters to a function.
 */
/**
 * The left of the '=>' contains the parameter types.
 * The right of the '=>' contains the return type.
 */
type NumFn = (delay: number) => void;

const printNum: NumFn = function(num: number) {
    console.log(num);
}; // OK

const printStr: NumFn = function(str: string) {
    console.log(str);
}; // Error: expected function that takes number as first parameter

function delay(fn: NumFn, delay: number) {
    setTimeout(
        fn,
        delay,
        /* passed to fn */ delay,
    );
}

// delay() will only accept functions that take number
// as the first parameter and have no return value:
function printDelay(delay: number) {
    console.log(`delay: ${delay}`);
}

delay(printDelay, 1000); // delay: 1000

delay(function(num) {
    console.log(`waited for: ${num / 1000} seconds`);
}, 2000); // waited for: 2 seconds

delay(function(str: string) {
    console.log(str);
}, 1000); // Error: expected function that takes number a
