# decision-030: Merging combines two weapons of the same tier

**Status:** Accepted (planned after version 0.2.0)
**Date:** October 30, 2026

## Context

The first idea, one tier higher than the lowest of the two, did not fit its own example.

## Decision

At forge areas (not in the inventory), only two weapons of the same tier merge, into one weapon one tier higher than both. Which weapon survives is random. Stats are not rerolled: each keeps its position in its range, scaled to the new range. For example, a damage of 20 in a range of 10 to 20 becomes 26 in a range of 13 to 26. Each forge can be used once.

## Consequences

Crossing into a new rarity unlocks that rarity's special addition. A tier XV weapon cannot be merged. The two merged weapons are always different weapons, because the player cannot hold two of one archetype. Merging is one of two ways to get legendary weapons. The other is special chests in the top band (decision-039).

## Alternatives considered

- Merging mixed tiers.
- The player chooses which weapon survives.
- Rerolling stats.
