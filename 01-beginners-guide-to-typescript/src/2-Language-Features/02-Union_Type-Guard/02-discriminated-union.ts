/**
 * Discriminated unions, also referred to as tagged unions or disjoint unions,
 * allow us to discriminate (or differentiate) the types that comprise a union.
 * ---
 * our objective now is to build a type that enforces that an object is either
 * a Student or a Professor.
 */
type Student = {
    role: 'student'; // discriminant
    name: string;
    age: number;
    major: string;
};

type Professor = {
    role: 'professor'; // discriminant
    name: string;
    age: number;
    classes: string[];
};

type SchoolMember = Student | Professor;

let member: SchoolMember;

member = {
    role: 'student',
    name: 'Ciara',
    age: 26,
    major: 'Computer Science',

    // excess property
    classes: ['algorithms', 'data structures']
}; // Error: Student does not have property 'classes'

member = {
    role: 'student',
    name: 'Elliot',
    age: 19,
    major: 'Music Tech',
}; // OK

member = {
    role: 'professor',
    name: 'Erica',
    age: 33,
    classes: ['discrete math', 'programming languages'],
}; // OK

/**
 * as soon as we write a function that consumes a SchoolMember,
 * we'll notice that TypeScript does not allow us to access the
 * unique properties of Student or Professor:
 */
function logMember_Failed(member: SchoolMember) {
    console.log(member.role); // OK
    console.log(member.name); // OK
    console.log(member.age); // OK

    // log property unique to Student
    console.log(member.major); // Error

    // log property unique to Professor
    console.log(member.classes); // Error
}

// Type guards are conditional checks that can use the discriminants
// at runtime to determine the type of a union in a given scope.
function logMember(member: SchoolMember) {
    console.log(member.role); // OK
    console.log(member.name); // OK
    console.log(member.age); // OK

    if (member.role === 'student') {
        // log property unique to Student
        console.log(member.major); // OK
    }

    if (member.role === 'professor') {
        // log property unique to Professor
        console.log(member.classes); // OK
    }
}
