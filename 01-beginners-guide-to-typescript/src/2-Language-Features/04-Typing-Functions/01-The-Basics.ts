/**
 * [ Annotating Functions ]
 *
 * Typing functions consists of two parts: typing the parameters and typing the return value.
 * The line that defines the input types and return type is known as the function signature.
 */
function toNumber(str: string | number): number {
    return Number(str);
}

toNumber(true); // Error: expected string or number
toNumber(); // Error: expected 1 parameter

toNumber(10); // OK
toNumber('2000'); // OK

/**
 * [ Optional Parameters ]
 */
function formatMoney(
    amount: number,
    prefix?: string,
    decimalPlaces?: number,
): string {
    let formattedMoney = String(amount);

    if (decimalPlaces !== undefined)
        formattedMoney = amount.toFixed(decimalPlaces);

    if (prefix)
        formattedMoney = `${prefix}${formattedMoney}`;

    return formattedMoney;
}

formatMoney(2.00); // '2.00'
formatMoney(500, '¢'); // '¢500'
formatMoney(6.7777, '$', 2); // '$6.78'

formatMoney(); // Error: not enough arguments
formatMoney(2, '$', 2, 3); // Error: too many arguments

/**
 * [ Default Parameters ]
 *
 * Introduced in ES2015, Default Parameters allow us to set default
 * values for parameters that are not provided.
 *
 * Unlike optional parameters, default parameters can be followed by required parameters.
 * ---
 * we need to either mark minimumTip as optional, or switch the ordering of percentage
 * and minimumTip so that we do not have to explicitly pass percentage when calling the function.
 */
function getTip(
    bill: number,
    percentage: number = 20,
    minimum: number,
): number {
    const calculatedTip = (percentage / 100) * bill;

    return Math.max(calculatedTip, minimum);
}

getTip(200, 15, 35); // 35
getTip(100, 18, 15); // 18

getTip(100, undefined, 15); // 20
getTip(200, undefined, 50); // 50

getTip(200); // Error: expected 3 parameters
getTip(200, 15); // Error: expected 3 parameters

/**
 * [ Rest Parameters ]
 *
 * Introduced in ES2015, rest parameters allow us to define an
 * indeterminate number of function parameters.
 * ---
 * Each argument that is passed to the function is added to the array,
 * even if we only pass in one value; passing zero values results in
 * an empty array.
 */
function sum(...nums: number[]): number {
    const startingValue = 0;
    const add = (prev, curr) => prev + curr;

    return nums.reduce(add, startingValue);
}

sum(); // 0
sum(1, 2, 3); // 6
sum(1, 10, 100, 1000); // 1111

// We can use this to our advantage if we want to define a minimum number
// of arguments that can be passed to an unbounded function. In the example
// below, getMax() takes at minimum two values:
function getMax(
    num1: number,
    num2: number,
    ...restOfNumbers: number[]
): number {
    const numList = restOfNumbers.concat([num1, num2]);
    const getMaxOfTwoValues = (n1, n2) => Math.max(n1, n2);

    return numList.reduce(getMaxOfTwoValues);
}

getMax(1, 2); // 2
getMax(0, -30, -40); // 0

getMax(); // Error: missing 2 arguments
getMax(10); // Error: missing 1 argument
