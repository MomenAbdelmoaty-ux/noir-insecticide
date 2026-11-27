# decision-040: Menus freeze the game by stopping the simulation

**Status:** Accepted
**Date:** November 5, 2026

## Context

The player should be able to take their time reading their weapons and stats. The simulation has a time scale, used for the reposition moment, and the shift cooldown runs on an unscaled clock so it keeps counting while time is scaled to zero.

## Decision

Pausing (Escape), opening the inventory (R), opening a chest, and, after version 0.2.0, opening the forge screen freeze the game by stopping the simulation from stepping at all. A menu never freezes a multiplayer game.

## Consequences

Neither the time scale nor the unscaled clock advances, so the shift cooldown does not recharge while a menu is open. The time scale stays only for the reposition moment, where the player still acts by choosing a spot and shifting. The inventory, chest, and forge screens count as menus, so they must be operable with the keyboard.

## Alternatives considered

- Reusing the time scale: the shift cooldown runs on the unscaled clock, so it would recharge during a pause and a player could pause to wait it out. Fixing that needs a second kind of freeze.
- No freeze: the player would have to read weapons while being attacked.
