import quickSort from '../quickSort';

export const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
export const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export const negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
export const negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

describe('quickSort', () => {
  it('should sort array', () => {
    expect(quickSort([])).toEqual([]);
    expect(quickSort([1])).toEqual([1]);
    expect(quickSort([1, 2])).toEqual([1, 2]);
    expect(quickSort([2, 1])).toEqual([1, 2]);
    expect(quickSort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
    expect(quickSort(sortedArr)).toEqual(sortedArr);
    expect(quickSort(reverseArr)).toEqual(sortedArr);
    expect(quickSort(notSortedArr)).toEqual(sortedArr);
    expect(quickSort(equalArr)).toEqual(equalArr);
  });

  it('should sort negative numbers', () => {
    expect(quickSort(negativeArr)).toEqual(negativeArrSorted);
  });

  it('should sort array with custom comparator', () => {
    const comparator = (a, b) => {
      if (a.length === b.length) {
        return 0;
      }
      return a.length < b.length ? -1 : 1;
    };

    expect(quickSort([''], comparator)).toEqual(['']);
    expect(quickSort(['a'], comparator)).toEqual(['a']);
    expect(quickSort(['aa', 'a'], comparator)).toEqual(['a', 'aa']);
    expect(quickSort(['aa', 'q', 'bbbb', 'ccc'], comparator)).toEqual(['q', 'aa', 'ccc', 'bbbb']);
    expect(quickSort(['aa', 'aa'], comparator)).toEqual(['aa', 'aa']);
  });

  it('should make sure that code example works correctly', () => {
    // Init users list.
    const notSortedUserList = [
      { age: 18, name: 'Bill' },
      { age: 20, name: 'Kate' },
      { age: 50, name: 'Jane' },
      { age: 37, name: 'Mike' },
      { age: 24, name: 'Cary' },
      { age: 20, name: 'Tom' },
      { age: 42, name: 'Ben' },
      { age: 60, name: 'Julia' },
    ];

    // Create comparator function that will compare two user objects.
    const userComparator = (user1, user2) => {
      if (user1.age === user2.age) {
        return 0;
      }

      return user1.age > user2.age ? 1 : -1;
    };

    // Sort user list.
    const sortedUserList = quickSort(notSortedUserList, userComparator);

    expect(sortedUserList).toEqual([
      { age: 18, name: 'Bill' },
      { age: 20, name: 'Kate' },
      { age: 20, name: 'Tom' },
      { age: 24, name: 'Cary' },
      { age: 37, name: 'Mike' },
      { age: 42, name: 'Ben' },
      { age: 50, name: 'Jane' },
      { age: 60, name: 'Julia' },
    ]);
  });
});
