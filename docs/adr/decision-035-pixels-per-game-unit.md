# decision-035: One game unit is 32 pixels, and art is drawn at 64

**Status:** Accepted
**Date:** October 30, 2026

## Context

The physics engine measures in game units (physics meters in the balance data), and the screen measures in pixels. One number, the pixels per game unit, links them. The art, the tile size in Tiled, and the conversion constant in code all depend on it, and changing it after art is drawn means shrinking the art, which blurs it and changes the size of the outline dots, or redrawing it.

## Decision

One game unit is 32 pixels, so a tile is one unit, 32 by 32 pixels. Art is drawn at double size (64 pixels per unit) and shown at half size, so it stays sharp on high-resolution screens. The conversion is a constant in code. The number is fixed by task A9, before any art is drawn.

## Consequences

The tile size in Tiled is set to 32. The game window of 960 by 540 pixels shows 30 tiles across and about 17 tiles up. The outline dots are drawn into the art at the 64-pixel scale. Changing the number later means redoing the art.

## Alternatives considered

- 16 pixels per unit: less room for detail in each shard.
- 64 pixels per unit: the window would show only about 15 tiles across, so the player sees much less of the level.
- Drawing art at its on-screen size: blurrier on high-resolution screens.
