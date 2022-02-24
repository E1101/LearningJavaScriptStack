/**
 * Prior to ES2015, JavaScript variables were declared using the var keyword.
 * When declaring variables with var, those variables are not block scoped,
 * meaning variable declarations within if-statements and loops are visible
 * outside of those blocks.
 */
for(var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

console.log(`i is ${i}`);
/*
i is 3 (prints immediately)
3
3
3
 */

/**
 * The introduction of let and const allows us to declare block-scoped variables
 * whose scope starts and ends with the containing block.
 */
for(let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
/*
0
1
2
 */

// Notice we removed the console.log() statement following the for-loop
// because that statement now throws a ReferenceError as i no longer
// exists outside of our for-loop.

/**
 * When declaring variables that point to objects, we can still modify
 * the underlying object even when using const as it does not enforce
 * immutability--it only enfores assignability.
 */
const weather = {
    temperature: 60,
    windSpeed: 10,
};

weather.temperature = 80; // OK
weather.windSpeed = 20; // OK

weather = {
    temperature: 80,
    windSpeed: 20,
}; // Error: cannot reassign a const
