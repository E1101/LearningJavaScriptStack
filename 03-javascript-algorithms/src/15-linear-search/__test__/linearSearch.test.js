import linearSearch from '../linearSearch';

describe('linearSearch', () => {
  it('should search all numbers in array', () => {
    const array = [1, 2, 4, 6, 2];

    expect(linearSearch(array, 10)).toEqual([]);
    expect(linearSearch(array, 1)).toEqual([0]);
    expect(linearSearch(array, 2)).toEqual([1, 4]);
  });

  it('should search all strings in array', () => {
    const array = ['a', 'b', 'a'];

    expect(linearSearch(array, 'c')).toEqual([]);
    expect(linearSearch(array, 'b')).toEqual([1]);
    expect(linearSearch(array, 'a')).toEqual([0, 2]);
  });

  it('should search through objects as well', () => {
    const comparatorCallback = (a, b) => {
      if (a.key === b.key) {
        return 0;
      }

      return a.key <= b.key ? -1 : 1;
    };

    const array = [
      { key: 5 },
      { key: 6 },
      { key: 7 },
      { key: 6 },
    ];

    expect(linearSearch(array, { key: 10 }, comparatorCallback)).toEqual([]);
    expect(linearSearch(array, { key: 5 }, comparatorCallback)).toEqual([0]);
    expect(linearSearch(array, { key: 6 }, comparatorCallback)).toEqual([1, 3]);
  });

  it('should make sure that code example works correctly', () => {
    // Create people objects.
    const tim = { name: 'Tim', phone: '+111111111112' };
    const jane = { name: 'Jane', phone: '+111111111111' };
    const bill = { name: 'Bill', phone: '+111111111113' };
    const janeNamesake = { name: 'Jane', phone: '+111111111114' };
    const peter = { name: 'Peter', phone: '+111111111115' };

    // Add people to the phone book.
    const phoneBook = [tim, jane, bill, janeNamesake];

    // Create custom comparator function that can compare two person
    // and decide whether they are equal or not.
    const personComparator = (person1, person2) => {
      return person1.name === person2.name ? 0 : -1;
    };

    // Let's try to find Jane in the phone book using linear search.
    // Notice that we have two persons with the same name Jane in the phone book and
    // our comparision function takes only the person name into account so we are
    // expecting to have two indices in the output.

    // eslint-disable-next-line no-unused-expressions
    expect(linearSearch(phoneBook, jane, personComparator)).toEqual([1, 3]);

    // Now let's try to find Peter. He is not in the phone book so we expect an empty array.

    // eslint-disable-next-line no-unused-expressions
    expect(linearSearch(phoneBook, peter, personComparator)).toEqual([]);
  });
});
