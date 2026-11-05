# decision-018: Dotted outlines, in the inverse color, alternating for Gray

**Status:** Accepted
**Date:** October 24, 2026

## Context

Intangible things must stay visible, and stacked things of the same color must stay readable.

## Decision

Every world object of a dimension always draws a dotted outline in the inverse color: white dots on Black things, black dots on White things, and alternating black and white dots on Gray things. The outline follows the outer edge of a connected structure of one dimension, not each tile. World tiles are autotiled: each tile picks its variant from its four neighbors, and only neighbors of the same dimension count. Black, White, and Gray never connect to each other, so dots appear wherever two different dimensions touch. Player-owned things have no dotted outline.

## Consequences

The outline variants are pre-drawn once into texture atlases so they batch well. The dots are laid out so they line up across tile borders, and the alternating pattern for Gray continues smoothly. A Gray thing's outline reads as a mix of both. Autotiling applies only to tiles of the physical world. Enemies and traps get their outlines baked into their art (decision-036).

## Alternatives considered

- Small markers on hidden things: replaced by outlines (easier for the player to see WHAT is there rather than just SOMETHING is there).
- Dashed lines: replaced by dots (more visually appealing and works better on complex shapes).
- An outline on every tile: inside a multi-tile structure this puts dots on every tile edge, which looks like a grid of boxes and is no longer an outline.
