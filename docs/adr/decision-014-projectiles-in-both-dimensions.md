# decision-014: Player projectiles live in both dimensions

**Status:** Accepted
**Date:** October 24, 2026

## Context

Player shots need to stay readable on every background, and they interact with the Black and White rule like everything else.

## Decision

Player projectiles are visible on every background and affect only things the player could currently touch. They continue through shifts. A projectile that ends up overlapping something that becomes solid after a shift is destroyed.

## Consequences

The shifting trick becomes possible: a projectile can pass through a wall that exists in only one color if the player shifts while it crosses and shifts back. A shift can also cost the player a shot. Enemy projectiles take the dimension of the enemy that fired them. Player projectiles share the color of the player's class (decision-032).

## Alternatives considered

- **Projectiles with a world color (Black/White).** Originally considered making the player bullets themselves background-conditional as well, however it makes gameplay unintuitive, less satisfying, and also make less sense since the bullets realistically should match the same layer as the player at all times. Keeping the projectiles readable and permanently on-screen simply feels better for the player.
- **Projectiles as Gray.** This is closest to something pre-existing. Gray is visible on both main backgrounds. But Gray things touch everything, so your shots would hit things you cannot currently touch, which breaks the rule that they only affect what you could touch. They also are not easily visible as Gray, and should match the color of the player and his/her weapons.
