# decision-032: Player-owned things have a class color: blue for Ranger, red for Melee

**Status:** Accepted
**Date:** October 30, 2026

## Context

Almost everything in the world is Black, White, or Gray, and things that match the background disappear. The player, their weapons, and their projectiles must stay easy to see however chaotic the screen gets. They also need a bold identity of their own, the two classes need different identities, and in multiplayer the players must be easy to tell apart.

## Decision

The player, the weapons they carry, and their projectiles are player-owned. They operate on the same plane, so they share one color per class: blue for the Ranger and red for Melee. Chests stay in this group. The player-owned color sits outside the Black, White, and Gray dimensions. The exact hues are a matter of preference (green would also have worked); blue and red were chosen because they are easy to tell apart from each other and from black, white, and gray.

## Consequences

Player-owned things never vanish when the background changes. Player-owned things have no dotted outline, since they never become intangible and the class color already makes them stand out. A class is recognizable by its color, and two players in a future multiplayer mode can be told apart. The player-owned color also works differently from Gray. Gray is in both layers at the same time, so black and white things can both interact with it. The player is effectively one color that always matches what the player can touch: it is the opposite of the background and changes on every shift. From the player's side, Black and White are "active" or "deactivated", while Gray and the player are always active. A hybrid character holding one weapon of each class (a backlog idea) would mix two colors, and how to handle that is to be decided if it is ever built.

## Alternatives considered

- **Gray for player-owned things.** Gray already exists and has a different meaning (both colors at once). The player works differently from Gray, so using it would be inconsistent, and it would also be harder to see.
- **The opposite of the background (black on white, white on black).** The player would flip with every shift and look like a world object, and it gives no bold identity of its own. It also could not tell the classes or two players apart.
- **One color for both classes.** The classes could not be told apart, and neither could two players in multiplayer.
- **A different color for each player-owned thing.** The player, the weapon, and the projectile operate on the same plane, so they should look the same.
