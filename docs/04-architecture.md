# Architecture

This document explains how the code is organized and why. The reasons behind each choice are written down as decision records in [adr](adr/README.md), and this document points to them by number. The requirements the design has to meet are in [the software requirements](02-software-requirements.md), and the rules of the game are in [the rulebook](03-rulebook.md).

The design rests on one idea: **the game rules live in a simulation that knows nothing about drawing.** The browser code only draws what the simulation says and sends the player's commands back. Everything else follows from that (decision-003).

## Structure

```
packages/
  sim/       the headless simulation (no browser, no Phaser)
    src/core/       fixed-step loop, random numbers, event bus, registries
    src/systems/    movement, shifting, weapons, enemies, triggers, traps, platforms
    src/content/    data files: weapons, enemies, traps, triggers, balance, controls, sections, levels
    src/schemas/    validation rules for every data file
  client/    Phaser drawing, input mapping, on-screen display, menus and screens
  server/    later (multiplayer)
docs/        all public documents
```

| Package | Responsibility | May not |
|---|---|---|
| `sim` | Game state and every rule: movement, shifting, damage, health, enemies, traps, platforms, loot, levels | Import Phaser or anything from the browser (quality-002) |
| `client` | Draw the state, play sounds, read the keyboard and mouse, show the display and the menus | Decide anything about the rules |
| `server` (later) | Run the same simulation for several players and send the results | Contain rules of its own |

Two tools hold the pieces together. Phaser draws, loads maps, plays audio, and reads input (decision-001). Planck.js, a JavaScript port of the Box2D physics engine, moves bodies and detects collisions inside the simulation, with continuous collision detection and a bullet setting for fast projectiles (decision-002). Phaser's own physics is not used.

## The simulation and the client

The simulation is **headless**: it runs in Node with no screen, which is what makes it testable. It is **deterministic**: it uses a fixed time step and a seeded random number generator, so the same seed and the same inputs always give the same state, and the same seed gives the same level (quality-003). It is **command-driven**: the client never changes simulation state directly. Each frame it sends commands (move, jump, shift, use weapon, reposition), and the simulation answers by changing its own state.

The client reads the simulation state every frame and updates sprites, linking each sprite to its entity by an identifier. A fixed time step runs inside Phaser's update function: the client adds up the real time that passed and steps the simulation as many whole ticks as that time contains, so drawing speed never changes game speed.

This split gives:

- fast unit and integration tests in Node, with no browser;
- replays, because the same seed and inputs reproduce a run;
- benchmarks that run without a screen;
- a path to multiplayer, because the server can run the same simulation (decision-008).

## One tick

Each tick runs the same steps in the same order. The order is proposed and may change when the code is written.

1. Read the player's commands.
2. Handle the shift button and its cooldown.
3. Move the player.
4. Advance scripted platforms and traps.
5. Spawn and update enemy behavior.
6. Use weapons and update projectiles.
7. Step physics.
8. Resolve triggers, damage, clipping, and health recovery.
9. Remove dead things.
10. Publish events.

### Time

The simulation has a **time scale**: 1 is normal speed and 0 is stopped. The reposition moment (the freeze after the player is hit) ramps the time scale down to 0 and back up. While it is 0, the player chooses a spot, and the client sends a single reposition command.

The simulation also keeps an **unscaled clock** that advances on every fixed step, whatever the time scale is. The shift cooldown runs on that clock, and shift commands are accepted while the time scale is 0 (decision-020, decision-027). This keeps the freeze a property of the simulation, so tests and a future server can reproduce it exactly.

A **menu freeze** is different. Pausing, the inventory screen, the chest screen, and the forge screen stop the simulation from stepping at all, so neither the time scale nor the unscaled clock advances. A menu never freezes a multiplayer game (decision-040).

### Events

The simulation publishes events: shifted, enemy killed, switch pressed, weapon picked up, and so on. The display, the sound, the telemetry, and the future network code subscribe to them. None of those are wired into the game rules, so each can be added, changed, or removed without touching the simulation (decision-013).

## The dimension rule

Every world object, enemy, and enemy projectile has a dimension: Black, White, or Gray. The world has a background: Black or White, and rarely Gray. Which dimensions the player can touch on each background is one lookup table, so the rule can change by editing a row (decision-019).

Two mechanisms use that one table (decision-006):

- **Collision filters.** Each dimension maps to Planck category and mask bits. A category says what an object is, and a mask says which categories it collides with. Two objects collide only if each one's mask includes the other's category. A shift changes only the player's mask, never a category.
- **One shared function**, `isReal(dimension, background)`. Filters cover collisions only, so this function decides everything else: triggers, reach checks, damage, and enemy attacks. A test confirms that the filters and the function agree for all nine combinations of dimension and background.

Player-owned things (the player, weapons, projectiles, and chests) are drawn in the player's class color, outside the three dimensions, so they are always visible (decision-032, decision-033). A player projectile is visible on every background and affects only things the player could currently touch. It continues through shifts, and it is destroyed if a shift leaves it overlapping something solid (decision-014). Enemy projectiles take the dimension of the enemy that fired them.

Shifting is one dedicated button with a cooldown, and nothing else flips the background, apart from the special means that reach the Gray background (decision-011, decision-015).

## Data, behavior, and constants

The rule of thumb: if a designer could ever want to change it, it is data. If it is a new kind of behavior, it is a small class registered by name. Only things that can never change are constants in code (decision-012).

| Kind | Where it lives | Examples |
|---|---|---|
| Data | Content files, validated when loaded | Weapon and ability stats, stat ranges and tier scaling, enemy stats, spawn tables, trap parameters including the percentage of maximum health a trap deals to bugs, platform scripts, balance numbers, default key bindings, cooldowns, sections, levels |
| Behavior classes | Code, registered by name in a registry | Movement behaviors, attack behaviors, ability effects, trigger types, platform start conditions, rarity special additions |
| Constants | Code | The three dimensions and the three backgrounds, direction names, the tick order, the conversion between game units and pixels, the data format version |

A **registry** is a lookup table that links a name to a piece of code. Adding a new weapon, enemy, trap, trigger, or platform movement means adding a data entry, and a code change only when the behavior itself is new, which then means one new class and one registration line, with no edits to the core loop (quality-011). A test registers a fake definition to prove it.

Every data file is checked against a **schema**, a written description of valid data, when it loads. A schema library called Zod produces error messages that name the file and the field (decision-012, quality-012). Swappable pieces of behavior that share one interface, the strategy pattern, are used for enemy behaviors, attack behaviors, and trigger types.

## Levels

A level is data, not code (decision-004). Levels are assembled from hand-made sections (decision-045):

- A **section** is drawn by hand in Tiled, a free map editor. It is a square of a standard size, with a few exceptions that are whole multiples of that size. It has one entrance, one exit, a difficulty value from 1 to 10, and spawn slots.
- A **level** is an ordered list of sections, joined from the exit of one to the entrance of the next. Each level uses a subset of all sections, with weights set in level data, so later levels favor harder sections. For version 0.2.0 a level is joined by hand. A generator that joins sections using the seeded random number generator comes after version 0.2.0, unless a large library of sections exists sooner.
- **Spawn slots** are authored locations where a trap, chest, lever, or other thing may appear. Each slot lists what may spawn there and the chance that it does, and may belong to a group that limits how many members exist at once. Randomness decides whether something appears, never where (decision-046).
- A **loader** converts Tiled files into section data and rejects invalid sections and levels with clear messages. It also turns overlapping Black and White tiles into Gray tiles (decision-016).
- A **reachability checker** confirms that each section can be completed on its own by shifting between the Black and White backgrounds, with its slots on or off. Because each section is checked alone, a level made of good sections is guaranteed to be completable. This is also where level mistakes are caught, since the game has no softlock guard (decision-023).

Trigger identifiers are local to a section, so the same section can appear twice in a level.

### Changing the world

All world changes pass through one function, `world.mutate`. It updates the tiles and the surface graph and increases a version number (level-006). A breakable block breaking is an example of a change that goes through it. After a version change, flow fields are rebuilt, combined, and spread over several frames (level-007).

## Enemies

Many enemies share one computed map instead of each searching for a route. A **flow field** tells every position which direction leads to a target, and it is computed once and shared (decision-007).

- Flyers follow the player using a flow field.
- Crawlers move along surfaces toward the door using a shared flow field. Crawlers walk on **surface cells**, empty cells that touch a solid tile of their color group, corners and ceilings included, so the same search serves flyers and crawlers.
- For version 0.2.0 there is one flow field for each of two crawler color groups: Black plus Gray surfaces, and White plus Gray surfaces. Gray bugs, planned after version 0.2.0 as special bugs or elites, are likely to fly and ignore walls, so they need no field of their own.
- The field covers the whole assembled level and can be limited to the sections near the player.
- Rebuilds are limited to about 5 per second and about 1 to 2 milliseconds per frame (quality-005).

A bug that cannot follow its field, because it is stuck, squished, or on an island, enters the **correcting state** (decision-034). In that state it ignores physics and the dimension rule, flies straight to its next point, and does not attack. A bug that is crushed in any way takes crush damage first and then corrects, and it is immune to crush damage while correcting (decision-048). A weighted platform counts as a surface only while it is at rest, and a crawler on it enters the correcting state as soon as it starts moving (decision-041).

Bugs do not collide with each other, and their speeds vary at random (decision-042). The cap on living bugs is the level's quota plus a flat amount set in data (decision-043). Enemy strength resets each level, and difficulty comes mainly from variety (decision-044).

## Screens and menus

The client draws the on-screen display, the pause menu with the settings, the inventory screen, the chest screen, and (after version 0.2.0) the forge screen. All of them are operable with the keyboard (quality-008). The chest screen is an extension of the inventory screen: opening a chest shows three weapons next to the inventory, the player picks one, and it appears on the ground in front of the chest (decision-049).

## Testing hooks

The game canvas is invisible to Selenium, the tool that controls a real browser. End-to-end tests therefore read the on-screen display and a small read-only state object that the client exposes for tests (decision-009). Everything else is tested without a browser, against the headless simulation. See [the test plan](06-test-plan.md) for the layers.

## Performance

Sprites and projectiles are pooled first, and physics bodies are pooled only if profiling shows a need (decision-010). The benchmark and profiling work guides performance changes instead of guesses. Per-frame loops make no new allocations for each entity (quality-006).

## Art pipeline

Art is made by hand in an editor and exported as single images with transparent backgrounds (decision-036). One game unit is 32 pixels, and art is drawn at 64 pixels per unit and shown at half size (decision-035).

## Multiplayer, later

Multiplayer is deferred, but the design leaves room for it. A Node server would run the shared simulation and talk to the players over WebSockets, using the `ws` library, with the server deciding what is true and the players sending only their inputs (decision-008). That is why the simulation has no browser imports and uses no real-time clock of its own.

## Building and checking

Vite builds and serves the web version of the game. Every push and pull request runs type checks, tests, and a build, and the main branch is published to GitHub Pages only after they pass. Merges are blocked on type errors, failing tests, or a failing build (quality-009).

## Decisions

Every choice above has a record in [the decision records](adr/README.md) with the context, the decision, the consequences, and the alternatives that were considered. Records are never deleted. A replaced decision is marked superseded and linked to its replacement.
