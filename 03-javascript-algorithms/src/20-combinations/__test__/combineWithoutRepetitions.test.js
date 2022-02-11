import combineWithoutRepetitions from '../combineWithoutRepetitions';
import factorial from '../../10-factorial/factorial';

describe('combineWithoutRepetitions', () => {
  it('should combine string without repetitions', () => {
    expect(combineWithoutRepetitions(['A', 'B'], 3)).toEqual([]);

    expect(combineWithoutRepetitions(['A', 'B'], 1)).toEqual([
      ['A'],
      ['B'],
    ]);

    expect(combineWithoutRepetitions(['A'], 1)).toEqual([
      ['A'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B'], 2)).toEqual([
      ['A', 'B'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B', 'C'], 2)).toEqual([
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'C'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B', 'C'], 3)).toEqual([
      ['A', 'B', 'C'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B', 'C', 'D'], 3)).toEqual([
      ['A', 'B', 'C'],
      ['A', 'B', 'D'],
      ['A', 'C', 'D'],
      ['B', 'C', 'D'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B', 'C', 'D', 'E'], 3)).toEqual([
      ['A', 'B', 'C'],
      ['A', 'B', 'D'],
      ['A', 'B', 'E'],
      ['A', 'C', 'D'],
      ['A', 'C', 'E'],
      ['A', 'D', 'E'],
      ['B', 'C', 'D'],
      ['B', 'C', 'E'],
      ['B', 'D', 'E'],
      ['C', 'D', 'E'],
    ]);

    const combinationOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const combinationSlotsNumber = 4;
    const combinations = combineWithoutRepetitions(combinationOptions, combinationSlotsNumber);
    const n = combinationOptions.length;
    const r = combinationSlotsNumber;
    const expectedNumberOfCombinations = factorial(n) / (factorial(r) * factorial(n - r));

    expect(combinations.length).toBe(expectedNumberOfCombinations);
  });

  it('should make sure that example code works as expected', () => {
    const teamSize = 3;
    const candidates = ['Bill', 'John', 'Kate', 'Jane', 'Mike'];
    const possibleTeams = combineWithoutRepetitions(candidates, teamSize);

    expect(possibleTeams).toEqual([
      ['Bill', 'John', 'Kate'],
      ['Bill', 'John', 'Jane'],
      ['Bill', 'John', 'Mike'],
      ['Bill', 'Kate', 'Jane'],
      ['Bill', 'Kate', 'Mike'],
      ['Bill', 'Jane', 'Mike'],
      ['John', 'Kate', 'Jane'],
      ['John', 'Kate', 'Mike'],
      ['John', 'Jane', 'Mike'],
      ['Kate', 'Jane', 'Mike'],
    ]);
  });
});
