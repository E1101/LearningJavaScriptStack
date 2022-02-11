/**
 * Get all possible pairs out of provided letters.
 *
 * Example:
 * letter = ['a', 'b']
 * output = ['aa', 'ab', 'ba', 'bb']
 *
 * @param {string[]} letters
 * @return {string[]}
 */
export function pairs(letters) {
  const result = [];

  for (let i = 0; i < letters.length; i += 1) {
    for (let j = 0; j < letters.length; j += 1) {
      result.push(`${letters[i]}${letters[j]}`);
    }
  }

  return result;
}
