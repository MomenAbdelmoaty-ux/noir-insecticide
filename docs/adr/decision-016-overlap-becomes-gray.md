# decision-016: Overlapping Black and White world geometry becomes Gray

**Status:** Accepted
**Date:** October 24, 2026

## Context

Black and White platforms and walls can overlap, and one has to be drawn on top of the other. When the background changes, the hidden one should disappear like everything else that matches the background.

## Decision

Where Black and White world geometry overlap, the overlapping area becomes Gray, because when two colors mix they make Gray. This applies to world geometry only (platforms, walls, solid physics objects). Whether it applies to bugs and some traps is to be decided.

## Consequences

In the first version, geometry is tile-based, so an overlap is a tile that exists on both the Black and White layers, and the loader turns it into a Gray tile, with a test. Level designers can overlap on purpose to create Gray cells. Gray surfaces affect pathfinding.

## Alternatives considered

- (A) Draw the Black piece on top when its background shows: this breaks the illusion that things blend into the background and disappear with it.
- (B) Change nothing and let the lower piece be cut off and smaller: this accepts that two colors cannot share a space.
- (C) Draw a mixture texture such as a checkerboard: this adds visual clutter, looks ugly, and misleads about hitboxes.
