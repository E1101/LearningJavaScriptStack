import binarySearch from '../binarySearch';

describe('binarySearch', () => {
  it('should search number in sorted array', () => {
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);
    expect(binarySearch([1, 5, 10, 12], 1)).toBe(0);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 1)).toBe(0);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
  });

  it('should search object in sorted array', () => {
    const sortedArrayOfObjects = [
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' },
      { key: 3, value: 'value3' },
    ];

    const comparator = (a, b) => {
      if (a.key === b.key) return 0;
      return a.key < b.key ? -1 : 1;
    };

    expect(binarySearch([], { key: 1 }, comparator)).toBe(-1);
    expect(binarySearch(sortedArrayOfObjects, { key: 4 }, comparator)).toBe(-1);
    expect(binarySearch(sortedArrayOfObjects, { key: 1 }, comparator)).toBe(0);
    expect(binarySearch(sortedArrayOfObjects, { key: 2 }, comparator)).toBe(1);
    expect(binarySearch(sortedArrayOfObjects, { key: 3 }, comparator)).toBe(2);
  });

  it('should make example script work', () => {
    const sortedArrayOfStars = [
      { name: 'Alpha Centauri A', position: {} },
      { name: 'Alpha Centauri B', position: {} },
      { name: 'Betelgeuse', position: {} },
      { name: 'Polaris', position: {} },
      { name: 'Rigel', position: {} },
      { name: 'Sirius', position: {} },
      // And 2.5 millions more :)
    ];

    // Our custom object comparator.
    // We will use string comparison here. For example 'Polaris' is smaller than 'Rigel'.
    const comparator = (star1, star2) => {
      if (star1.name === star2.name) return 0;
      return star1.name < star2.name ? -1 : 1;
    };

    expect(binarySearch(sortedArrayOfStars, { name: 'Not Existing Name' }, comparator)).toBe(-1);
    expect(binarySearch(sortedArrayOfStars, { name: 'Alpha Centauri A' }, comparator)).toBe(0);
    expect(binarySearch(sortedArrayOfStars, { name: 'Alpha Centauri B' }, comparator)).toBe(1);
    expect(binarySearch(sortedArrayOfStars, { name: 'Polaris' }, comparator)).toBe(3);
  });
});
