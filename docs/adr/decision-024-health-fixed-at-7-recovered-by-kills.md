# decision-024: Health is fixed at 7 and recovered by kills

**Status:** Accepted
**Date:** October 30, 2026

## Context

Lost health needed a way back, and maximum health needed a rule. The way to regain health should scale with the level difficulty in some way, and also complement the horde killing element. 

## Decision

Maximum health is fixed at 7 and never grows. The player recovers 1 health point for every X kills, where X is the level's quota divided by 10, rounded up. Health never goes above 7. Kills made by traps count. The kill count keeps running at full health: every X kills trigger a recovery, and a recovery that happens at full health is lost.

## Consequences

Health changes go through the single health function. The divisor is data. Kills made at full health still count toward the next recovery, so progress builds while the player is unhurt, but it is not stored beyond one recovery. A full quota yields about 10 recovered points against a maximum of 7, which is worth checking in playtests. Trap kills are rewarded, which makes turning traps against enemies more attractive.

## Alternatives considered

- No recovery: simple, but may feel harsh late in a stage.
- Recovery on entering a new level region: fits the migration and cannot be farmed, but occasional, consistent, gradual increases is more attractive and less punishing than a single batch heal based on location or level completion.
- Health pickups dropped by enemies: randomization can be brutal or too rewarding, and it would be too dangerous to go manually pick up the healing. Making healing progress-based feels more fair and predictable.
- Gaining maximum health: rejected, the maximum is fixed.
