# Test plan and quality assurance

## Test pyramid

| Layer | Tool | Scope | Target count |
|---|---|---|---|
| Unit | Vitest | Dimension rule truth table, including the Gray background, movement states, jump allowances, shift cooldown, damage, health recovery formula, clipping depth tiers, tier scaling and rolled stat ranges, pickup and swap rules, registry, data validation, random number determinism | 60 or more |
| Integration | Vitest with the headless simulation | Scripted inputs over many ticks: refused shifts, damage and the reposition moment (including shifting during it), projectile phasing, horde scaling, world changes updating flow fields, a stuck bug correcting itself, trigger chains | 12 to 20 |
| Fuzz (random input) | Vitest | Random inputs for thousands of ticks: no not-a-number positions, nothing leaves the world, no crashes | A few |
| Reachability | Vitest | The level can be completed under the dimension rules | One per level |
| End to end | Selenium | Page loads, game starts, movement on keypress, display updates, win screen, key rebinding persists, no console errors | 3 to 5 |
| Performance | Vitest benchmark | Time per tick at 50, 100, 200, and 500 entities; fails automatic checks if over budget | Several |
| Balance | Vitest | Kill and survive time bands across spawn, scaling, and weapon tier curves (progression-003) | A few |

## Playtesting

Automation answers whether something broke; playtesting answers whether the game is fun, clear, and fair.

- 3 to 5 outside playtesters, starting with version 0.2.0-alpha on December 30 and finishing by about January 6.
- Watch without helping; record where they get stuck.
- A short feedback form (below).
- Optional telemetry: deaths per area, time to complete, shifts per minute.
- A playtest report listing findings and the changes they caused.

## Quality assurance artifacts

A bug log in GitHub Issues with severity labels, Lighthouse performance and accessibility results, a performance benchmark table, a traceability table (requirement, use case, test), and a known-issues list in the README.

## Documentation kept in step with the code

The rulebook is updated whenever behavior changes, decision records are written when decisions are made, and development logs are kept to showcase the entire process.

## Playtest feedback form

Each playtester is sent the form with the first alpha version and asked:

1. How did the weapons feel in combat?
2. How did the abilities feel in traversal?
3. Where did you get stuck or confused?
4. Did the horde feel too slow, about right, or overwhelming? How did the enemies feel to fight against?
5. Did shifting the background feel good or annoying?
6. Did shifting the background ever feel necessary? 
7. Did the game ever have any satisfying moments? Did you ever feel strong?
8. How did the level/stage structure and shape feel?
9. Did the enemy pathfinding feel buggy or unfair?
10. How did the traps feel in terms of avoiding them? Were they unfair or barely an issue?
11. How did the traps feel in terms of using them against the horde? Were they intuitive or useful?
12. Were the controls comfortable? Did you open the settings menu?
13. How did interactables feel when combined with the shifting mechanic and various weapons?
14. What is the one thing you would change?

When possible, one player is watched in person or on a call, without any help, and the places where they are confused are recorded.
