# decision-034: Stuck bugs enter a correcting state and fly straight to their next point

**Status:** Accepted
**Date:** November 4, 2026

## Context

Flow fields assume a bug can follow them. A bug can be softlocked, stranded on an island, squished into a wall by a press, or trapped some other way, and then it cannot reach the next point of its path. The earlier rule only covered a crawler with no valid surface path, which detached and flew to the nearest valid surface point.

## Decision

If a set time (a number in data) passes and a crawler or a flyer has not reached its next point, it enters a correcting state. In that state it ignores all physics collisions, including the dimension rule, and flies straight through walls on a direct path to its next point. The next point is the next step along the flow field, not the end goal. If the flow field gives no direction at the bug's position (an island), the next point is the nearest cell that has one. While correcting, the bug does not attack, does no other behavior, and does not hurt the player by touch. It still takes damage: damage over time, traps it passes through, and weapon projectiles that hit it. When it reaches the point, it resumes its normal behavior.

## Consequences

No bug stays stuck for good, so trapped bugs cannot block the horde or use up the cap on living enemies. Each bug needs a stuck timer. The rule extends the old detach rule to flyers and to every kind of trap, and replaces requirement enemy-007. Bugs that die while correcting still count as kills, including for health recovery. A test checks that a stuck crawler and a stuck flyer reach their next point and that a correcting bug can still be killed.

## Alternatives considered

- **Keep the old rule for stranded crawlers only.** It does not cover flyers, or bugs that are squished or trapped.
- **Teleport the stuck bug to the point.** It is abrupt and looks like a bug, while flying through walls shows what is happening.
- **Despawn stuck bugs after a time.** It is simple, but the player loses kills toward the quota and health recovery, and bugs that vanish look like a bug.
