/**
 * [ Destructuring Arrays ]
 */
const yellow = [255, 255, 0];

const red = yellow[0]; // 255
const blue = yellow[1]; // 255
const green = yellow[2]; // 0

// With destructing
const [redD, greenD, blueD] = yellow;

console.log(redD); // 255
console.log(blueD); // 255
console.log(greenD); // 0

// If we wanted to only extract the first element in the array,
// we can do so by omitting the second and third values:
const [r] = yellow;
console.log(r); // 255

// To only extract the third item in the array, we can use commas to
// indicate that we want to ignore the first two elements of the array:
const [,, g] = yellow;
console.log(g); // 0

// if we want to save the first variable in an array to a variable
// and save the rest of the members of the array into a new array,
// we can do so by using the rest operator:
const [rd, ...blueAndGreen] = yellow;
console.log(rd); // 255
console.log(blueAndGreen); // [255, 0]

// If we destructure an element that does not exist, the destructured
// variable will be undefined at runtime:
const [redx, bluex, greenx, alphax] = yellow;
console.log(alphax); // undefined

// In cases where we know an element might not exist,
// we can set a default value using the = symbol:
const [reda, bluea, greea, alpha = 1] = yellow;
console.log(alpha); // 1

/**
 * [ Destructuring Objects ]
 */
const purple = {
    red: 128,
    blue: 0,
    green: 128,
};

const redO = purple.red; // 128
const blueO = purple.blue; // 0
const greenO = purple.green; // 128

// destrucutre fields from our purple object:
// The destructured variable names have to match
// the property names being extracted.
const { red, blue, green } = purple;

console.log(red); // 128
console.log(blue); // 0
console.log(green); // 128

// If we want to assign new names to the extracted properties:
const {
    red: redValue,
    blue: blueValue,
    green: greenValue,
} = purple;

console.log(redValue); // 128
console.log(blueValue); // 0
console.log(greenValue); // 128

// As of ES2018, we can use the rest operator to save a subset
// of an object into a new variable:
const { red: redV, ...blueAndGreenObj } = purple;

console.log(redV); // 128
console.log(blueAndGreenObj); // { blue: 0, green: 128 }

// If we suspect that a value may not exist in the object we are
// destructuring from, we can set default values using the = symbol:
// ---
// Any destructured properties that do not exist on the target object
// will take a default value of undefined if no default is provided.
const { alfa = 1 } = purple;
console.log(alfa); // 1


// Note the use of parentheses in the expressions above.
// They are required when we are assigning to variables that have
// already been declared as there is ambiguity with lines that
// start with curly braces.
let rd, blu, grn;
({ rd, blu, grn } = {}); // OK

