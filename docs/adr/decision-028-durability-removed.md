# decision-028: Durability is removed

**Status:** Accepted
**Date:** October 30, 2026

## Context

Durability was meant to stop ability spam and to push players to pick up new weapons instead of keeping one forever.

## Decision

Everything is unbreakable. The only limit on an ability is its cooldown.

## Consequences

The dormant state, repair, durability on the display, and the durability fields in the weapon schema and sample data are removed. If an ability is too strong, weaken it or lengthen its cooldown. Picking up new weapons is encouraged by tiers and rolled stats (decision-029).

## Alternatives considered

- Keep durability.
- Durability on abilities only.
