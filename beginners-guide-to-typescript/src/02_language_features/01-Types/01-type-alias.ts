/**
 * The right-hand side of the = symbol must be a type expression,
 * which may be another type or the result of operating on several
 * types (such as a union or intersection of types).
 * We cannot use a runtime expression, such as a function call or
 * the result of a mathematical operation.
 * ---
 * Type aliases are exportable
 */

// Using Type Aliases over simply using `string` gives us benefits:
// - our code is more readable as we know that `myStudent` refer
//   to unique identifiers as opposed to generic `string` which
//   can have multiple interpretation.
// - the logic behind `StudentId` is centralized. if there is ever
//   a need to change the definition of `StudentId` (i.e changing to number)
//   we can make the change in one place while beign warned about type errors
//   resulting from change
export type StudentId = string;

const myStudent: StudentId = '222'; // OK
// -------------------------------------

type Age = number;
type Identifier = string;
type Week = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const age: Age = 20;
const id: Identifier = '1lulua';
const day: Week = 2;
