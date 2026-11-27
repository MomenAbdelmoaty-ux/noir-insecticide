# decision-047: The game is two-dimensional, not 2.5D

**Status:** Accepted
**Date:** Before October 24, 2026

## Context

The game was first planned as 2.5D. Several workarounds were tried, and none of them fixed the core problems. Players could not easily control where they were going, could not see what they needed to see, and could not click on or aim at what they needed to. With the speed this game needs, fighting and parkour would have been miserable, and the game as a whole close to impossible to play well.

## Decision

The game is two-dimensional. The player moves, fights, and aims on a single flat plane.

## Consequences

Movement, aiming with the mouse, and reading the screen all happen on one plane, so the player always knows where things are. The black and white dimension system works as a rule about what the player can touch, not as depth in the world. Levels are built from flat tiles.

## Alternatives considered

- 2.5D: it was the first plan. Workarounds for the control, visibility, and aiming problems were tried, and none solved them.
