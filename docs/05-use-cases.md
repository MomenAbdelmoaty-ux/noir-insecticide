# Use cases

Each use case is a player scenario with a pass condition and the requirements it covers. Every use case is checked by at least one automated test or a written manual check. The requirement identifiers are defined in the software requirements document.

| Identifier | Use case | Pass condition | Requirements |
|---|---|---|---|
| usecase-001 | Traverse the level | The player runs, jumps (short hop and full jump), double jumps, crouches and fast falls, climbs ladders, slides down and jumps off walls, and reaches the door | movement-001 to movement-010 |
| usecase-002 | Shift the background | Shifting works only on the button; intangible things stop interacting; the cooldown holds | shifting-001 to shifting-006 |
| usecase-003 | Mistime a shift | The shift icon greys out when a shift would trap the player; if attempted, the shift is refused and still starts the cooldown | shifting-007, shifting-016 |
| usecase-004 | Phase a projectile through a wall | A projectile survives a shift pair through a one-color wall, and is destroyed if trapped inside | shifting-008, shifting-009 |
| usecase-005 | Use an ability to move | The Scatter dash and Barrage boost change player motion and are limited only by their cooldowns | combat-003, combat-004, combat-006, combat-009 |
| usecase-006 | Swap weapons | Q switches weapons; duplicate archetypes are rejected | combat-001 |
| usecase-007 | Survive the horde | Enemies spawn, scale, respect the cap and color tables | enemy-001 to enemy-004 |
| usecase-008 | Meet the quota and clear the stage | The door unlocks at the quota; reaching it shows a win | level-003 |
| usecase-009 | Die and restart | Death shows the lose screen; restart resets the level | level-004 |
| usecase-010 | Use a trap against enemies | A tripwire, lever, or shot rope hurts enemies | trap-003 to trap-006, interaction-001 to interaction-003 |
| usecase-011 | Ride a scripted platform | A platform moves by its script and starts by its trigger | trap-004 |
| usecase-012 | Rebind a key | A changed binding works and survives a page reload | interface-002, interface-003 |
| usecase-013 | Enemy attacks across dimensions | An intangible enemy's attack does no damage | shifting-010 |
| usecase-014 | Take damage and reposition | Damage removes exactly 1 health, the game freezes and ramps to a stop, the player chooses a valid spot and teleports, time ramps back, and the player blinks with immunity for about 1 second | health-001 to health-010, health-014 |
| usecase-015 | Get crushed | Being deeply squeezed by a platform or trap while not immune costs 1 health and starts the reposition moment | health-012 |
| usecase-016 | Run out of health | Damage that reduces health to zero ends the run | health-011 |
| usecase-017 | Pick up and swap a weapon | E fills an empty slot, swaps with the held weapon when both are full, and replaces a same-archetype weapon | loot-008, loot-009 |
| usecase-018 | Read and compare a weapon | Hovering shows the box with name, tier, rarity color, stats, and comparison numbers against the held weapon | loot-001, loot-002, loot-010 |
| usecase-019 | Shift during the reposition moment | A shift during the freeze changes which spots are valid; the cooldown counts in real time | health-017, health-014 |
| usecase-020 | Clip slightly into a platform | A shallow overlap moves the player to the nearest empty space with no damage | health-016 |
| usecase-021 | Recover health by kills | Every X kills (quota divided by 10, rounded up) restores 1 health, and health never goes above the maximum of 7; trap kills count | health-018, health-013 |
| usecase-022 | Lose footing after a shift | The player keeps momentum and falls with no coyote time; double jump and the ability to wall jump remains | shifting-017 |
| usecase-023 | Roll and scale stats | Rolled stats stay inside the weapon's range, and ranges scale by tier | loot-003, loot-004 |
| usecase-024 | Planned after version 0.2.0: merge two weapons | Two same-tier weapons merge into one tier higher, with stats keeping their range position | loot-007 |
| usecase-025 | Stuck bug corrects itself | A bug that cannot reach its next point enters the correcting state, flies through walls to it, still takes damage, and resumes | enemy-007 |
