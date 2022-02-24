const firstName = "Pam"; // inferred string (double quotes)
const lastName = ' Beesly'; // inferred string (single quotes)

const greeting: string = 'Hi ' + firstName + '!'; // explicit string

/**
 * For cases where we need to interpolate data into strings,
 * we use template literals, which allow us to insert expressions
 * directly into strings
 */
const userName = "Michael";
const greetings = `Greetings, ${userName}!`; // Greetings, Michael!

const math = `2 + 2 = ${2 + 2}`; // 2 + 2 = 4

/**
 * Template literals also facilitate multi-line strings.
 * Note that all whitespace in a template literal is included
 * in the output, so any indentation that we make in a template
 * literal will also appear in the resulting string.
 */
const html = `
<div>
  <h1>Hello, World!</h1>
  <section>
    <p>
      This is a paragraph....
    </p>
  </section>
</div>
`;

/**
 * [ String Literal Types ]
 *
 * All strings are assignable to string. If we need a type that is
 * only assignable to a specific string literal, we can use string
 * literal types to ensure that only a specific string is accepted.
 */
type FirstDay = 'Monday';

const x: FirstDay = 'Monday'; // OK
const y: FirstDay = 'Tuesday'; // Error

/**
 * To model all days of the week, we can use a union of string literal types
 */
type WeekDay =
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'

const firstDay: WeekDay = 'Sunday'; // OK
const secondDay: WeekDay = 'Saturday'; // OK

const secondDayTypo: WeekDay = 'Satday'; // Error


