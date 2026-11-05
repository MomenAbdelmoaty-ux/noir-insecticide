# decision-027: The player may shift during the reposition moment, and the cooldown counts in real time

**Status:** Accepted
**Date:** October 30, 2026

## Context

Shifting during the freeze makes repositioning easier and, in some situations, possible. The simulation time scale is 0 during the choice stage.

## Decision

Shifting is allowed during the freeze and choice stages. The refusal rule is not applied during the reposition moment. A chosen spot is judged against the background at the moment of the click. When the teleport ends the reposition moment, the refusal rule applies again. The shift cooldown counts in real (unscaled) time, so only one shift per 0.4 seconds is possible even while frozen. The simulation keeps a second, unscaled clock that advances every fixed step, so the cooldown stays deterministic and testable.

## Consequences

A shift during the freeze may leave the player inside something solid, which is fine because the teleport moves them. Shift commands are accepted at time scale 0.

## Alternatives considered

- No shifting during the reposition moment.
- A cooldown that follows scaled time: it would freeze with the game and could not run down.
