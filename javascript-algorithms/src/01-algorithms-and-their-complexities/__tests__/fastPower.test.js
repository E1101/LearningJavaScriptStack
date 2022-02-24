import { fastPower } from '../fastPower';

describe('fastPower', () => {
  it('should raise the number to specific power', () => {
    expect(fastPower(1, 0)).toBe(1);
    expect(fastPower(1, 1)).toBe(1);
    expect(fastPower(1, 2)).toBe(1);
    expect(fastPower(2, 0)).toBe(1);
    expect(fastPower(2, 1)).toBe(2);
    expect(fastPower(2, 2)).toBe(4);
    expect(fastPower(2, 3)).toBe(8);
    expect(fastPower(2, 4)).toBe(16);
    expect(fastPower(10, 3)).toBe(1000);
  });
});
