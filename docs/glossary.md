# Glossary

The words used in these documents, in plain language. Commands and file names are typed exactly as written. There are no abbreviations in the documents, so every term is written out.

## Documents and process

- **Product requirements document:** says what is being built, for whom, and why.
- **Software requirements specification:** the numbered list of exactly what the game must do and how well.
- **Functional requirement:** something the game does, for example the player can wall jump.
- **Quality requirement:** how well the game must do it, for example 60 frames per second. Also called a non-functional requirement.
- **Decision record:** a short note stating a technical choice, the alternatives that were considered, and the reasons. Formally called an architecture decision record.
- **Use case:** a scenario of a player doing something, with an acceptance criterion.
- **Traceability:** being able to follow a requirement to the test that checks it. Requirements about behavior the player experiences can also be followed to a use case.
- **Test plan:** the document describing how the game is tested.
- **Quality assurance:** the practice of finding and tracking defects before players do.
- **Bug log:** the list of known defects with severity and status.
- **Playtest:** watching real people play to learn whether the game is clear, fair, and fun.
- **Telemetry:** automatically recorded play statistics, such as where players die.
- **Minimum viable product:** the smallest complete version worth releasing.
- **Development log:** short daily notes on what was done and learned.
- **Roadmap:** the plan of what is built when.
- **Milestone:** a named group of work. The milestones are lettered A to G, followed by the first release.

## Testing

- **Unit test:** checks one small piece of code in isolation, in milliseconds.
- **Integration test:** checks several pieces working together, for example running the simulation for 600 ticks with scripted inputs.
- **End-to-end test:** drives the real game in a real browser, like a player would.
- **Fuzz test:** feeds random inputs for a long time to find crashes and impossible states.
- **Test pyramid:** many fast unit tests, fewer integration tests, and very few slow end-to-end tests.
- **Vitest:** the tool that runs the unit and integration tests.
- **Selenium:** a tool that controls a real browser for end-to-end tests.
- **Benchmark:** a repeatable speed measurement.
- **Profiling:** measuring where a program spends its time or memory, using a tool such as Chrome DevTools.
- **Regression:** something that used to work and breaks after a change.
- **Lighthouse:** a Chrome tool that scores a web page for performance and accessibility.
- **Accessibility:** making the game usable by people with different abilities, for example menus that work with the keyboard only.
- **Balance test:** an automatic test that checks numbers, such as kill times across weapon tiers, stay inside their readable bands.
- **Reachability checker:** a test that confirms each section can be completed from both the Black and the White background, with its slots on or off.

## Engineering

- **Simulation:** the part of the code that holds the game rules and state, with no drawing.
- **Tick:** one step of the simulation. The simulation runs 60 ticks per second.
- **Fixed time step:** every tick advances game time by the same amount, so results are repeatable.
- **Deterministic:** the same starting point and the same inputs always give the same result.
- **Seeded random number generator:** a random source that repeats exactly when started with the same number.
- **Headless:** running without a screen or browser, for example in tests.
- **Physics engine:** code that moves objects and detects collisions. This game uses Planck.
- **Phaser:** a framework that draws the game, loads maps, plays audio, and reads input in the browser.
- **Planck:** a JavaScript version of the Box2D physics engine.
- **Tunneling:** a fast object skipping through a thin wall between two ticks.
- **Collision filter:** settings that decide which kinds of objects collide. Each object has a category (what it is) and a mask (which categories it collides with), and two objects collide only if each one's mask includes the other's category.
- **TypeScript:** JavaScript with types, so many mistakes are caught before running.
- **Type check:** the compiler pass that finds type mistakes.
- **Node:** runs JavaScript outside the browser. The tests and the future server use it.
- **npm:** the Node package manager, which installs libraries.
- **Package:** a folder of code with its own `package.json` file. A repository that holds several packages is called a monorepo.
- **Vite:** the tool that builds and serves the web version of the game.
- **Zod:** a library that checks data against rules and reports clear errors.
- **Schema:** a written description of what valid data looks like.
- **Data-driven:** behavior comes from data files, so content changes need no code changes.
- **Registry:** a lookup table from a name to a piece of code.
- **Strategy pattern:** swappable pieces of behavior that share one interface.
- **Event bus:** a channel where the simulation announces what happened, for other parts to react to.
- **Flow field:** a map that tells every position which direction leads to a target, computed once and shared by many enemies.
- **Pathfinding:** working out a route to a destination. A-star search is one common method.
- **Surface cell:** an empty cell that touches a solid tile of a bug's color group. Crawlers walk on surface cells.
- **Garbage collection:** the automatic memory cleanup in JavaScript. If it runs at a bad moment, the game stutters.
- **Object pooling:** reusing objects instead of creating and discarding them.
- **Spatial grid:** dividing the level into cells so only nearby things are compared.
- **Local storage:** a small store inside the browser that survives reloads.
- **WebSocket:** a persistent two-way connection between browser and server, used later for multiplayer.
- **Server-authoritative:** the server decides what is true, and the players only send inputs.
- **Frames per second:** how many pictures the game draws each second.
- **Continuous integration:** automatically running the checks on every push.
- **Conventional commit:** a commit message that starts with a type, such as feat, fix, test, docs, perf, or chore.

## Game and art terms

- **Hitbox:** the shape used for collisions, usually simpler than the drawing.
- **Sprite:** a drawn image or shape on the screen.
- **Tile and tile map:** a square building block of the level, and the grid made of them.
- **Tiled:** the free editor where sections are drawn.
- **Shard:** one disconnected floating piece of an entity in the art style. Shards are drawn by hand and exported with the rest of the image.
- **Autotiling:** choosing the tile variant from its neighbors, so the dotted outline appears only on the outer edge of a connected structure of one dimension.
- **Pixels per game unit:** the number that converts physics units to screen pixels. It is 32, and art is drawn at 64.
- **Texture atlas:** many small images packed into one big image so the graphics card draws them together.
- **Coyote time:** a short grace period for jumping after walking off a ledge. A shift that removes the player's footing gives none.
- **Jump buffering:** remembering a jump pressed just before landing.
- **Cooldown fill:** the icon animation where a sliver of a circle or square grows into a full one while an ability or the shift recharges.
- **Class:** the player's choice of Ranger or Melee. Each class has its own color, blue for the Ranger and red for Melee.
- **Class color:** the color shared by everything the player owns: the player, weapons, projectiles, and chests. It sits outside the Black, White, and Gray dimensions, so it is always visible.

## The dimension rule

- **Dimension:** a thing's color: Black, White, or Gray.
- **Background:** the current world color: normally Black or White, and rarely Gray.
- **Shift:** pressing the button that switches the background between Black and White.
- **Intangible:** present and moving, but unable to touch or hurt the player.
- **Shift gate:** an obstacle that exists in only one dimension, forcing a shift.
- **Refused shift:** a shift that does not happen because it would leave the player inside something solid. It still starts the cooldown, and the shift icon greys out in advance.
- **Losing footing:** what happens when a shift makes the player's floor, ladder, or wall intangible. The player keeps momentum and falls.
- **Gray background:** a rare, secret third background reached only by special means set per level, never by the shift button. On it, Black and White things are both touchable and Gray things are intangible.
- **Overlap rule:** where Black and White world geometry overlap, the overlapping area becomes Gray, because mixing the two colors makes Gray.
- **Lookup table:** a list that pairs each input with its answer, so a rule can change by editing a row. The dimension rule is stored this way.
- **Dotted outline:** the always-visible outline on every world object: white dots on Black things, black dots on White things, and alternating black and white dots on Gray things.

## Health and the reposition moment

- **Health points:** the 7 hits the player can take. Every hit takes exactly 1. Kills recover health: 1 point per X kills, where X is the quota divided by 10, rounded up. Health never goes above 7. Kills made at full health still count toward the next recovery.
- **Reposition moment:** what happens when the player is hit and has health left: the game freezes, the player picks a nearby spot with the mouse and may shift, the player teleports there, and time resumes.
- **Immunity:** the short time after a hit, shown as blinking, when the player cannot be damaged.
- **Time scale:** a number for how fast game time runs: 1 is normal and 0 is stopped. The freeze ramps it down to 0 and back.
- **Unscaled clock:** a second simulation clock that keeps running while the time scale is 0. The shift cooldown uses it.
- **Menu freeze:** pausing or opening the inventory, chest, or forge screen stops the simulation completely, in single-player only.
- **Clipping:** being inside solid objects. A shallow clip is nudged to the nearest empty space with no damage. A deep clip counts as damage (crushing).
- **Crush damage:** the damage from being crushed. The player takes exactly 1. A bug takes a percentage of its maximum health, set in data. Elites and bosses are not affected.
- **Softlock:** a state the player cannot get out of, so the game cannot continue.

## Levels

- **Level:** one stage of a run: an ordered list of sections joined from the exit of one to the entrance of the next.
- **Section:** a hand-made square piece of a level, drawn in Tiled, with all its colors and spawn slots. It is its own puzzle: parkour, a shift gate, or both.
- **Entrance and exit:** the one place a section is entered and the one place it is left. A level joins the exit of one section to the entrance of the next.
- **Difficulty value:** a number from 1 to 10 given to each section. Later levels favor harder sections.
- **Spawn slot:** an authored location in a section where a trap, chest, lever, or other thing may appear, with a chance that it does.
- **Slot group:** a limit on how many members of a group of slots exist at once, for example only one lever that opens a gate.
- **Quota:** the number of kills needed to unlock the door.
- **Door:** the exit of a level. It unlocks when the quota is met, and reaching it wins the stage.
- **World change function:** the one function, `world.mutate`, that every change to the world passes through.

## Enemies

- **Bug:** any enemy in the horde.
- **Horde:** the bugs spawned over a level. The cap on living bugs is the quota plus a flat amount set in data.
- **Crawler:** a bug that walks along surfaces toward the door.
- **Flyer:** a bug that flies toward the player.
- **Elite:** a stronger special bug (after version 0.2.0): locusts, mosquitoes, and wasps.
- **Gray bug:** a special bug or elite that exists in both dimensions (after version 0.2.0). It likely flies and ignores walls and physics.
- **Correcting state:** the state a stuck or crushed bug enters. It ignores physics and the dimension rule, flies straight through walls to its next path point, does not attack, and still takes damage, apart from crush damage.
- **The Queen:** the final boss (after version 0.2.0). Killing her wins the game.

## Traps and platforms

- **Trap:** a hazard that hurts enemies as well as the player and follows the dimension rule.
- **Lever and trigger:** a lever or button that is operated with the interact key or by hitting it, and a connection that fires its target, such as a gate, a platform, or a locked chest.
- **Scripted platform:** a platform that moves along a script and starts from a trigger.
- **Weighted platform:** a special platform that drops while the player stands on it and rises when the player steps off. If something is in the way as it rises, it stops. Crawlers use it as a surface only while it is at rest.
- **Breakable block:** a block that blocks the way and breaks only from damage. Breaking it is a damage check that opens a path. A broken block stays broken.

## Weapons and loot

- **Archetype:** a weapon family, such as Scatter, with a shared ability.
- **Ability:** the second use of a weapon, with a cooldown. Every ability is a movement tool first.
- **Tier:** a weapon's number from 1 to 15, shown as a roman numeral after its name.
- **Rarity:** one of five brackets of three tiers each: common, uncommon, rare, epic, and legendary. It sets the background color of the weapon's text box.
- **Rolled stat:** a stat given a random value inside a range that belongs to that specific weapon.
- **Stat range:** the minimum and maximum a stat can roll. Each tier multiplies both by a scaling factor, base 1.3.
- **Special addition:** the extra effect a weapon unlocks at uncommon, rare, epic, or legendary (after version 0.2.0).
- **Chest:** the source of weapons. Opening one shows the chest screen.
- **Special chest:** a chest that drops one rarity higher than a normal chest. Special chests sit in special chest areas, which are good loot areas.
- **Locked chest:** a chest, normal or special, that a lever or trigger must unlock before it opens.
- **Chest screen:** the screen that opens with a chest. It freezes the game and offers three weapons next to the inventory. The player picks one, which appears on the ground in front of the chest, and the other two are lost.
- **Band:** a group of levels that drop the same rarity. There is one band for each droppable rarity.
- **Inventory:** the screen, opened with R, that shows the player's weapons and their stats.
- **Hover box:** the decorated text box that appears above a weapon while the mouse hovers over it.
- **Forge:** a spot in a level where two weapons of the same tier merge into one weapon one tier higher (after version 0.2.0). Each forge can be used once.
- **Merging:** combining two weapons of the same tier at a forge.
- **Loot core:** Milestone C: tiers, rolled stats, chests, weapons in the world, pickup, swap, and the hover box.
