# decision-007: Pathfinding with shared flow fields

**Status:** Accepted
**Date:** Before October 24, 2026

## Context

A horde needs many enemies to find a route at once. Working out a separate route for each enemy gets slower as the horde grows.

## Decision

Use one flow field per bug color group (Black plus Gray surfaces, White plus Gray surfaces, and one for Gray bugs over every surface). A flow field is rebuilt through the single world-change function, and rebuilds are combined and spread over several frames. Physics-driven platforms stay out of the crawler graph.

## Consequences

Many enemies share one computed map. Rebuilds are limited to about 5 per second and about 1 to 2 milliseconds per frame (quality-005), and all world changes must go through world.mutate (level-006). A bug that cannot follow its field, because it is stuck, squished, or on an island, uses the correcting state of decision-034.

## Alternatives considered

A separate route search for every enemy, such as A-star, which costs more as the number of enemies grows.
