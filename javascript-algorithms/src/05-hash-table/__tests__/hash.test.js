import { hash } from '../hash';

describe('hash', () => {
  it('should calculate hash correctly', () => {
    expect(hash('a', 100)).toBe(97);
    expect(hash('b', 100)).toBe(98);
    expect(hash('ab', 100)).toBe(95);
    expect(hash('ad', 100)).toBe(97);
  });
});
