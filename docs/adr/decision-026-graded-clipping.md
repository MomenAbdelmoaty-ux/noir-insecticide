# decision-026: Clipping is graded: shallow is nudged, deep is damage

**Status:** Accepted
**Date:** October 30, 2026

## Context

Decision-021 weighed popping the player to the nearest free spot against damage and a reposition for being stuck, and each has a flaw alone. A slight clip deserves mercy.

## Decision

Do both, depending on depth. A shallow overlap (a couple of pixels; the depth is a placeholder in the balance data) moves the player to the nearest empty space with no damage. A deep overlap, while not immune, deals 1 damage and starts the reposition moment.

## Consequences

The clipping check needs a penetration depth, and the threshold is tuned in play. Shifts by the button are still refused, so this rule covers platforms, traps, and changes to the Gray background. Decision-023 stands.

## Alternatives considered

- Damage for every overlap: too harsh for a slight clip.
- Always nudge: cheesable and hides deep crushes.
