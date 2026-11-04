# decision-002: Planck.js for physics, inside the simulation package

**Status:** Accepted
**Date:** Before October 24, 2026

## Context

The simulation must run without a browser, and the game has fast projectiles that could skip through thin walls (tunneling).

## Decision

Use Planck.js, a JavaScript port of Box2D, in the simulation package. It has continuous collision and a bullet setting made for fast projectiles.

## Consequences

Fast objects can be handled with the bullet setting, speed caps, and thick colliders. Collision filters can express the dimension rule (decision-006). Phaser's own physics stays unused.

## Alternatives considered

Matter.js, which was the other candidate.
