# decision-041: Weighted platforms and breakable blocks are special tiles

**Status:** Accepted
**Date:** November 5, 2026

## Context

Levels need tiles that change during play. Moving platforms are fully scripted (trap-004), but these react to the player or to damage.

## Decision

Breakable blocks block the way and break only from damage: the player's weapon attacks, projectiles, and abilities, and possibly traps as well (to be decided). Breaking one is a damage check that opens a path to something necessary or beneficial, such as the way forward, a shortcut, a hidden reusable trap, or a chest with loot. The damage a block needs is set in data. A broken block stays broken, so a breakable block is never a platform the player needs to stand on, because breaking it could softlock the player. A weighted platform drops quickly while the player stands on it and stops when it hits another solid tile (tiles only, not traps or bugs). When the player is not on it, it rises at the same speed to its original position and if something is in the way on its way up, it stops there and keeps rising once the way is clear. Its direction depends only on whether the player is on it. Both are special tiles or platforms, so every normal rule applies. Only the player activates a weighted platform. Crawlers use it as a surface only while it is at rest, and a crawler on it enters the correcting state as soon as it starts moving.

## Consequences

World changes go through world.mutate, so the flow fields rebuild. A crawler whose surface disappears enters the correcting state immediately (decision-034). A shift that makes a weighted platform intangible removes the player from it, and the crush rule applies. A bug that is crushed by a weighted platform takes crush damage before it enters the correcting state (decision-048). Scripted platforms stay fully scripted. Breakable blocks only open paths and never remove a platform the player needs, so they cannot softlock the player. Their uses do not overlap with the other triggers: weighted platforms handle timing for the player, and levers, tripwires, and buttons handle everything else.

## Alternatives considered

- Making the weighted platform a scripted platform: it must follow whether the player is on it, which a script cannot express.
- Counting a moving platform as a surface in the flow field: its surface cells would change every frame, and the field could not rebuild that often.
- Breakable blocks triggered by levers, tripwires, or the player stepping on them: those triggers already exist for other uses, and a block that breaks one time under the player could softlock them if it were a platform they needed.
