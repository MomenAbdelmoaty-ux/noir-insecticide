import { describe, it, expect } from 'vitest';
import { parseWeapon } from './weapon';
import scatter from '../content/weapons/scatter-basic.json';

describe('weapon definition files', () => {
  it('accepts the shipped scatter weapon', () => {
    expect(parseWeapon(scatter, 'scatter-basic.json').archetype).toBe('scatter');
  });
  it('names the file and the bad field when data is wrong', () => {
    const broken = { ...scatter, stats: { ...scatter.stats, damage: -5 } };
    expect(() => parseWeapon(broken, 'broken.json')).toThrow(/broken\.json.*damage/);
  });
});