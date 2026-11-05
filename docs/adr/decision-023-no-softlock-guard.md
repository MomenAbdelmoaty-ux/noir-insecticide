# decision-023: No softlock guard for the reposition moment

**Status:** Accepted
**Date:** October 27, 2026

## Context

It was proposed that if no valid reposition spot exists within range, the game would move the player to the nearest free spot.

## Decision

There is no guard. If a guard were ever needed, something went terribly wrong elsewhere, and most likely the level was poorly made or generated, so the fix belongs in the level.

## Consequences

Levels must leave valid space near every place the player can be hit or crushed. The level checker or a future generator is the place to enforce that, so the game never hides a level mistake. The shallow-overlap nudge of decision-026 is mercy for slight clips and is not a guard for the reposition moment.

## Alternatives considered

A nearest-free-spot guard: rejected because it would hide level mistakes.
