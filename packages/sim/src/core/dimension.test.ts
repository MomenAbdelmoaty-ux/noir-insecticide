import { describe, it, expect } from 'vitest';
import { isReal, type Dimension, type Background } from './dimension';

describe('isReal (the dimension rule)', () => {
  const table: [Dimension, Background, boolean][] = [
    ['black', 'black', false], ['white', 'black', true],  ['gray', 'black', true],
    ['black', 'white', true],  ['white', 'white', false], ['gray', 'white', true],
    ['black', 'gray',  true],  ['white', 'gray',  true],  ['gray', 'gray',  false],
  ];
  it.each(table)('%s thing on %s background gives %s', (dimension, background, expected) => {
    expect(isReal(dimension, background)).toBe(expected);
  });
});
