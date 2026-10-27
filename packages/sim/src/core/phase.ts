export const DIMENSIONS = ['black', 'white', 'gray'] as const;
export type Dimension = (typeof DIMENSIONS)[number];

export const BACKGROUNDS = ['black', 'white', 'gray'] as const;
export type Background = (typeof BACKGROUNDS)[number];

// For each background, the dimensions the player side can touch.
// Black and white backgrounds hide their own color. The rare gray background
// is a merger of both colors: black and white are touchable, gray things vanish.
export const TOUCHABLE: Record<Background, readonly Dimension[]> = {
  black: ['white', 'gray'],
  white: ['black', 'gray'],
  gray: ['black', 'white'],
};