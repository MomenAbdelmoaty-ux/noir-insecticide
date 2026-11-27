# decision-046: Spawn slots with spawn chances and group limits

**Status:** Accepted
**Date:** November 5, 2026

## Context

Chests and traps should be random, but never in random places. In many games, chests and other things can only appear at specific, authored locations, and the randomness is whether they appear there.

## Decision

Each section defines slots: authored locations that list what may spawn there and the chance that it does. A slot can belong to a group that limits how many members exist at once, such as no limit for chests, and one at a time where only one should exist, like the lever that opens a gate, operates a platform, or opens a locked chest. Wherever a thing spawns, it is reachable, usable, and meaningful. A slot adds danger or reward and never removes the only path through a section, unless the thing is the section's intended gate.

## Consequences

Randomness decides whether something appears, never where, so every trap and chest is in a place where it works. The same section can look different on repeat visits, and returning players are rewarded for knowing it. Every section is checked with its slots on and off. Chest slots arrive in Milestone C, and trap and lever slots in Milestone D.

## Alternatives considered

- Placing things anywhere at random: they could be unreachable or pointless.
- Fixed placement: no variety between runs.
