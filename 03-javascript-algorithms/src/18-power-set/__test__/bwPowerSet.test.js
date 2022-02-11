import bwPowerSet from '../bwPowerSet';

describe('bwPowerSet', () => {
  it('should calculate power set of given set using bitwise approach', () => {
    expect(bwPowerSet([1])).toEqual([
      [],
      [1],
    ]);

    expect(bwPowerSet([1, 2, 3])).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });

  it('should make sure that code example works', () => {
    const ingredients = ['banana', 'orange', 'apple'];
    const saladMixes = bwPowerSet(ingredients);

    expect(saladMixes).toEqual([
      [],
      ['banana'],
      ['orange'],
      ['banana', 'orange'],
      ['apple'],
      ['banana', 'apple'],
      ['orange', 'apple'],
      ['banana', 'orange', 'apple'],
    ]);
  });
});
