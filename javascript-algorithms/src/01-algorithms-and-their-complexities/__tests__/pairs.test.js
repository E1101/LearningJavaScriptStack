import { pairs } from '../pairs';

describe('pairs', () => {
  it('should multiply array values', () => {
    expect(pairs(['A', 'B'])).toEqual(['AA', 'AB', 'BA', 'BB']);
    expect(pairs(['A', 'B', 'C'])).toEqual(['AA', 'AB', 'AC', 'BA', 'BB', 'BC', 'CA', 'CB', 'CC']);
  });
});
