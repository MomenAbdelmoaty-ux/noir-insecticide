# decision-043: The horde cap is the quota plus a flat amount

**Status:** Accepted
**Date:** November 5, 2026

## Context

The cap on living bugs must balance two problems. If it is too high, the game lags. If it is too low, the horde visibly shrinks, and new bugs that spawn after others die have a lot of space to catch up, because the spawn point does not move. The cap also has to be above the quota, so a large horde still looks left over when the quota is reached.

## Decision

The cap on living bugs is the level's quota plus a flat amount set in data. The starting range is 50 to 100 above the quota, and testing decides the number.

## Consequences

A flat addition works for small and large quotas alike. If it turns out too slow, a backup idea exists: a much smaller cap, with the bug spawn point moved forward as the player passes sections. The game would track progress by section (not continuously) and move the spawn point to a chosen position in the last section or a few sections back. That would change the rule that the spawn stays at the start of the level.

## Alternatives considered

- Multiplying the quota by 1.5 or 2: not enough for small quotas, and far too many for large ones.
- The backup idea above: not chosen unless the quota plus a flat amount does not work.
