import { multiplyArrayInPlace } from '../multiplyArrayInPlace';

describe('multiplyArray', () => {
  it('should multiply array values in-place', () => {
    expect(multiplyArrayInPlace([0, 1, 2, 3], 0)).toEqual([0, 0, 0, 0]);
    expect(multiplyArrayInPlace([0, 1, 2, 3], 1)).toEqual([0, 1, 2, 3]);
    expect(multiplyArrayInPlace([0, 1, 2, 3], 2)).toEqual([0, 2, 4, 6]);
  });
});
