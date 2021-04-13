/**
 * the value being assigned to the union type cannot be two primitives or
 * two literals at the same time. This is intuitive as a value cannot be
 * both a string and a number, for example.
 */
type UserID = string | number;

let id: UserID;

id = 'test1'; // OK
id = 2000000; // OK

id = true; // Error
id = [1, 2]; // Error

/**
 * When we need a union over multiple types, we can split the union type
 * into multiple lines, with each line starting with the | character
 * (including the first line).
 */
type Month =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';

const birthdayMonth: Month = 'November'; // OK
const summerMonth: Month = 'July'; // OK

const winterMonth: Month = 'Decemb'; // Error

/**
 * When using unions on object types, we are able to express that an object
 * may have one of several shapes:
 * ---
 * Unlike unions over primitives, unions over objects are inclusive,
 * meaning an object may match multiple types in the union.
 * a SchoolMember may have either properties from Student, properties
 * from Professor, or properties from both Student and Professor.
 */
type Student = {
    name: string;
    age: number;
    major: string;
};

type Professor = {
    name: string;
    age: number;
    classes: string[];
};

type SchoolMember = Student | Professor;

let member: SchoolMember;

member = {
    name: 'Alec',
    age: 53,
    classes: ['calculus 1', 'machine learning'],
}; // OK

member = {
    name: 'Lisa',
    age: 32,
    major: 'Computer Science',
}; // OK

member = {
    name: 'Ciara',
    age: 26,
    major: 'Computer Science', // property of Student type
    classes: ['algorithms', 'data structures'] // property of Professor type
}; // OK -- but is this a Student or Professor?

// Looking at our definition for SchoolMember, it's clear we want
// a SchoolMember to be either a Student or a Professor, but not
// both. To do so, we turn to discriminated unions.
