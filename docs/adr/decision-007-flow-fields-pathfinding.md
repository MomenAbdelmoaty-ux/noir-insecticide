# decision-007: Pathfinding with shared flow fields

**Status:** Accepted
**Date:** Before October 24, 2026

## Context

A horde needs many enemies to find a route at once. Working out a separate route for each enemy gets slower as the horde grows.

## Decision

For version 0.2.0, use one flow field for each of two crawler color groups: Black plus Gray surfaces and White plus Gray surfaces. Gray bugs, planned after version 0.2.0 as special bugs or elites, are likely to fly and ignore walls, so they need no field of their own. A flow field is rebuilt through the single world-change function, and rebuilds are combined and spread over several frames. Physics-driven platforms stay out of the crawler graph.

## Consequences

Many enemies share one computed map. Rebuilds are limited to about 5 per second and about 1 to 2 milliseconds per frame (quality-005), and all world changes must go through world.mutate (level-006). A bug that cannot follow its field, because it is stuck, squished, or on an island, uses the correcting state of decision-034. Crawlers walk on surface cells, empty cells that touch a solid tile of their color group (corners and ceilings included), so the same search serves flyers and crawlers. The field covers the whole assembled level and can be limited to the sections near the player. Bugs do not collide with each other (decision-042). A weighted platform counts as a surface only while it is at rest, and a crawler standing on one enters the correcting state as soon as the platform starts moving (decision-041).

## Alternatives considered

- A separate route search for every enemy, such as A-star, which costs more as the number of enemies grows.
- Authored waypoints for crawlers: hand-placed points along the walls, with each connection tagged to the gate, drawbridge, or platform it depends on. It gives full control over the route, but it is a second system next to the flyers' flow field, and it only handles changes that someone tagged.
- One hand-drawn route per level: simple, but it breaks as soon as a gate or platform changes, and every combination of states would need its own route.
