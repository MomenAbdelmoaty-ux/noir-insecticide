# decision-031: Pickup, swap, and the hover box

**Status:** Accepted
**Date:** October 30, 2026

## Context

The player needs to read, compare, and swap weapons without clutter.

## Decision

E picks up a weapon within reach. An empty slot fills first; with both slots full, the pickup swaps with the held weapon, which drops to the ground. If the player already holds the same archetype, the pickup replaces it. The closest interactable wins when several are in reach. The hover box shows only on mouse hover, with comparison numbers against the held weapon for weapons in the world.

## Consequences

Reading a weapon mid-fight means moving the mouse off the aim, a deliberate cost that makes inspecting loot a quiet-moment action. Weapons in the world hover above the ground and feel only gravity.

## Alternatives considered

- Refuse a swap that would create a duplicate archetype, with a refusal sound and the red text "cannot hold two of the same archetype": recorded, may be revisited.
- "Mouse hover wins" for the interact key: considering later.
- A box for the closest pickup in range: rejected as visual clutter, possibly revisited after playtests.
