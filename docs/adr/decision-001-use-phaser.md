# decision-001: Phaser for drawing, not a custom engine

**Status:** Accepted
**Date:** Before October 24, 2026

## Context

The game needs rendering, tile maps, a camera, audio, input, and scenes in the browser. Building all of that from scratch would cost days that the schedule does not have.

## Decision

Use Phaser for everything the player sees and hears. Phaser's built-in physics is not used.

## Consequences

Phaser saves an estimated 2 to 4 days. It lives only in the client package, so the simulation never imports it (decision-003). Physics comes from a different library (decision-002).

It is a missed opportunity to learn the inner workings, techniques, heuristics, and libraries used to create an custom engine, as impressive as it may be, but that extra time and effort can simply be redistributed elsewhere and ensure that the final product is completely finished.

## Alternatives considered

A custom engine: full control and more content to learn, but days of extra work that do not make the game better.
