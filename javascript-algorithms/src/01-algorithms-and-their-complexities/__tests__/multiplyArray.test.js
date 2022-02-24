import { multiplyArray } from '../multiplyArray';

describe('multiplyArray', () => {
  it('should multiply array values', () => {
    expect(multiplyArray([0, 1, 2, 3], 0)).toEqual([0, 0, 0, 0]);
    expect(multiplyArray([0, 1, 2, 3], 1)).toEqual([0, 1, 2, 3]);
    expect(multiplyArray([0, 1, 2, 3], 2)).toEqual([0, 2, 4, 6]);
  });
});
