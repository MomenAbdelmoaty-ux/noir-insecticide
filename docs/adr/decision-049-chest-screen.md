# decision-049: Opening a chest shows a chest screen with three weapons to choose from

**Status:** Accepted
**Date:** November 26, 2026

## Context

Weapons come from chests (decision-039). Reading a weapon in the world means hovering over it during play (decision-031), and its comparison numbers show only the held weapon.

## Decision

Opening a chest, after unlocking it if it is locked, shows the chest screen, an extension of the inventory screen. The chest offers three weapons, rolled by the chest's rarity and level rules (decision-039). The screen shows them next to the inventory, so each offered weapon can be read and compared with both held weapons. The player picks one, which appears on the ground in front of the chest and is picked up as usual (decision-031). The other two are lost. The player can leave without choosing with the same key that opens and closes the inventory, and the chest stays closed with the same three weapons. The chest screen freezes the game like the other menus (decision-040), except in multiplayer, where a menu never freezes the game.

## Consequences

Players read and compare weapons in a quiet, frozen moment, and a chest becomes a choice instead of a single roll. Each chest rolls three weapons, so the loot rules must roll three and keep them fixed once the chest has been opened. The chest screen is a new menu that must be operable with the keyboard. In multiplayer the screen does not freeze the game, so a player reading it can still be attacked.

## Alternatives considered

- A chest that drops one weapon on the ground: the player must read it by hovering during play and can compare it with only the held weapon.
- Showing only 1 or 2 weapons: 3 seems a good choice for ample choice without being too much or too little. The player should have more leeway and choice in their equipment.
- Letting the player keep all three weapons: there would be no choice, and each chest would give three weapons.
