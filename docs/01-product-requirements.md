# Product Requirements

## Introduction

Noir Insecticide is a two-dimensional roguelike platformer about decimating a horde before it gets a chance to decimate you. The player is the Exterminator, a vigilante-for-hire who must run, climb, and fight through large, elaborate rooms while an endless insect horde follows close behind them. The player kills enough bugs to reach a quota, unlocks a door at the edge of a dead end, and advances to a harder stage, or they die trying from the countless traps and the ever-growing swarm. The Exterminator must survive through several stages to reach the final boss, the Queen, and end the swarm once and for all.

## Why this roguelike?

1. **Difficulty comes from skill, not from numbers.** In most roguelikes, difficulty and weapon power both rise as numbers, until the game turns into a race between figures nobody can read: you one-shot everything or you get one-shot, nothing can die or you cannot die, and skill, technique, and strategy stop mattering, because you either have enough numbers or you do not. In Noir Insecticide the numbers do rise for both sides, but the challenge is skill. Getting farther demands spatial awareness, quick decisions, fast reactions, accurate aim, strong movement fundamentals and a deep understanding of your character, good timing with shifting and avoiding, and using the traps to your advantage. A win feels earned, a loss feels fair, and the game stays interesting past the point where other roguelikes turn into a numbers festival.
2. **No progression between runs.** Nothing carries over. From the very first game, a player can win through skill alone.
3. **Movement is integral, and the player chooses it.** Moving is fun in itself, and it is unique here because the player chooses which movement they have: every weapon ability is a movement tool first and foremost, with damage being secondary. The player carries two weapons, choosing their own combination of movement abilities.
4. **A migration, not a loop in one place.** There is no standing in a circle and shooting. The player must keep traveling through a level whose areas each ask for something different (new terrain, new traps, new parkour, new arrangements of obstacles), so they are never in the same place doing the same thing over and over. The level evolves as you move, and the horde behind acts as a clock that creates real desperation without being boring.
5. **Ideas the player has not seen elsewhere.** The black and white dimension rule and the trap system, in which traps can be re-armed and turned against the enemies, are new, distinctive, and fun.
6. **Things keep their identity.** In many roguelikes with a large item pool, twenty minutes in you hold a hundred items, remember almost none of them, and just play while things happen. Every item loses its identity, intention disappears, and unique items and enemies stop mattering. Here the player carries at most two weapons, every power is either triggered on purpose or clearly visible, and every weapon, enemy, and trap is recognizable at a glance, so the player always knows what they have and uses it deliberately.
7. **The swarm without the autopilot.** Horde games offer the satisfying fantasy of cutting down huge, unending crowds, usually by standing still while automatic attacks do the work. Here the fantasy is kept but must be earned: every attack is aimed and triggered by the player, and mass kills come from skill, such as lining up a piercing shot, placing a shotgun spread, dropping a boulder, or timing a shift. Power comes from reach and multiplicity (how many enemies one skilled action catches), not from bigger damage numbers, so the swarm stays satisfying and the game stays interactive. The rhythm is a ballad: a sustained process of surviving and maneuvering while killing steadily, interwoven with big moments of damage.
8. **Mistakes are costly but not fatal.** If one slip meant instant death, the game would be all or nothing, which is neither fair nor fun. The player has 7 health points, every hit costs exactly 1 whatever its source, and each hit gives the player a moment to reposition with a clever decision. Kills slowly win health back. Failure stays meaningful, and recovery stays skill-based.

The test for every design decision: could a player who has never played win their first run through skill alone, would a loss feel fair, and can the player always say what they are holding and what it does?

The defining twist is the black and white dimension system. Almost everything in the world is Black or White, and a few things are Gray. The background is normally Black or White, and rarely Gray. The player can only touch things whose color differs from the background, plus anything Gray. A black bug on a black background is intangible: no collisions and no damage in either direction. It still exists, moves, and attacks; it just cannot affect the player until the background changes.

The player changes the background with one dedicated shift button, which has a 0.4 second cooldown. The button switches between Black and White only. A rare third background, Gray, exists as a secret and situational state that is reached by other means set per level. Levels force shifting, because some obstacles exist in only one color, and staying on one background for long lets the hidden horde pile up and land on the player at the next shift.

The player's own projectiles belong to both dimensions. They are visible on either background and can only harm things the player could currently touch. Shifting while a projectile is in flight can carry it through a wall that exists in only one color. A projectile caught inside a wall that becomes solid is destroyed.

## Audience

Primary: players who enjoy fast, skill-based roguelikes and precision platformers, want movement mastery to matter, and are happy to fail quickly and retry. They need a game that loads fast in a browser, explains its one unusual rule in under a minute, and is fun in short sessions.

## Goals

1. Make a game where traversal, combat, and the black and white rule reinforce each other, so mastery looks like fast, confident movement.
2. Ship a playable, deployed single-player first version (the minimum viable product, meaning the smallest complete thing worth releasing) by December 8, 2026, with one complete stage, and the complete project by January 17, 2027.
3. Keep the game fair and readable: the dimension rule must be understandable in about a minute, and every death should be explainable by the player.
4. Make new content cheap: new weapons, enemies, traps, and levels arrive as data entries, not rewrites.
5. Make the code trustworthy: a deterministic, headless simulation with unit, integration, end-to-end, and fuzz tests, a measured performance benchmark, and automatic checks on every change.
6. Document the design and the reasons behind each decision, so the project can grow, and a server-authoritative multiplayer mode can be added later without a rewrite.

## Non-goals for the first version and for version 0.2.0

The Melee class and the Chain weapon, procedural level generation, special enemies (worms and mantis), bosses (including the final boss, the Queen), multiplayer, audio, impact frames, cutscenes, and swinging ropes.

Planned after version 0.2.0: special additions unlocked by weapon rarity, merging places, flavor text for each rarity, and animated weapon sprites (weapons are static single sprites in version 0.2.0). The data model for them is built in the loot core so they arrive later as data plus a few small behavior classes.

## Scope

The project ships in two stages. Version 0.1.0 (December 8, 2026) is the first public version: the Ranger with Scatter and Barrage, full movement, the dimension system, the health and reposition mechanic, the horde, the quota, the door, win and lose, sound hooks, and a test proving that new weapons and enemies can be added with data alone. Version 0.2.0 (January 17, 2027) is the complete scope listed below, adding the loot core (tiers, rolled stats, pickup, swap, hover box), the traps, scripted platforms, interaction, the Gray background, the settings menu, shard art, performance work, end-to-end tests, and playtests.

In:

- The Ranger class with two starting weapons: Scatter (shotgun) and Barrage (fast-firing weapon)
- Full baseline movement: run, variable-height jump, double jump, wall slide, wall jump, crouch, fast fall, ladder climbing
- Two weapon slots, swapping with Q; every weapon is unbreakable and limited only by its ability cooldown
- The loot core: 15 tiers in five rarities, rolled stat ranges per weapon, weapons resting in the world, pickup and swap with E, a hover box with comparison numbers, and weapon icons with cooldown fills
- The shift button, cooldown, dimensions, intangibility rules, refused-shift handling (with an advance warning on the shift icon), dotted outlines, overlapping Black and White geometry becoming Gray, and support for the rare Gray background in the rules, data, and tests (a secret area that uses it is optional)
- Player projectiles that exist in both dimensions
- One level authored in the Tiled editor, loaded as validated data, with an exit door, a kill quota, and at least three shift gates (obstacles that exist in only one color)
- A horde spawner with a time-based difficulty ramp, per-color spawn tables, and a cap on living enemies
- Enemies: flyer, crawler, long-reach crawler, and Gray bugs
- Traps: spikes, spinning saws, rope-and-boulder, tripwires and laser tripwires
- Scripted moving platforms started automatically, by a timer, by an event, by a tripwire, or by a lever
- The interact key (E) and attack-activated switches
- An on-screen display for quota, weapon icons, the shift icon and its cooldown fill, and the background
- A settings menu with key rebinding
- Win and lose states
- Art made by hand in an editor and exported as single transparent images: shard-style weapons, enemies, and traps with dotted outlines drawn into the art, and world tiles autotiled so outlines follow the edge of each connected structure
- Limited health (7 points), with damage that is always exactly 1, health recovery by kills, the freeze, reposition, and immunity sequence, and graded clipping and crush damage

Out: see the non-goals above.

## Success measures

- A live build on GitHub Pages, tagged version 0.1.0
- Continuous integration (an automatic check on every code push) passing: type check, tests, build, deploy
- At least 60 unit tests, 12 integration tests, and 3 to 5 Selenium end-to-end tests
- A documented benchmark with frame times at several enemy counts
- At least 3 outside playtesters and a playtest report
- A README with an animated image, a live link, and a known-issues list

## Risks

| Risk | Mitigation |
|---|---|
| The scope is too large for the schedule | Follow a written cut list, cutting content and never tests or documents |
| Shift edge cases (stuck in walls, projectiles in walls) | One shift function, a truth table test, refused-shift tests, graded clipping |
| Many enemies hurt performance | Shared pathfinding fields, a spatial grid, sleeping physics bodies, throttled behavior updates, an early benchmark |
| Fast projectiles pass through thin walls (tunneling) | Planck's bullet setting, speed caps, thick colliders |
| A level cannot be completed under the dimension rules | A reachability checker that searches over position and background |
| Too many hand-written special cases | The scaffolding rules in the architecture document |
| Movement scope grew | Movement gets two full days in the schedule |
| Tier scaling compounds into a numbers festival | A per-stat scaling setting in data, enemy scaling, and an automatic balance test across all 15 tiers (progression-003) |
