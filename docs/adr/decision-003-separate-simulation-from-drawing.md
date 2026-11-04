# decision-003: Simulation separate from drawing

**Status:** Accepted
**Date:** Before October 24, 2026

## Context

Game rules mixed into drawing code cannot be tested without a browser, replayed, benchmarked, or reused on a server.

## Decision

Keep the rules in a headless simulation package with a fixed time step, seeded randomness, and commands as input. The client only reads the simulation state each frame and draws it.

## Consequences

Unit tests, replays, benchmarks in Node, and a future server can all use the same code. The simulation package has no browser or Phaser library in its configuration, and its tests run in the Node environment. The same seed and inputs give the same state (quality-003).

## Alternatives considered

Putting the rules inside the Phaser scenes: faster to start, but not testable without a browser and not reusable on a server.
