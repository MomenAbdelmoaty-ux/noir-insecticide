# decision-010: Pool by measurement

**Status:** Accepted
**Date:** Before October 24, 2026

## Context

Creating and discarding many objects can make garbage collection run at a bad moment, which makes the game stutter. Pooling has its own cost and complexity.

## Decision

Pool sprites and projectiles first. Pool physics bodies only if profiling shows a need.

## Consequences

Performance work is guided by the benchmark and profiling (Milestone F) instead of guesses. Pooling physics bodies is not a guaranteed win.

## Alternatives considered

Pooling everything from the start.
