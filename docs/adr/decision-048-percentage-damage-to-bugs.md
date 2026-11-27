# decision-048: Traps and crushing deal a percentage of a bug's maximum health

**Status:** Accepted
**Date:** November 26, 2026

## Context

Traps and crushing hurt bugs as well as the player, and bugs differ in how much health they have. A fixed amount of trap damage would be too strong against weak bugs and too weak against tough ones. The player is different: every hit on the player costs exactly 1 health point (decision-020).

## Decision

Damage that traps and crushing deal to bugs is a percentage of the bug's maximum health, set in data for each trap and each crushing source. Damage to the player stays exactly 1. A bug that is crushed in any way takes this damage before it enters the correcting state (decision-034), and if the damage kills it, it dies. While a bug is correcting, it is immune to crush damage, because it passes through walls, but it still takes damage from other traps it passes through. The rule does not apply to elites and bosses.

## Consequences

Traps stay useful against tough bugs, and the numbers can be tuned in data from playtests. A crushed bug cannot be crushed again and again while it corrects. Crushing needs a damage check for bugs, in addition to the player's crush check (decision-022). How traps and crushing affect elites and bosses is not set by this decision.

## Alternatives considered

- A fixed damage amount for each trap: it is too strong against weak bugs and too weak against tough ones, and it needs retuning whenever bug health changes.
- A percentage for the player too: it would break the rule that every hit costs exactly 1 of 7 health points (decision-020).
