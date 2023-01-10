/**
 * Raise number to the power.
 *
 * Example:
 * number = 3
 * power = 2
 * output = 3^2 = 9
 *
 * @param {number} number
 * @param {number} power
 * @return {number}
 */
export function fastPower(number, power) {
  return number ** power;
}

// for every input, the function does exactly one operation.
// that would mean that time complexity of this function is O(1)
// --
// the memory it requires is roughly the number of variables to operate
// Space Complexity: O(1)
