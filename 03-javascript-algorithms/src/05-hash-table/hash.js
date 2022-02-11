/**
 * Converts string key into bucket cell index using characters code sum.
 *
 * Example:
 * key = 'ab'
 * bucketsNumber = 100
 * Output = 95 (which is (97 + 98) % 100, since ASCII for 'a' is 97 and for 'b' is 98)
 *
 * @param {string} key - Key value that needs to be hashed.
 * @param {number} bucketsNumber - The number of available buckets.
 * @return {number} - Bucket index that will store the value for specific key.
 */
export function hash(key, bucketsNumber) {
  let hashCode = 0;
  for (let characterIndex = 0; characterIndex < key.length; characterIndex += 1) {
    hashCode += key.charCodeAt(characterIndex);
  }

  // Reduce hash number so it would fit buckets table size.
  return hashCode % bucketsNumber;
}
