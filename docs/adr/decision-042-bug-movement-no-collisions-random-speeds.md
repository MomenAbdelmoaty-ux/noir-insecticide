# decision-042: Bugs do not collide with each other, and their speeds vary

**Status:** Accepted
**Date:** November 5, 2026

## Context

Many bugs following the same flow field tend to bunch up into one stream.

## Decision

Bugs do not collide with each other. The speed of each bug is randomized within a range set in data for its type, and may change over time, so a crowd does not move in step.

## Consequences

Bugs can overlap and pass one another. There are no collision checks between pairs of bugs, which keeps a large horde cheap, and bugs one tile in size go through one-tile gaps without jamming. Varied speeds spread bugs along the path, but not across it, so small sideways offsets and spacing at spawn are also allowed. Narrow passages still compress a crowd.

## Alternatives considered

- Collisions between bugs: expensive with a large horde, and bugs could jam in narrow gaps.
- The same speed for every bug: the crowd would move as one clump.
