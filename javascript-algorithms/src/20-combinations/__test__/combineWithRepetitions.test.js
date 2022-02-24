import combineWithRepetitions from '../combineWithRepetitions';
import factorial from '../../10-factorial/factorial';

describe('combineWithRepetitions', () => {
  it('should combine string with repetitions', () => {
    expect(combineWithRepetitions(['A'], 1)).toEqual([
      ['A'],
    ]);

    expect(combineWithRepetitions(['A', 'B'], 1)).toEqual([
      ['A'],
      ['B'],
    ]);

    expect(combineWithRepetitions(['A', 'B'], 2)).toEqual([
      ['A', 'A'],
      ['A', 'B'],
      ['B', 'B'],
    ]);

    expect(combineWithRepetitions(['A', 'B'], 3)).toEqual([
      ['A', 'A', 'A'],
      ['A', 'A', 'B'],
      ['A', 'B', 'B'],
      ['B', 'B', 'B'],
    ]);

    expect(combineWithRepetitions(['A', 'B', 'C'], 2)).toEqual([
      ['A', 'A'],
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'B'],
      ['B', 'C'],
      ['C', 'C'],
    ]);

    expect(combineWithRepetitions(['A', 'B', 'C'], 3)).toEqual([
      ['A', 'A', 'A'],
      ['A', 'A', 'B'],
      ['A', 'A', 'C'],
      ['A', 'B', 'B'],
      ['A', 'B', 'C'],
      ['A', 'C', 'C'],
      ['B', 'B', 'B'],
      ['B', 'B', 'C'],
      ['B', 'C', 'C'],
      ['C', 'C', 'C'],
    ]);

    const combinationOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const combinationSlotsNumber = 4;
    const combinations = combineWithRepetitions(combinationOptions, combinationSlotsNumber);
    const n = combinationOptions.length;
    const r = combinationSlotsNumber;
    const expectedNumberOfCombinations = factorial((r + n) - 1) / (factorial(r) * factorial(n - 1));

    expect(combinations.length).toBe(expectedNumberOfCombinations);
  });

  it('should make sure that code example works correctly', () => {
    const iceCreamFlavours = ['banana', 'mint', 'pistachio', 'vanilla'];
    const numberOfScoops = 3;
    const scoopCombinations = combineWithRepetitions(iceCreamFlavours, numberOfScoops);

    expect(scoopCombinations).toEqual([
      ['banana', 'banana', 'banana'],
      ['banana', 'banana', 'mint'],
      ['banana', 'banana', 'pistachio'],
      ['banana', 'banana', 'vanilla'],
      ['banana', 'mint', 'mint'],
      ['banana', 'mint', 'pistachio'],
      ['banana', 'mint', 'vanilla'],
      ['banana', 'pistachio', 'pistachio'],
      ['banana', 'pistachio', 'vanilla'],
      ['banana', 'vanilla', 'vanilla'],
      ['mint', 'mint', 'mint'],
      ['mint', 'mint', 'pistachio'],
      ['mint', 'mint', 'vanilla'],
      ['mint', 'pistachio', 'pistachio'],
      ['mint', 'pistachio', 'vanilla'],
      ['mint', 'vanilla', 'vanilla'],
      ['pistachio', 'pistachio', 'pistachio'],
      ['pistachio', 'pistachio', 'vanilla'],
      ['pistachio', 'vanilla', 'vanilla'],
      ['vanilla', 'vanilla', 'vanilla'],
    ]);
  });
});
