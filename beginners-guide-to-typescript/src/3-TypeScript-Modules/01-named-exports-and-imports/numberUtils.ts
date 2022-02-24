/**
 * [ Named Exports and Imports ]
 *
 * We normally use named exports when we want to export multiple declarations
 * from one file. In the example below, we have a numberUtils.ts that exports
 * two utility functions and one constant:
 */
// numberUtils.ts
const MAX_NUMBER = Infinity;

function getMax(numbers: number[]): number {
    return Math.max(...numbers);
}

function getMin(numbers: number[]): number {
    return Math.min(...numbers);
}

export {
    getMax,
    getMin,
    MAX_NUMBER,
}

/**
 * Alternatively, we can export the declarations directly when
 * defining the functions and constant:
 */
// numberUtils.ts
export const MAX_NUMBER2 = Infinity;

export function getMax2(numbers: number[]): number {
    return Math.max(...numbers);
}

export function getMin2(numbers: number[]): number {
    return Math.min(...numbers);
}
