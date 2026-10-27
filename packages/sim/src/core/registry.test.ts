import { describe, it, expect } from 'vitest';
import { Registry } from './registry';

describe('Registry', () => {
  it('returns what was registered', () => {
    const r = new Registry<number>('thing');
    r.register('a', 1);
    expect(r.get('a')).toBe(1);
  });
  it('rejects duplicates and unknown names with clear messages', () => {
    const r = new Registry<number>('thing');
    r.register('a', 1);
    expect(() => r.register('a', 2)).toThrow("thing 'a' is already registered");
    expect(() => r.get('b')).toThrow("Unknown thing 'b'");
  });
});
