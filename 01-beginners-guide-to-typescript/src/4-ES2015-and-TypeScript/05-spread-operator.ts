/**
 * [ Spread Operator ]
 *
 * ES2015 introduced spreading for arrays and function calls.
 * ES2018 introduced spreading for objects.
 * Both specifications are supported in TypeScript.
 */

/**
 * [ Spreading Arrays ]
 */
const firstArr = [1,2];
const secondArr = [3,4];
const thirdArr = [...firstArr, ...secondArr, 5, 6];
console.log(thirdArr); // [1, 2, 3, 4, 5, 6];

/**
 * spreading is not exclusive to arrays. Any iterable object can be spread over an array.
 *
 * An iterable is a JavaScript object that conforms to the iterator protocol,
 * which was introduced in ES2015 as a way for objects to specify iteration behavior
 * for cases like spreading and for..of loops. Array, String, Map, and Set
 * all implement the iterator protocol.
 */
const arrFromStr = [...'Types']; // ['T', 'y', 'p', 'e', 's']
const arrFromMap = [...new Map([ 'a', true ])]; // [['a', true]]
const arrFromSet = [...new Set([1, 2, 3])]; // [1, 2, 3]

// Iterables can be spread over function calls:
const nums = [100, 3, 500];
const max = Math.max(...nums); // 500

/**
 * [ Spreading Objects ]
 *
 * When spreading an object, all of the own properties of the object will
 * be copied into the resulting object.
 *
 * Own properties are properties that belong to the object itself as
 * opposed to being inherited from an object in the protoype chain.
 */
const Name = {
 firstName: 'Andy',
 lastName: 'Bernard',
};

const Location = {
 state: 'PA',
};

const person = {
 ...Name,
 ...Location,
};

console.log(person); // { firstName: 'Andy', lastName: 'Bernard', state: 'PA' }

/*
 * (!) [ Object spread vs. Object.assign ]
 *
 * Object.assign(), which allows us to copy an object's properties into a target object.
 * This behavior is identical to using the spread operator, but Object.assign() modifies
 * the target object while the spread operator is used to create new objects.
 */

/**
 * [ TypeScript Considerations ]
 */
const arr1 = [1, 2]; // number[]
const arr2 = ['a', 'b']; // string[]
const arr3 = [...arr1, ...arr2]; // (number | string)[]

const obj1 = {
 a: 100,
 b: 'hello!',
 c: true,
}; // { a: number, b: string, c: boolean }

const obj2 = {
 a: 'goodbye!',
 d: false,
}; // { a: string, d: boolean }

const obj3 = {
 ...obj1,
 ...obj2,
}; // { a: string, b: string, c: boolean, d: boolean }

const ob4 = {
 ...obj2,
 ...obj1,
}; // { a: number, b: string, c: boolean, d: boolean }
