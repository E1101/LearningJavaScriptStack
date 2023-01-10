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
export function iterativePower(number, power) {
  let result = 1;

  for (let i = 0; i < power; i += 1) {
    result *= number;
  }

  return result;
}

// O(n) example
