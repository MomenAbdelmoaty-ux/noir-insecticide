# decision-020: Limited health, with a reposition moment on every hit

**Status:** Accepted (updated October 30, 2026)
**Date:** October 27, 2026

## Context

With no health, one mistake is an instant death, which is neither fair nor fun, and the game becomes all or nothing.

## Decision

The player has 7 health points (fixed; it was first planned as 5 to 10), and every instance of damage takes exactly 1, whatever the source. When the player takes damage and has health left, the game freezes: a bright flash, one sharp damage sound, and a slowdown to a full stop with a reverb effect. A dotted line then runs from the player to a solid circle at the mouse, white when valid and red when invalid, with a distinct sound for an invalid click, and the player teleports to a valid spot. Time and sound then speed back up, and the player blinks for about 1 second of immunity. The teleport is short and may pass through walls; where that would skip progress, walls are made too thick to cross.

## Consequences

The simulation needs a time scale. The choice stage runs at time scale 0. Health changes go through one function. The numbers stay readable because damage is always 1. The freeze needs audio work (slowdown and reverb). In a future multiplayer mode, the consensus is that a freeze pauses the other player. Health recovery is decision-024.

## Alternatives considered

- No health: instant death.
- A line-of-sight requirement for the teleport: removed, because it complicated levels for little gain.
