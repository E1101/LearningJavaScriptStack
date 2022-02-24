const w = true; // inferred boolean
const y = !w; // inferred boolean

const x: boolean = false; // explicit boolean

/**
 * If we need a type that distinguishes between true and false,
 * we can use a boolean literal type:
 */
type Yes = true;
type No = false;

const xx: Yes = true; // OK
const yy: No = false; // OK
const zz: Yes = false; // Error: 'false' is not assignable to 'true'
