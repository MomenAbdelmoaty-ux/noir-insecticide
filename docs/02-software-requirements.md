# Software requirements

Each requirement has an identifier made of a category word and a number, for example movement-004. Identifiers are never reused: a removed requirement keeps its number and is marked as removed. Requirements marked "After version 0.2.0" describe planned work that is not part of the first releases.

This lists functional requirements (what the game does) and quality requirements (how well it does it; these are also called non-functional requirements). Every number written as data below is a tunable value stored in a data file, not a constant in code.

## Functional requirements

### Movement

- **movement-001** The player shall run left and right with A and D.
- **movement-002** W and Space shall be synonyms for the jump action.
- **movement-003** Tapping jump shall produce a short jump and holding it shall produce a higher jump, between a minimum and maximum height set in data. The double jump and the wall jump shall be variable in the same way, each with a minimum and maximum height set in data.
- **movement-004** The player shall have one double jump per time in the air, refreshed on landing on any floor the player can currently touch.
- **movement-005** A wall slide shall occur when the player touches a wall while holding the direction toward it: the fall speed is reduced to a slow, data-defined speed.
- **movement-006** The player shall have one wall jump per time in the air, usable during a wall slide, refreshed only by landing on a floor (not by touching another wall). It is separate from the double jump.
- **movement-007** Crouching (S) shall lower the hitbox and reduce horizontal speed while walking on the ground; there is no horizontal slowdown in the air.
- **movement-008** Crouching in the air shall temporarily increase gravity for as long as the key is held, which is the fast fall.
- **movement-009** Holding jump while overlapping a climbable object (such as a ladder) shall enter climbing mode: W climbs up, S climbs down, jump leaves the object, and left or right adds sideways acceleration only on swingable objects.
- **movement-010** Coyote time (a short grace period for jumping after leaving a ledge) and jump buffering (remembering a jump pressed just before landing) shall be supported with durations set in data.
- **movement-011** The game shall stop the browser from opening its right-click menu, scrolling on Space, or reacting to other game keys while the game has focus.

### Shifting and the dimension rule

- **shifting-001** Every world object shall have a dimension: Black, White, or Gray.
- **shifting-002** The world shall have a background: normally Black or White, and rarely Gray (see shifting-013).
- **shifting-003** The player and player-owned things (weapons, projectiles, the chain) shall interact with an object only if the object's dimension is touchable on the current background: on a Black background, White and Gray objects are touchable; on a White background, Black and Gray objects; on a Gray background, Black and White objects. The rule is stored as a lookup table in the simulation.
- **shifting-004** Objects shall interact with each other by dimension: Black with Black and Gray, White with White and Gray, Gray with everything. These rules do not depend on the background.
- **shifting-005** Intangible objects shall continue to simulate: movement, behavior, and trap cycles.
- **shifting-006** The shift button (default Left Shift) shall switch the background between Black and White only, with a cooldown of 0.4 seconds set in data. The cooldown shall count in real (unscaled) time, so it keeps running while the game is frozen. It shall be shown on the shift icon as a cooldown fill. The button shall never select Gray.
- **shifting-007** If a shift would leave the player overlapping a newly solid object, the shift shall not happen, but the shift cooldown shall still start. This refusal does not apply during the reposition moment (see health-017).
- **shifting-008** Player projectiles shall be visible on every background, shall affect only objects the player could currently touch, and shall continue through shifts.
- **shifting-009** A player projectile overlapping something that becomes solid after a shift shall be destroyed.
- **shifting-010** Enemy attacks and trap activations shall follow the same rule as shifting-003.
- **shifting-011** Every world object of a dimension shall draw a dotted outline that follows the outer edge of its connected structure of that dimension, always visible: white dots on Black things, black dots on White things, and alternating black and white dots on Gray things. World tiles shall be autotiled by neighbors of the same dimension only, so Black, White, and Gray never connect. Player-owned things have no dotted outline.
- **shifting-012** Gray tiles and traps shall be touchable on the Black and White backgrounds, and intangible only on the Gray background. The same shall apply to Gray bugs, which are planned after version 0.2.0.
- **shifting-013** The Gray background shall be rare and situational. It is reached only by means set in level data (special switches, timed intervals, jumps or abilities, and similar), never by the shift button. How the player leaves it is also set in level data.
- **shifting-014** Where Black and White world geometry (platforms, walls, and other solid objects) overlap, the overlapping area shall become Gray. The first version applies this to tile-based world geometry only; whether it applies to bugs and traps is to be decided.
- **shifting-015** Each way of reaching the Gray background shall be a small registered behavior chosen by level data, so a new way is added without changing the core loop.
- **shifting-016** A refused shift (see shifting-007) shall give clear feedback after the attempt: a distinct sound and a short visual cue, so it is not mistaken for a bug. In advance, the shift icon shall grey out whenever a shift would be refused. The greyed look shall differ from the cooldown fill so the two are never confused.
- **shifting-017** When a shift makes the thing the player stands on, climbs, or slides on intangible, the player shall keep their momentum and fall as if they had walked off a ledge. A shift shall give no coyote time (ordinary ledges still do). The double jump stays available, and so does a wall jump if a wall is still touchable. Climbing mode and wall sliding end.

### Combat

- **combat-001** The player shall hold up to two weapons, never two of the same archetype, and swap with Q.
- **combat-002** The player shall aim with the mouse. Left click shall use the equipped weapon and right click shall use its archetype ability, both in the aimed direction.
- **combat-003** Scatter: a spread of projectiles; its ability is a recoil dash opposite the shot direction.
- **combat-004** Barrage: fast fire; its ability is a long-cooldown, short-duration boost to jump height or speed.
- **combat-005** (Removed. Durability was removed; see decision-028. The number is not reused.)
- **combat-006** Abilities shall deal damage but are designed primarily as movement tools.
- **combat-007** Weapons, abilities, and their stats shall be defined as data entries, not hard-coded.
- **combat-008** The player's choice of weapons shall determine which movement abilities they have, so choosing a weapon is choosing how to move.
- **combat-009** Weapons and abilities shall be unbreakable. The only limit on an ability is its cooldown, set in data.

### Weapons, tiers, and loot

- **loot-001** Every weapon shall have a tier from 1 to 15, shown as a roman numeral after its name (for example Guilt IV). The tiers form five rarities of three tiers each: common (I to III), uncommon (IV to VI), rare (VII to IX), epic (X to XII), and legendary (XIII to XV). Legendary weapons never drop from normal chests (see loot-013).
- **loot-002** The rarity shall set the background color of the weapon's text box (for example gold for legendary).
- **loot-003** Every stat of a weapon shall be rolled within a range defined for that specific weapon, so two copies of one weapon can differ. Different weapons, even of the same archetype, shall have different ranges and distributions. Ranges are data.
- **loot-004** Each tier above the first shall multiply both the minimum and the maximum of a stat range by a scaling factor. The base factor is 1.3, set in data, and a stat such as spread angle or cooldown can have its own factor. Enemy statistics shall scale to keep up (see progression-003).
- **loot-005** (After version 0.2.0.) Uncommon, rare, epic, and legendary weapons shall each unlock one special addition, such as a damage over time effect, an ability variant, a synergy between the two, or a buff that scales with the number of enemies affected or a chain of successes. Each is a registered behavior chosen by data. The data model for them is built in the loot core.
- **loot-006** (After version 0.2.0.) Not all ability variations are available from the start: they are unlocked by rarity (see loot-005), and tier also widens the stat ranges.
- **loot-007** (After version 0.2.0.) At a forge area (not in the inventory), two weapons of the same tier shall merge into one weapon one tier higher than both. Each forge can be used once. Which of the two survives is random, and stats are not rerolled: each stat keeps its position in its range, scaled to the new range (a damage of 20 in a range of 10 to 20 becomes 26 in a range of 13 to 26). A tier XV weapon cannot be merged.
- **loot-008** Weapons in the world shall hover slightly above the ground and feel only basic gravity.
- **loot-009** E shall pick up a weapon within reach. With an empty slot, the weapon fills the first empty slot. With both slots full, the weapon swaps places with the held weapon, which drops into the world. If the player already holds a weapon of the same archetype, the pickup shall replace that weapon wherever it is held, so two of one archetype are impossible. A weapon chosen from a chest appears on the ground in front of the chest and is picked up the same way (loot-015).
- **loot-010** Hovering the mouse over a weapon, in the inventory, in the world, or on the chest screen, shall show a box above it with the name and roman numeral, the rarity color, all stats, and the flavor text. For a weapon in the world, each stat shall also show a comparison with the held weapon, for example damage 7 (+3). For a weapon on the chest screen, each stat shall show a comparison with each of the two weapons in the inventory. The box appears only on mouse hover.
- **loot-011** (After version 0.2.0.) Each weapon shall have flavor text that differs on every rarity, so the five pieces tell one story.
- **loot-012** Chests shall drop loot (weapons only). Normal chests and special chests differ in rarity and loot level, and special chests shall drop better loot. Both kinds shall come in an unlocked variant, which opens with the interact key, and a locked variant, which a lever or trigger must unlock before it opens with the interact key. Opening a chest shall open the chest screen (see loot-015). Special chests are placed in special chest areas, which are good loot areas (such as behind Gray walls, see level-009).
- **loot-013** Levels shall be grouped into bands, one band per droppable rarity, and a level shall drop only the tiers of its band. Normal chests shall never drop legendary weapons (tiers XIII to XV). For example, with eight levels, two per band: levels 1 and 2 drop tiers I to III (common only), levels 3 and 4 drop IV to VI (uncommon only), levels 5 and 6 drop VII to IX (rare only), and levels 7 and 8 drop X to XII (epic only). Special chests shall drop one rarity higher than normal chests (uncommon in levels 1 and 2, rare in levels 3 and 4, epic in levels 5 and 6, and legendary in levels 7 and 8). Which of the three tiers within a rarity drops shall be random, with higher tiers rarer, and the weights are data. In version 0.2.0 the level's rarity is set in level data.
- **loot-014** Special chest areas shall be more likely to spawn near the middle and the end of the level than near the start. Loot shall not otherwise get better within a level.
- **loot-015** Opening a chest shall open the chest screen, which offers three weapons, each rolled by the chest's rarity and level rules (loot-013). The chest screen shall show the offered weapons next to the player's inventory, so each one can be read and compared with both held weapons (loot-010). The player picks one weapon, which then appears on the ground in front of the chest, and the other two are lost. The player can leave the chest screen without choosing, with the same key that opens and closes the inventory, and the chest stays closed with the same three weapons. The chest screen is a menu that freezes the game (interface-006).

### Health and the reposition moment

- **health-001** The player shall have a maximum of 7 health points, set in data. A run starts at full health.
- **health-002** Every instance of damage to the player shall remove exactly 1 health point, no matter the source: an enemy, an attack, a trap, or crushing.
- **health-003** Damage shall apply only when its source is touchable under the dimension rule (shifting-003 and shifting-010) and the player is not immune.
- **health-004** When the player takes damage and still has health left, the game shall run the reposition moment in three stages: freeze, choice, and resume.
- **health-005** Freeze: the player character shall flash a bright color and a single sharp damage sound shall play. The flash look lasts through the freeze; the sound does not. The whole game (physics, enemy behavior, traps, platforms, projectiles) shall slow to a complete stop over a short ramp, not instantly, and the sound shall slow down with a reverb effect.
- **health-006** Choice: while frozen, a line of dots shall run from the player to a circle that follows the mouse, drawn as interface only. Both shall use the alternating white and black pattern of the Gray outline, so they can be seen on any background and next to either class color. When the spot under the mouse is invalid, an X shall appear inside the circle, drawn in the same pattern.
- **health-007** A spot shall be valid only if it is within a maximum distance of the player (data) and is not inside anything solid under the current background. Line of sight is not required: teleporting through walls is allowed, and where that would skip progress, the level shall use walls too thick to cross.
- **health-008** Clicking a valid spot shall teleport the player there. Clicking an invalid spot shall play a distinct invalid sound and shall not teleport.
- **health-009** Resume: after the teleport, game time and sound shall return from a full stop to normal speed over a short ramp, not instantly.
- **health-010** After the resume, the player shall blink for about 1 second (data) and cannot be damaged during that time.
- **health-011** If damage reduces health to zero, the run shall end and no reposition shall happen.
- **health-012** Being deeply squeezed, crushed, or clipped inside solid world objects while not immune shall count as damage and start the same reposition moment, which is the player's way out. The depth that separates a deep overlap from a shallow one is data (see health-016).
- **health-013** All changes to health shall go through one function, so recovery and any future change can be added through data.
- **health-014** The simulation shall have a time scale (1 is normal, 0 is stopped), so the freeze and the resume are properties of the simulation and can be reproduced in tests. The simulation shall also keep an unscaled clock that advances every fixed step, used by the shift cooldown. A menu freeze (see interface-006) is different: it stops the simulation from stepping at all, so neither the time scale nor the unscaled clock advances.
- **health-015** (Removed. There is deliberately no softlock guard; see decision-023. The number is not reused.)
- **health-016** A shallow overlap with solid world objects (a depth under the data value) shall move the player to the nearest empty space, with no damage and no reposition. This is mercy for a slight clip.
- **health-017** The player may press the shift button during the freeze and choice stages. The refusal rule (shifting-007) does not apply during the reposition moment. A chosen spot is judged against the background at the moment of the click. Once the teleport ends the reposition moment, the refusal rule applies again.
- **health-018** The player shall recover 1 health point for every X enemy kills, where X is the level's quota divided by 10, rounded up (the divisor is data). Health never exceeds the maximum. Kills made by traps count. Kills made at full health still count toward the next recovery; a recovery that would happen at full health is lost. A boss stage has no quota, so recovery there is part of the boss fight design (to be decided).

### Progression and balance

- **progression-001** There shall be no progression between runs: no persistent upgrades, unlocks, or currencies. Every run starts equal, and a first-time player shall be able to win through skill alone.
- **progression-002** Power may grow within a run (found weapons of higher tier, enemy statistics rising over time), but difficulty shall come mainly from skill demands: route and trap design, enemy density, and tighter timing.
- **progression-003** Numbers shall stay readable. Across a whole run, the time the player needs to kill an ordinary enemy and the time an ordinary enemy needs to kill the player shall each stay inside bands set in data, so the player is never one-shotting everything or being one-shot. An automated balance test shall check the bands against the spawn and scaling curves, including weapon tier scaling from tier I to tier XV.
- **progression-004** Every level shall start from its own predetermined base enemy strength and shall not continue from the previous level. Difficulty comes mainly from enemy types, abilities, attacks, elites, movement speed, the level's parkour and traps, and higher base health. The quota and the wave size shall rise only modestly.

### Identity and readability

- **identity-001** The player shall carry at most two weapons and no stacking passive items in the first version. Every power the player has shall be triggered by a deliberate action or be clearly visible on screen.
- **identity-002** Every weapon, enemy type, and trap type shall be recognizable at a glance by its silhouette, motion, and effect, and a first-time player shall be able to say what each does after meeting it once.
- **identity-003** When special additions are added later, each shall change how the weapon is used and not only a number, and the number of additions a weapon can carry shall stay small enough to remember.
- **identity-004** Player-owned things (the player, weapons, projectiles, and chests) shall be drawn in the color of the player's class, blue for the Ranger and red for Melee, outside the Black, White, and Gray dimensions, so they are always visible.

### The swarm

- **swarm-001** All attacks shall be aimed and triggered by the player; there shall be no automatic attacking.
- **swarm-002** Mass kills shall come from skillful multi-target actions (piercing shots, spreads, area blasts, trap drops, and shift timing); damage numbers shall stay inside the readable bands of progression-003.
- **swarm-003** The horde shall be large and unending enough to feel like a swarm, and ordinary enemies shall be simple to read, so the crowd and the terrain, not hidden complexity, are the challenge.
- **swarm-004** The rhythm of a run shall alternate between a sustained process of surviving, maneuvering, and killing steadily, and big moments of damage that the player sets up (long-cooldown abilities, trap drops, and shift timing).

### Enemies and horde

- **enemy-001** A horde shall spawn at fixed intervals at the start of the level after a head start.
- **enemy-002** Later spawns shall have more health, more damage, and a higher chance of being elite. Bugs already alive do not get stronger; only later spawns are stronger.
- **enemy-003** The cap on living enemies shall be the level's quota plus a flat amount set in data (50 to 100 as the starting range, tuned by testing), so a large horde is still visible when the quota is reached.
- **enemy-004** Spawn tables shall be configurable per color.
- **enemy-005** Flyers shall follow the player using a flow field (a map that tells each position which direction leads to the target).
- **enemy-006** Crawlers shall move along surfaces toward the door using a shared flow field, then loop back to the start.
- **enemy-007** A crawler or flyer that has not reached its next flow-field point within a time set in data shall enter a correcting state: it ignores all physics collisions and the dimension rule, flies straight to its next point (the nearest cell that has a flow-field direction, if there is none at its position), does not attack or perform other behavior, does not hurt the player by touch, still takes damage, and resumes normal behavior on arrival. A bug whose surface disappears, for example when a breakable block breaks under it, enters the correcting state immediately, without waiting for that time. A bug that is crushed takes crush damage first (trap-009) and then enters the correcting state. While it is correcting, it is immune to crush damage, since it passes through walls.
- **enemy-008** Some enemies shall have long-reach melee or ranged attacks resolved by a reach check each behavior update, separate from movement.
- **enemy-009** (After version 0.2.0.) Gray bugs shall be special bugs or elites. Walking on every surface would often leave them stuck, so they are likely to fly and ignore walls and physics.
- **enemy-010** An enemy shall be defined as data that selects a movement behavior and an attack behavior.
- **enemy-011** Bugs shall not collide with each other.
- **enemy-012** The speed of a bug shall be randomized within a range set in data for its type, and may change over time, so bugs following the same flow field do not move in step.
- **enemy-013** (After version 0.2.0.) Elite bugs shall include locusts, mosquitoes, and wasps. The wasp has a drill, follows the player's height, stays on the left or right edge of the screen, dashes from one side to the other, ignores physics completely, still follows the dimension rule for hitting and being hit, and acts as a stage hazard that must be killed. The locust and mosquito behavior is to be decided.

### Level and world

- **level-001** A section shall be a data object containing tiles with dimensions, one entrance, one exit, spawn slots, and a difficulty value from 1 to 10. A level shall be data containing an ordered list of placed sections, the start, the door, the quota, and the level's settings (enemy base strength, loot band, and section weights).
- **level-002** A loader shall convert Tiled files into section data and shall reject invalid sections and levels with clear messages.
- **level-003** Meeting the quota shall unlock the door, and reaching it shall win the stage.
- **level-004** Player death shall end the run and offer a restart.
- **level-005** (Removed. A fixed number of shift gates was dropped as a requirement. The number is not reused.)
- **level-006** All world changes shall pass through one function (world.mutate) that updates tiles and the surface graph and increases a version number.
- **level-007** Flow-field rebuilds after a version change shall be combined and spread over several frames.
- **level-008** A level shall be a sequence of sections, each its own puzzle (parkour, a shift gate, or both), so that the player is never doing the same thing in the same place and moving forward introduces new challenges with real consequences.
- **level-009** A level may place secret areas, special items, or strong extra loot behind Gray walls that can only be passed on the Gray background.
- **level-010** (After version 0.2.0.) The game shall end with a final boss, the Queen. Killing her wins the game.
- **level-011** Every section shall be a square of a standard size, with a few exceptions that are whole multiples of that size glued together. The standard size is to be decided.
- **level-012** Every section shall have a single entrance and a single exit, and a level is assembled by joining the exit of one section to the entrance of the next.
- **level-013** A section shall define spawn slots: authored locations where a trap, chest, lever, or other thing may appear. Each slot lists what may spawn there and the chance that it does, and may belong to a group that limits how many members exist at once (no limit for common things such as chests, and one at a time where only one should exist, such as the lever that opens a gate). Wherever a thing spawns, it shall be reachable, usable, and meaningful.
- **level-014** Each level shall use only a subset of all sections, with a weight for each section set in level data, so later levels favor harder sections.
- **level-015** (After version 0.2.0, unless a large library of sections exists sooner.) A level generator shall assemble a level from its allowed sections using the seeded random number generator, so the same seed gives the same level.
- **level-016** Every section shall be completable on its own by shifting between the Black and White backgrounds, with its slots on or off, and the reachability checker shall check each section.
- **level-017** A spawn slot shall add danger or reward and shall never remove the only path through a section, unless the thing is the section's intended gate.

### Traps, triggers, and platforms

- **trap-001** Spikes shall be non-physical damage zones: touching them damages the player, they have no collision, and spikes that are intangible do nothing.
- **trap-002** Saws shall move along a scripted path and damage on contact.
- **trap-003** A boulder on a rope shall fall when the rope is hit by a player projectile, a weapon slash, ability damage, an enemy projectile or attack, another trap (such as an arrow trap), or a lever or other trigger, damaging anything it lands on (including the player and enemies).
- **trap-004** Moving platforms shall have entirely scripted movement defined as data (path points, speed, pauses) and a start condition: automatic, on a timer, on an event, by a tripwire, or by a lever.
- **trap-005** Traps shall affect enemies as well as the player.
- **trap-006** Tripwires and laser tripwires shall trigger for the player and for enemies. Laser tripwires shall additionally detect physics objects such as rolling or falling boulders, but not projectiles from either side.
- **trap-007** Breakable blocks shall break when triggered by a lever or trap, by a weapon attack or player projectile, or by the player stepping on them, as set in data for each block, and a broken block shall stay broken.
- **trap-008** A weighted platform shall be a special tile or platform to which every normal rule applies, separate from the fully scripted platforms of trap-004. When the player stands on it, it shall drop quickly and stop when it hits another solid tile (tiles only, not traps or bugs). When the player is not on it, it shall rise at the same speed to its original position, and if something is in the way on its way up, it shall stop there and keep rising once the way is clear. Its direction depends only on whether the player is on it. Only the player activates it. It has a dimension, so a shift that makes it intangible removes the player from it, and the crush rule applies. Crawlers use it as a surface only while it is at rest, and a crawler on it shall enter the correcting state (enemy-007) as soon as it starts moving. A bug that is crushed by it takes crush damage first (trap-009).
- **trap-009** Damage that traps and crushing deal to bugs shall be a percentage of the bug's maximum health, set in data for each trap and each crushing source. Damage to the player stays exactly 1 (health-002). A bug that is crushed in any way (by a weighted platform, a moving platform, or a trap) shall take this damage before it enters the correcting state (enemy-007). This rule does not apply to elites and bosses.

### Interaction

- **interaction-001** The interact key (default E) shall operate levers and buttons within reach, and shall pick up weapons (loot-009). It shall also open chests that are unlocked (loot-012 and loot-015).
- **interaction-002** Some switches shall be attack-activated: they trigger when hit by a weapon attack or a player projectile. Each switch's mode (interact or attack) is data.
- **interaction-003** Triggers shall connect to their targets by identifiers set in level data. Identifiers are local to a section, so the same section can appear twice in one level.
- **interaction-004** A trigger shall be able to belong to any dimension and target objects of any dimension, so something in one color can be unlocked only by a trigger reachable in another color.
- **interaction-005** When several interactable things are within reach, the closest one wins. (Revisit later: "mouse hover wins".)

### Interface and settings

- **interface-001** An on-screen display shall show quota progress, the weapon slots and the ability as icons, the shift icon, and the current background. Each ability and the shift icon shall show a cooldown fill that grows from a sliver to a full circle or square. Weapons shall be hoverable in the inventory (loot-010).
- **interface-002** A settings menu shall let the player rebind every action.
- **interface-003** Key bindings shall persist in the browser's local storage and be restorable to defaults.
- **interface-004** Menus shall be operable with the keyboard, including the inventory and forge screens.
- **interface-005** Default bindings shall come from a data file.
- **interface-006** Pausing, opening the inventory screen, opening the chest screen (loot-015), and (after version 0.2.0) opening the forge screen shall freeze the game, so the player can take their time reading weapons and stats. The pause key is Escape, and the pause menu holds the settings. The freeze shall stop the simulation from stepping at all, and it applies only in single-player: a menu never freezes a multiplayer game.
- **interface-007** The inventory screen shall open with its own key (default R) and shall show the player's weapons and their stats. The same key shall close the inventory screen, and shall also leave the chest screen (loot-015).

## Quality requirements

- **quality-001** Performance: 60 frames per second on a mid-range laptop with up to N enemies and M moving physics bodies on screen. N and M are set after the first benchmark.
- **quality-002** Headless simulation: the simulation package shall have no browser or Phaser imports and shall run in Node.
- **quality-003** Determinism: the simulation shall use a fixed time step and a seeded random number generator; the same seed and inputs shall produce the same state. The same seed gives the same level.
- **quality-004** (Removed. The 8-shards-per-entity limit is outdated; the render budget will be set from the benchmark. The number is not reused.)
- **quality-005** Pathfinding budget: flow-field rebuilds at most about 5 per second, within about 1 to 2 milliseconds per frame.
- **quality-006** Memory discipline: no per-entity allocations in per-frame loops, verified by profiling.
- **quality-007** Browser support: current Chrome and Firefox.
- **quality-008** Accessibility: keyboard-operable menus, visible focus, and a recorded Lighthouse accessibility result. This covers menus only; gameplay is mouse-focused.
- **quality-009** Quality gates: continuous integration shall block merges to the main branch on type errors, failing tests, or a failing build.
- **quality-010** Load time: the build shall become interactive quickly on a typical connection (target measured).
- **quality-011** Extensibility: adding a weapon, enemy, trap, trigger, or platform movement shall require adding a data entry, plus a behavior class only if the behavior is new, with no edits to the core simulation loop. A test shall register a fake definition to prove this.
- **quality-012** Data validation: every data file shall be validated at load with clear error messages that name the file and field.
