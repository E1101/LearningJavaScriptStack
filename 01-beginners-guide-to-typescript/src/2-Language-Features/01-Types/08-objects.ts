/**
 * object is used when we expect an object whose key/value pairs are irrelevant.
 */
let x: object;

// Assigning to primitives
x = 'hi'; // Error
x = 2000; // Error
x = null; // Error
x = true; // Error

// Assigning to non-primitives
x = { random: true }; // OK
x = [10, 20, 30, 40]; // OK

/**
 * When using object as the type of a function's parameter, the function's
 * body and return type should not make any assumptions about the properties
 * of the given object.
 *
 * A real-world use case for object is a function that returns the number of keys in an object:
 */
function numKeys(obj: object): number {
    return Object.keys(obj).length;
}

const products = {
    'id1': 'Toilet paper',
    'id2': 'Water',
    'id3': 'Keyboard',
};

const numProducts = numKeys(products); // 3

/**
 * [ Typing object properties ]
 *
 * We use an object literal syntax to describe the shape of an object's type.
 * In the example below, we declare the Phone type using a type alias and
 * assign an iPhone of type Phone to a few object literals:
 */
type Phone = {
    name: string;
    id: string;
    rating: number;
};

let iPhone: Phone;

iPhone = {
    name: 'iPhone',
    id: 'uniqueID123',
    rating: 10,
}; // OK

iPhone = {
    name: 'iPhone',
    id: 'uniqueID123',
}; // Error: missing 'rating' field

iPhone = {
    name: 'iPhone',
    id: 'uniqueID123',
    rating: '10', // Error: string is not assignable to number
};

iPhone = {
    title: 'iPhone',
    id: 'uniqueID123',
    rating: 3,

    // excess fields
    randomField: 'Hi mom!', // Error: excess field
    anotherRandomField: 2, // Error: excess field
};

// the shape of the literal has to exactly match the shape that we defined in the Phone type.
// But the above is only true when assigning to object literals. When assigning to an existing
// object, only missing fields will produce an error:
const android = {
    title: 'Android',
    id: 'uniqueID123',
    rating: 3,

    // excess fields
    randomField: 'Hi dad!',
    anotherRandomField: 10000,
};

iPhone = android; // OK! Even though android has extra fields

/**
 * [ Optional properties ]
 *
 */
type Student = {
    id: string;
    name: string;

    age?: number; // optional
    isEnrolled?: boolean; // optional
};

let s: Student;

s = {
    id: 'testId',
    name: 'Mary',
}; // OK

s = {
    id: 'testId',
    // Error: missing 'name'
};

s = {
    id: 'testId',
    name: 'Michael',
    age: 22,
}; // OK

s = {
    id: 'testId',
    name: 'Stephanie',
    isEnrolled: true,
}; // OK

/**
 * When writing a function that consumes an object with optional properties,
 * we have to ensure that we handle the cases where optional properties are
 * not initialized.
 * ---
 * When the --strictNullChecks flag is enabled, optional properties become a
 * union of the property type and undefined.
 */
function logStudent(student: Student) {
    const {
        id,
        name,
        age,
        isEnrolled
    } = student;

    const ageMessage = age === undefined ? '' : `age: ${age}`
    const isEnrolledMessage = isEnrolled === undefined ? '' : `isEnrolled: ${isEnrolled}`

    const message = `
    id: ${id}
    name: ${name}
    ${ageMessage}
    ${isEnrolledMessage}
    `;

    console.log(message);
}
