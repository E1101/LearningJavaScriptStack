/**
 * Calculate factorial.
 *
 * Example:
 * number = 5
 * output = 120
 *
 * @param {number} number
 * @return {number}
 */
export function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return factorial(number - 1) * number;
}
