// in example below we use union to specify that
// a variable `myDate` can be `string` or `Date`

// `Date` type is available globally in JS
let myDate: string | Date;

myDate = new Date(); // OK
myDate = '1/2/19'; // OK
myDate = new Date('1/2/19'); // OK

myDate = Date.now(); // ERROR (number)
myDate = (new Date()).getMonth(); // ERROR (number)
myDate = 2019 // ERROR (number)

