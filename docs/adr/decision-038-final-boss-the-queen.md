# decision-038: The game ends with a final boss, the Queen

**Status:** Accepted (planned after version 0.2.0)
**Date:** November 5, 2026

## Context

A roguelike with an endless horde needs an ending and a reason for the player to keep running. The player is the Exterminator, so the story reason is to end the endless horde at its source.

## Decision

The player beats the game by killing the final boss, the Queen. Her visual direction is an abstract amalgam. A boss stage has a horde, but killing it is not the win condition. There is no quota, and the door opens when the boss dies. How many levels come before her, whether there are bosses in between, and whether the horde in her fight can be killed or is immortal are to be decided.

## Consequences

Version 0.2.0 stays one stage, and the Queen comes after it. Designs being considered for the fight: (1) an immortal horde, while the player must defeat the Queen; (2) the Queen is invincible until a number of enemies are killed, then a brief damage phase begins, and the cycle repeats; (3) most likely, the horde is immortal, and the Queen spawns her own special bugs that, when killed, open the damage phase and temporarily bring down her immortality, in a cycle. In the second and third designs the player heals by 1 each time the damage phase starts, so recovery on a boss stage is part of the fight design and not the quota rule (decision-024). Other ways of bringing down the barrier, shield, or shell are to be decided.

## Alternatives considered

- No final boss: the run would have no ending and no story reason for the horde.
