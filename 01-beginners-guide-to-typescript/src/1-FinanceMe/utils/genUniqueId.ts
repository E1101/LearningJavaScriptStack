function genUniqueId(): string {
  const dateStr = Date
    .now()
    .toString(36); // convert num to base 36 and stringify

  const randomStr = Math
    .random()
    .toString(36)
    .substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`;
}

export default genUniqueId;

// (!) Base-36 (also called hexatridecimal) is a number system containing 36 distinct symbols.
// Compared to the decimal (base-10) number system that we are all familiar with, base-36
// contains 0-9 as well as A-Z, allowing us to express large numbers more compactly using
// familiar symbols. For example, the number 1234 in base-10 can be represented as YA in base-36.
