# Rulebook

## Controls (defaults; every binding can be changed in the settings menu)

| Action | Default input | Notes |
|---|---|---|
| Move left, move right | A, D | Arrow keys are not used |
| Jump | W or Space (synonyms) | Tap for a short jump, hold for a higher one; also climbs up while on a ladder |
| Crouch | S | On the ground: lower hitbox, slower walking. In the air: gravity temporarily increases while the key is held (fast fall). On a ladder: climb down |
| Aim | Mouse | |
| Use weapon | Left click | |
| Use ability | Right click | The browser menu is suppressed |
| Swap weapon | Q | Switches which of your two weapons you hold |
| Interact | E | Levers and buttons set to interact mode; picks up weapons |
| Shift the background | Left Shift | 0.4 second cooldown; also usable during the reposition moment |
| Pause | Escape | Pauses the game. The pause menu holds the settings |
| Inventory | R | Opens the inventory screen and pauses the game |

## Core loop

1. Spawn at the start of a very large level with a head start.
2. An endless horde begins spawning at the start area at fixed intervals, getting stronger over time.
3. Traverse a mostly single-path route of platforming and traps, shifting the background to get past color-specific obstacles, finding and swapping weapons, while killing enough bugs to meet the quota.
4. Reach the locked door at the dead end with the quota met to clear the stage.
5. Or die from the swarm.

Speed matters because of the horde, but so does fighting because of the quota. Abilities double as movement. The rhythm of a run is a sustained process of surviving and maneuvering while killing steadily, interwoven with big moments of damage from abilities, traps, and well-timed shifts.

Difficulty comes from skill, not numbers. Every level starts from its own base enemy strength and does not continue from the previous level. Within a level, later spawns are stronger than earlier ones, and bugs already alive do not get stronger. Statistics stay readable (see progression-003). The challenge comes mainly from enemy types, abilities, and attacks (including elites), movement speed, the parkour and traps of each section, higher base health, and tighter timing. The quota and the wave size rise only modestly. Nothing carries over between runs, so every run can be won by skill alone.

## The dimension rule

**World side:** things interact with each other by dimension, whatever the background is. Black touches Black and Gray; White touches White and Gray; Gray touches everything. A black bug walks on black platforms even when you cannot touch either. Hidden things keep simulating: they keep moving, attacking, and cycling. They just have no collision, damage, or activation with the player side.

**Shifting:** one button, a 0.4 second cooldown counted in real time, switching between Black and White only.

| Dimension of the thing | Black background | White background | Gray background (rare) |
|---|---|---|---|
| Black | Intangible to the player | Touchable | Touchable |
| White | Touchable | Intangible to the player | Touchable |
| Gray | Touchable | Touchable | Intangible to the player |

**The Gray background:** a rare, secret, situational third state. It is never reached with the shift button. Level data decides how it is reached (special switches, timed intervals, jumps or abilities, and others) and how the player leaves it. Gray is a merger of the two colors: on a Gray background, Black and White things are both touchable at the same time, and Gray things become intangible. This makes secrets possible behind Gray walls, strong extra loot behind walls that look insurmountable, and triggers in one color that can unlock something in another.

**Overlap becomes Gray:** where Black and White world geometry (platforms, walls, solid objects) overlap, the overlapping area mixes into Gray. This applies to world geometry only for now; bugs and some traps are to be decided.

**Blocked shifts:** if a shift would leave the player inside something solid, the shift does not happen, but the cooldown still starts, so mistiming or spamming is punished and the player can never end up stuck. The shift icon greys out in advance whenever a shift would be refused, so the player can see it coming. During the reposition moment the refusal rule does not apply (see the section Health and the reposition moment).

**Losing footing:** if a shift makes the thing you stand on, climb, or slide on intangible, you keep your momentum and fall as if you had walked off a ledge. A shift gives no coyote time (ordinary ledges still do). The double jump stays available, and so does a wall jump if a wall is still touchable. Climbing and wall sliding end.

**Forced shifting:** every level has shift gates (obstacles that exist in only one color), and staying on one background lets hidden enemies accumulate and arrive together at the next shift. Enemy types and stats may differ by color.

**The player is not a dimension:** Gray is in both layers at the same time, so Black and White things can both interact with it. The player and everything the player owns work differently: they are effectively one color that is always the opposite of the background and changes on every shift, which is the limit of what they can touch. A fourth dimension that worked this way would be the same as Gray from the player's side and would cause softlocks and harder pathfinding, so it is not added (decision-033).

**Floors:** a floor is any solid thing the player can currently touch. Spikes are not floors.

**Weapon affinity (backlog):** some weapons deal extra damage to one color or are stronger on one background.

## Projectiles

- Player projectiles share the player's color (blue for the Ranger) and exist in all dimensions: visible on every background.
- They can only affect things the player could touch right now, so a shift changes what a projectile can hit.
- Shifting trick: a projectile heading into a wall that exists in only one color passes through it if you shift while it crosses and shift back.
- Risk: if the projectile is overlapping something that becomes solid after a shift, it is destroyed.
- Enemy projectiles take the dimension of the enemy that fired them and follow the same rule against the player.

## Movement details

All numbers below are tunable data, not constants.

- **Ground:** run, crouch (lower hitbox, slower), jump.
- **Air:** one double jump and one wall jump per time in the air, both refreshed only by landing on a floor. They are separate allowances, so you can use one of each before landing.
- **Variable jump:** tap for a short hop, hold for a higher jump. The double jump and the wall jump are variable in the same way.
- **Wall slide:** touch a wall and hold toward it; you slide down slowly. Pressing jump during a wall slide performs the wall jump if you still have it.
- **Fast fall:** crouching (S) in the air temporarily increases gravity for as long as the key is held.
- **Climbing:** holding jump while overlapping a ladder enters climbing mode. W goes up, S goes down, jump leaves the ladder. Left and right do nothing on ladders and add acceleration on swingable things such as ropes (later).
- **Grace periods:** coyote time and jump buffering make jumps feel fair. A shift that removes your footing gives no coyote time.
- **Input rules:** with S in different situations, climbing takes priority, then air fast fall, then ground crouch.

## Classes and archetypes

In version 0.2.0 only the Ranger class exists, with the Scatter and Barrage archetypes. The Melee class and the other Ranger archetypes are planned after it.

Two classes with no weapon overlap. Each class has five archetypes, and every weapon is exactly one archetype. The player holds at most two weapons, never two of the same archetype. Left click uses the weapon and right click uses the archetype ability. Every archetype below lists its attack (left click) and its ability (right click) separately. Melee is short-range, sweeping, higher damage, higher risk, and red. Ranger is projectile-based, lower risk and reward, and blue.

**Melee**

- **Pierce** (spear, lance, trident)
  - **Attack:** a ranged stab. Hold left click to charge a throw; thrown spears can stick, explode, or act as a short-lived wall platform.
  - **Ability:** a horizontal dash.
- **Bludgeon** (hammer, mace)
  - **Attack:** a slow swing with an area explosion. High damage, and a small chance to stun for a short time. A stunned enemy halts all behavior and movement for the duration of the stun.
  - **Ability:** a diving slam. Used in the air, it puts you into a dive with increased gravity (fall speed is one of the ability's stats) until you hit an enemy or a platform, and the impact launches you upward. The damage and the launch scale with the height you fell from. It works like a fast fall and replaces it while it lasts, so the two cannot be combined. Used on the ground, it is a short slam that launches you upward a little.
- **Sever** (axe, scythe)
  - **Attack:** wide slashes. May add bleed or execute thresholds.
  - **Ability:** hook onto a wall and launch up.
- **Slash** (sword, cleaver)
  - **Attack:** an area slash.
  - **Ability:** a directional parry with a knockback-opposite jump.
- **Chain** (wrecking ball, kusarigama, anchor)
  - **Attack:** click for a short swing or overhead. Hold to charge a spinning, discus-style throw that goes farther, faster, and harder.
  - **Ability:** spin the chain, launch the end at a tile, latch on, and the chain and weapon head follow. Climb it, swing on it with left and right, and keep your momentum when attaching. Other weapons work while on the chain, but the Chain weapon itself cannot be used while the chain is placed, and only one placed chain exists at a time. It anchors to tiles only. If the anchor tile becomes intangible, the chain detaches, falls, and breaks on first impact, damaging an enemy it hits. It breaks if it ends up inside geometry after a shift, or when the player casts again. The cooldown starts only when it breaks, and the weapon is usable again once broken.

**Ranger**

- **Tension** (bow, crossbow)
  - **Attack:** slow projectiles with drop.
  - **Ability:** charge and launch yourself like a slingshot, usable mid-air. Momentum is kept but decays quickly; the decay is a per-weapon stat called abilityAirDrag, from 0 (none) to instant stop.
- **Precision** (sniper rifle, railgun)
  - **Attack:** fast, single, piercing, high damage.
  - **Ability:** a grapple that can latch onto anything including moving objects and can be cancelled to keep momentum.
- **Scatter** (shotgun)
  - **Attack:** a spread of bullets.
  - **Ability:** an omnidirectional recoil dash.
- **Explosive** (rocket launcher, grenade launcher)
  - **Attack:** arcing projectiles that explode on impact.
  - **Ability:** place mines that trigger on impact, on proximity, or on a timer; several mines can exist at once. A mine's explosion damages enemies and also pushes the player away, with no damage to the player. The push is stronger the closer the player is to the mine, between a minimum and a maximum. Timing a mine well, or triggering it cleverly, launches you, which is why it is a movement ability.
- **Barrage** (submachine gun, minigun)
  - **Attack:** fast fire.
  - **Ability:** a long cooldown, short duration boost to jump height or speed; a special weapon may remove air drag entirely.

## Weapon tiers, rarity, and rolled stats

Weapons are unbreakable (durability was removed; see decision-028). Instead, weapons differ by tier.

- **Tiers and rarity.** There are 15 tiers, three per rarity: common I to III, uncommon IV to VI, rare VII to IX, epic X to XII, and legendary XIII to XV. The tier is a roman numeral after the weapon's name, so Guilt IV is tier 4 Guilt, which is uncommon. The rarity is the background color of the weapon's text box (gold for legendary). Tiers are numbers that fall into rarity brackets.
- **Rolled stats.** Every stat is rolled within a range specific to that weapon, so two copies of one weapon can differ. Different weapons have different ranges and distributions, even within one archetype: the four Slash weapons each have their own.
- **Scaling.** Each tier above the first multiplies both the minimum and the maximum of a range by a factor. The base factor is 1.3, and a stat such as spread angle or cooldown can have its own factor in data. Enemy statistics scale to keep up. Over 14 steps, a factor of 1.3 grows a stat about 39 times, so the balance test (progression-003) checks the curve.
- **Special additions (after version 0.2.0).** Uncommon, rare, epic, and legendary each unlock one addition. Example plan: uncommon unlocks a damage over time effect; rare unlocks an ability variant or extra effect; epic unlocks a synergy between the two, such as ability cooldown reduction or damage that grows with the number of enemies affected by the effect (even if another weapon applied it); legendary buffs the effect itself by the number affected and grants speed that scales with that number. Not all ability variations are available from the start; rarity unlocks them, and tier also widens the ranges. Common weapons have base stats only, with no special addition.
- **Merging at forges (after version 0.2.0).** At forge areas (not in the inventory), two weapons of the same tier merge into one weapon one tier higher than both. Each forge can be used once. Which of the two survives is random. Stats are not rerolled: each keeps its position in its range, scaled to the new range. Example: a damage of 20 in a range of 10 to 20 becomes 26 in a range of 13 to 26. Crossing into a new rarity unlocks that rarity's addition. A tier XV weapon cannot be merged. Since the player never holds two of one archetype, the two merged weapons are always different weapons.
- **Flavor text (after version 0.2.0).** Each weapon has flavor text that differs on every rarity, so the five pieces tell one story.
- **Where weapons come from.** Weapons come from chests. There are normal chests and special chests, and the difference is rarity and loot level. Both kinds also come in a locked variant. An unlocked chest opens with the interact key. A locked chest, normal or special, opens only when a lever or trigger fires. Special chests sit in special chest areas, which are good loot areas (for example, behind Gray walls). Levels are grouped into bands, one band per droppable rarity, and a level drops only its band's tiers. For example, with eight levels, two per band: levels 1 and 2 drop common (tiers I to III), levels 3 and 4 uncommon, levels 5 and 6 rare, and levels 7 and 8 epic. Special chests drop one rarity higher, so legendary comes from special chests in the top band and from merging, and normal chests never drop legendary. Which of the three tiers within a rarity drops is random, with higher tiers rarer, and the weights are data. In version 0.2.0 the level's rarity is set in level data. Loot does not get better within a level, but special chest areas are more likely to spawn near the middle and the end of the level.

## Backlog: further weapon ideas

Elemental and status synergies (fire, poison, bleed, stun); weapons that set up and weapons that capitalize; enemy resistances; homing and multishot variants; charged weapons; a redirecting spear or reversible projectile; damage that grows with distance traveled or redirects. The simulation time scale also opens design space for later, such as slow-motion abilities, brief pauses on big hits, and slow-motion payoffs; none is planned yet.

## Enemies

All enemies are bugs: Black, White, or Gray. They scale harder with spawn time and keep up with weapon tier scaling.

- **Flyer:** follows the player, ignores surfaces.
- **Crawler:** walks walls, floors, and ceilings along the shared route to the door, loops back to the start after arriving, and enters a correcting state when stuck.
- **Stuck bugs (crawlers and flyers):** if a bug has not reached its next point in the flow field within a set time (it is softlocked, stranded on an island, squished by a press, or trapped), it enters a correcting state. A bug whose surface disappears, for example when a breakable block breaks under it, enters the correcting state at once. It ignores all physics collisions and the dimension rule, flies straight through walls to its next point (the nearest cell with a flow-field direction if it has none), and does no attacks or other behavior. It still takes damage, from damage over time, traps it passes through, and projectiles. Then it resumes normal behavior.
- **Long-reach variants:** deceptively long melee or ranged attacks aimed at the player, subject to the dimension rule.
- **Gray bugs (after version 0.2.0):** special bugs or elites that exist in both dimensions. Many fly and/or ignore walls and physics.
- **Flow fields:** crawlers use two: one for Black plus Gray surfaces and one for White plus Gray surfaces.
- **Bug movement:** bugs do not collide with each other, so they can overlap and pass one another. The speed of each bug is randomized within a range for its type, and may change over time, so a crowd does not move in step.
- **Horde size:** the number of living bugs is capped at the level's quota plus a flat amount (50 to 100 as a starting range, tuned by testing), so a large horde is still visible when the quota is reached.
- **Elites (after version 0.2.0):** locusts, mosquitoes, and wasps (the locust and mosquito behavior is to be decided). The wasp has a drill, follows the player's height, stays on the left or right edge of the screen, and dashes from one side of the screen to the other. It ignores physics completely and acts like a stage hazard that must be killed. It still follows the dimension rule for hitting and being hit.
- **Later:** tunneling worms, teleporting assassin bugs such as the mantis, and bosses. The game ends with the final boss, the Queen (after version 0.2.0). A boss stage has a horde, but killing it is not the win condition. There is no quota, and the door opens when the boss dies. Whether the horde can be killed or is immortal is to be decided, and it may differ for the Queen. Designs being considered for the Queen: (1) an immortal horde, while the player must defeat the Queen; (2) the Queen is invincible until a number of enemies are killed, then a brief damage phase begins, and the cycle repeats (the player heals by 1 when the damage phase starts); (3) most likely, the horde is immortal, and the Queen spawns her own special bugs that, when killed, open the damage phase and temporarily bring down her immortality (again, the player heals 1 each time the barrier comes down, and this is a cycle). Other ways of bringing down the barrier, shield, or shell are to be decided.

## Traps, triggers, and platforms

- **Spikes:** non-physical. Touching them damages the player, they never block movement, and intangible spikes do nothing.
- **Saws:** move along scripted paths and damage on contact.
- **Rope and boulder:** the boulder falls when the rope is hit. Player projectiles, weapon slashes, ability damage, enemy projectiles and attacks, other traps (such as arrow traps), and some levers or other triggers can all make it fall. It hurts enemies or the player, so it is both a trap and a tool.
- **Moving platforms:** movement is scripted entirely in data (path points, speed, pauses). Each starts automatically, on a timer, on an event, by a tripwire, or by a lever.
- **Tripwires and lasers:** trigger for the player and for enemies. Lasers also detect physics objects such as rolling or falling boulders, but not projectiles.
- **Breakable blocks:** special tiles that break when a lever or trap triggers them (most often), when a weapon attack or projectile hits them, or when the player steps on them. Each block's trigger is data, and a broken block stays broken.
- **Weighted platforms:** special tiles or platforms to which every normal rule applies. When the player stands on one, it drops quickly and stops when it hits another solid tile (tiles only, not traps or bugs). When the player is not on it, it rises at the same speed back to its original position, and stops under anything solid above it until that is gone. Its direction depends only on whether the player is on it: if the player steps off before the bottom it reverses upward, and if the player steps back on before it reaches the top it reverses downward. Only the player triggers it. It has a dimension, so a shift that makes it intangible removes the player from it, and the crush rule applies. Crawlers use it as a surface only while it is at rest.
- **Levers and buttons:** each is in interact mode (press E) or attack mode (hit it with a weapon or projectile). Triggers connect to targets by identifiers in level data. Locked chests open only when a lever or trigger fires.

Traps hurt enemies as well as the player, and follow the dimension rule. Kills made by traps count toward health recovery.

## Art and presentation

Flat two-tone simple polygons, jagged and angular, with no gradients or textures. Inspirations: LIMBO, the gun in CONTROL, and the Valorant singularity collection. Weapons, enemies, and traps are made of disconnected floating shards. The art is made by hand in an editor and exported as a single image with a transparent background. Weapons are static single sprites, and animation that changes how a sprite looks is planned after version 0.2.0; rotating, flipping, scaling, and moving a sprite by code are allowed. Collision uses one simple hitbox per entity. One game unit is 32 pixels, and art is drawn at 64 pixels per unit and shown at half size. The final boss, the Queen, is a super abstract amalgam.

Dotted outlines are always on: white dots for Black things, black dots for White things, and alternating black and white dots for Gray things. The outline follows the outer edge of a connected structure of one dimension, so world tiles are autotiled by their neighbors of the same dimension, and dots line up across tile borders. Outlines for enemies and traps are drawn into the art, in a version for each color the thing exists in.

Player-owned things (the player, weapons, projectiles, chests) sit outside the black and white rule in color: blue for the Ranger, red for Melee. They share one color per class because they operate on the same plane. The colors are easy to tell apart from each other and from black, white, and gray, so player-owned things stand out in a chaotic scene, each class has its own identity, and two players in a future multiplayer mode can be told apart. They have no dotted outline, since they never become intangible. The text boxes of weapons use the rarity color as their background.

Later: impact frames and cutscenes.

## Health and the reposition moment

**Health.** The player has 7 health points. Every instance of damage takes exactly 1, whatever caused it. There is no big damage and no small damage, which keeps the numbers readable and lets a good player count their mistakes. Maximum health never changes.

**Recovery.** The player recovers 1 health point for every X enemy kills, where X is the level's quota divided by 10, rounded up. A quota of 100 gives X = 10, and a quota of 25 gives X = 3. Health never goes above 7. Kills made by traps count. Kills made at full health still count toward the next recovery, and a recovery that would happen at full health is lost. The idea is that the player is not strong enough to stay in one place and farm: the horde and rogue projectiles overwhelm anyone who stands still, and the large level exists to give kiting space. A boss stage has no quota, so recovery there is part of the boss fight design (the player heals 1 each time the Queen's barrier comes down) and is to be decided.

**Why the reposition exists.** Without it, getting caught or falling once is an instant death, which is neither fair nor fun, and the game becomes all or nothing. With it, a mistake is costly but not fatal: it costs a point, and the player gets a moment to recover with a clever decision.

**The reposition moment.** When the player takes damage and has health left, three things happen:

1. **Freeze.** The character flashes a bright color and a single sharp damage sound plays. The flash look lingers through the freeze; the sound does not. The whole game slows down to a complete stop, not instantly, with a slowdown and reverb effect on the sound. Physics, enemy behavior, traps, platforms, and projectiles all stop.
2. **Choice.** A line of dots runs from the character to a circle that follows the mouse. Both use the alternating white and black pattern of the Gray outline, so they show on any background and next to the red Melee character. The player chooses where to go next. A valid spot shows the plain circle. An invalid spot shows an X inside the circle, in the same pattern, and clicking it plays a distinct invalid sound. A valid spot is within a short distance and not inside anything solid under the current background. Teleporting through walls is allowed. Where that would skip progress, the level uses walls too thick to cross. Clicking a valid spot teleports the player there. The player may press the shift button during this stage to make a spot valid or to prepare the landing; the refusal rule does not apply here, and the cooldown counts in real time.
3. **Resume.** Time and sound gradually return from a full stop to normal speed, not all at once. The player then blinks for about 1 second, and no damage can happen during that time. The refusal rule applies again.

**Clipping and crushing.** Being squeezed between a moving platform, a trap, and solid world objects, or ending up clipped inside them, is handled in two tiers:

- **Shallow overlap** (a couple of pixels; the depth is data): the player is moved to the nearest empty space. No damage and no reposition. Slight clips are not punished.
- **Deep overlap**, while not immune: 1 damage and the same reposition moment. The player is punished for being squashed and is given a way out.

**Blocked shifts.** Shifts by the button are never allowed to trap the player (see the section The dimension rule), so clipping covers platforms, traps, and changes to the Gray background.

(Damage that takes health to zero ends the run immediately, with no reposition. There is no softlock guard; see decision-023.)

## Pickup, swap, hover box, and icons

- **Weapons in the world** hover slightly above the ground and feel only basic gravity.
- **Pickup:** press E while touching or close enough to a weapon. With an empty slot, it fills the first empty slot. With both slots full, you drop the weapon you are holding and pick up the new one in its place: the two switch places.
- **Same archetype:** if you already hold a weapon of the same archetype, the pickup replaces it, wherever it is held. (Considered for later: refuse the swap with a refusal sound and red text "cannot hold two of the same archetype".)
- **Closest wins:** when several interactable things are within reach, the closest one is used. (Considering "mouse hover wins" later.)
- **Hover box:** hover the mouse over a weapon, in your inventory or in the world, and a decorated text box appears above it with the name and roman numeral, the rarity color as background, all stats, and flavor text. For a weapon in the world, each stat shows a comparison with your held weapon (the one held out, not the one in the other slot): for example damage 7 (+3) when your held weapon does 4, or damage 2 (-2). The box appears only on mouse hover, because always-on boxes are visual clutter and get in the way.
- **Chests:** unlocked chests open with E. Locked chests, normal or special, open only when a lever or trigger fires.
- **Menus freeze the game:** pausing (Escape) and opening the inventory (R) stop the game completely, so you can take your time reading your weapons and stats. The forge screen (after version 0.2.0) does the same. A menu never freezes a multiplayer game.
- **Icons:** weapons and abilities show as icons on the display, hoverable in the inventory. Each ability and the shift icon has a cooldown fill that grows from a sliver to a full circle or square. The shift icon also greys out when a shift would be refused, in a look different from the cooldown fill.

## Levels, sections, and spawn slots

A level is built from sections, the way a model is built from premade bricks. Each section is made by hand in Tiled and contains all its colors (Black, White, and Gray) and every place where something may appear. What is random is which sections a level uses, in what order, and what appears in each section's slots.

- **Sections.** Each section is its own puzzle: parkour, a shift gate, or both. It has a single entrance and a single exit, and a difficulty value from 1 to 10. Sections are squares of a standard size (the size is to be decided), with a few exceptions that are whole multiples of that size glued together. A level is assembled by joining the exit of one section to the entrance of the next.
- **Which sections a level uses.** Each level uses only a subset of all sections, with a weight for each section set in the level's data. Later levels favor harder sections, so they become harder while still being a mix of familiar pieces.
- **Spawn slots.** A section lists authored locations where a trap, chest, lever, or other thing may appear. Each slot says what can spawn there and the chance that it does. Sometimes the thing appears and sometimes it does not, but wherever it does, it is reachable, usable, and meaningful. A slot can belong to a group that limits how many members exist at once: no limit, like chests, or only one at a time (there may be only one lever to open a gate, operate a platform, or open a locked chest). A slot adds danger or reward and never removes the only path through a section, unless the thing is the section's intended gate.
- **Guarantees.** Every section is completable on its own from both the Black and the White background, with its slots on or off, and the reachability checker checks each section. Identifiers for triggers are local to a section, so the same section can appear twice in one level.
- **Assembly.** At first, a level is joined by hand from a few sections. A generator that joins them at random, using the seed so the same seed gives the same level, comes after version 0.2.0, unless a large library of sections exists sooner.
