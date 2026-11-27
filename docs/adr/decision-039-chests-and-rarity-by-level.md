# decision-039: Loot comes from chests, and rarity depends on the level

**Status:** Accepted
**Date:** November 5, 2026

## Context

The loot core needs a source of weapons, and later levels should reward better weapons without any progression between runs.

## Decision

Weapons come from chests. There are normal chests and special chests, and the difference is rarity and loot level: special chests drop better loot. Both kinds also come in a locked variant. An unlocked chest opens with the interact key, and a locked chest must first be unlocked by a lever or trigger, and then opens with the interact key. Opening a chest shows the chest screen (decision-049). Special chests sit in special chest areas, which are good loot areas. Levels are grouped into bands, one band per droppable rarity, and a level drops only the tiers of its band. For example, with eight levels, two per band: levels 1 and 2 drop common (tiers I to III), levels 3 and 4 uncommon, levels 5 and 6 rare, and levels 7 and 8 epic. Special chests drop one rarity higher, so legendary comes from special chests in the top band, and from merging. Normal chests never drop legendary. Which of the three tiers within a rarity drops is random, with higher tiers rarer, and the weights are data.

## Consequences

Legendary weapons stay special, and reaching them takes skill, secrets, or merging. In version 0.2.0 the level's rarity is set in level data, so the loot core can be tested with any rarity. The number of levels is not decided, and the bands scale with it. Special chests give a reason to explore the areas behind Gray walls. Loot does not get better within a level, but special chest areas are more likely to spawn near the middle and the end of the level.

## Alternatives considered

- Letting any chest drop any rarity: early levels could hand out strong weapons, and the sense of progress through the levels would be lost.
- Letting normal chests drop legendary: it would stop legendary from feeling special.
