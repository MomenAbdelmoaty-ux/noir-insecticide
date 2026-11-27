# decision-044: Enemy strength resets each level, and difficulty comes mainly from variety

**Status:** Accepted
**Date:** November 5, 2026

## Context

Numbers should not do the heavy lifting of difficulty. The game's first goal is that difficulty comes from skill.

## Decision

Every level starts from its own predetermined base enemy strength and does not continue from the previous level. Within a level, later spawns are stronger than earlier ones, and bugs already alive do not get stronger. Difficulty comes mainly from enemy types, abilities, attacks, elites, movement speed, the parkour and traps of each section, and higher base health. The quota and the wave size rise only modestly.

## Consequences

Each level can be balanced on its own, and numbers stay readable (progression-003). The balance test checks each level's base strength. New enemy types and level design carry the challenge, so they have to be good.

## Alternatives considered

- Carrying enemy strength from one level to the next: numbers would compound into a numbers festival.
- Raising the quota and the wave size sharply: it adds more of the same and does not demand more skill.
