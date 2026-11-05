# decision-033: No fourth dimension that follows the player

**Status:** Accepted
**Date:** November 4, 2026

## Context

Gray is both colors at the same time, as shown by the overlap rule (decision-016): two overlapping platforms of different colors read as Gray, so a platform of one color can never hide another of the other color. That is why Black and White bugs both crawl on Gray, Gray bugs interact with both colors of platform, and Gray traps hurt both colors of bug. The player works differently: they are effectively one color that changes on shift. Gray was first imagined as working like the player. The question was whether to add a fourth thing that works like the player, interacting only with what the player can interact with and changing on every shift.

## Decision

A fourth dimension is not added. Gray stays a merger of both colors, and player-owned things stay outside the dimensions (decision-032).

## Consequences

From the player's point of view, a fourth thing would be the same as Gray in every way, so it would add something to remember and more clutter for no benefit. The rule table keeps three rows. This could be revisited later for a unique enemy, boss, or elite that matches the player's own interactivity. The small gap it leaves might also be filled by a special elite Gray enemy that flies and ignores walls and physics.

## Alternatives considered

- **A fourth color that follows the player.** Platforms and walls of this color would block enemies only some of the time, which causes softlocks and makes pathfinding much harder. Enemies of this color could be trapped or stuck inside blocks when the player shifts. Its traps would differ only slightly from Gray traps (the player could choose which color of enemy sets them off), and weapons already give that choice. Using color-specific traps on its enemies is already possible with Gray enemies. It is a pathfinding, collision, and clutter problem for little gain, especially in a horde-killer game.
- **Gray working like the player.** This was the first idea, with Gray and the player on the same layer in different colors. It was rejected because Gray as both colors at once matches the overlap rule and keeps the game readable and fair.
