/**
 * [ Arrow functions ]
 *
 * arrow functions were introduced as part of ES2015 with a shorter
 * syntax and a this value that equals the this of the enclosing context.
 */
const accounts = [
    {
        name: 'Christine',
        isLoggedIn: false,
    },
    {
        name: 'Cory',
        isLoggedIn: true,
    },
    {
        name: 'Matt',
        isLoggedIn: true,
    }
];

const mapName = account => account.name; // implicit return

const filterAccount = account => {
    return !account.isLoggedIn; // explicit return
};

const names = accounts.map(mapName); // ["Christine", "Cory", "Matt"]

const loggedOutUsers = accounts.filter(filterAccount);

/**
 * We can type arrow functions in two ways: we either treat the
 * function as a value and add a type annotation
 */
/**
 * Typing an arrow function as a value
 */
type NumToStr = (num: number) => string;
const numToStr: NumToStr = (num) => String(num);

/**
 * Typing an arrow function inline
 */
const numToStr2 = (num: number): string => String(num);
