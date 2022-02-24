/**
 * @param {number} number
 * @return {boolean}
 */
export default function trialDivision(number) {
  // Prime numbers can only be integers
  if (number % 1 !== 0) {
    return false;
  }

  if (number <= 1) {
    // Any number less than or equal to 1 is not a prime
    return false;
  }

  if (number <= 3) {
    // 2 and 3 are prime numbers
    return true;
  }

  // If the number is divisble by 2, then it is not a prime number
  if (number % 2 === 0) {
    return false;
  }

  // If there is no dividers up to square root of n then there is no higher dividers as well.
  const dividerLimit = Math.sqrt(number);
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
}
