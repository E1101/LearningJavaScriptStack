import { iterativePower } from '../iterativePower';

describe('iterativePower', () => {
  it('should raise the number to specific power', () => {
    expect(iterativePower(1, 0)).toBe(1);
    expect(iterativePower(1, 1)).toBe(1);
    expect(iterativePower(1, 2)).toBe(1);
    expect(iterativePower(2, 0)).toBe(1);
    expect(iterativePower(2, 1)).toBe(2);
    expect(iterativePower(2, 2)).toBe(4);
    expect(iterativePower(2, 3)).toBe(8);
    expect(iterativePower(2, 4)).toBe(16);
    expect(iterativePower(10, 3)).toBe(1000);
  });
});
