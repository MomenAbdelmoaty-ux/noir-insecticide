# decision-029: Weapons have 15 tiers, five rarities, and rolled stat ranges

**Status:** Accepted
**Date:** October 30, 2026

## Context

The loot needed identity without a huge item pool, a reason to pick up new weapons, and room for later weapon power.

## Decision

There are 15 tiers, three per rarity: common, uncommon, rare, epic, and legendary. The roman numeral follows the name, and the rarity is the text box background color. Every stat is rolled inside a per-weapon range, so two copies can differ, and ranges differ between weapons even of one archetype. Each tier multiplies the minimum and maximum by a base factor of 1.3, with per-stat factors for stats such as spread angle and cooldown. Enemies scale to keep up. Uncommon, rare, epic, and legendary each unlock one special addition (after version 0.2.0). Not all ability variations are available from the start; rarity unlocks them.

## Consequences

A factor of 1.3 over 14 steps grows a stat about 39 times, so the balance test must cover all tiers. Loot ranges are data. The loot table across rooms is decided later. Flavor text per rarity comes late.

## Alternatives considered

- A factor of 1.5 for every stat: about 292 times over 14 steps, a numbers festival, and nonsense for stats like spread angle.
- Fixed stats with no rolls.
- All ability variations available from the start, with only the stat ranges changing: considered, and rejected in favor of rarity unlocks.
