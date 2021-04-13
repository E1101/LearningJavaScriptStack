/**
 * [ Shorthand for property names ]
 */
const zipCode = '07030';
const street = 'River';
const houseNumber = '234';

// old syntax
const address = {
    zipCode: zipCode,
    street: street,
    houseNumber: houseNumber,
};

// ES2015 syntax
const addressES6 = {
    zipCode,
    street,
    houseNumber,
};

/**
 * [ Shorthand for method names ]
 */
const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
};

const calculator2 = {
    add(num1, num2) {
        return num1 + num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    },
}

/**
 * [ Computed property names ]
 */
function pick(obj, property) {
    // step 1: object initialization
    const phone = {};

    // step 2: property setting
    phone[property] = obj[property];

    return phone;
}

const employee = {
    name: 'Jim',
    age: 34,
    title: 'Software Engineer',
};

pick(employee, 'name'); // { name: 'Jim' }
pick(employee, 'age'); // { age: 34 }

// Using computed property names, we can shorten
// our pick function to the following:
function pickEs6(obj, property) {
    return {
        [property]: obj[property],
    };
}
