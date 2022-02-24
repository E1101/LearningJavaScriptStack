/**
 * The right-hand side of the = symbol must be a type expression,
 * which may be another type or the result of operating on several
 * types (such as a union or intersection of types).
 * We cannot use a runtime expression, such as a function call or
 * the result of a mathematical operation.
 * ---
 * Type aliases are exportable
 */
export type StudentId = string;

const myStudent: StudentId = '222'; // OK
