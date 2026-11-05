# decision-017: Rename phase to dimension, and phase gate to shift gate

**Status:** Accepted
**Date:** October 24, 2026

## Context

The word phase is easy to confuse with Phaser, and Box2D already uses broad phase and narrow phase for collision steps, so searches mix in unrelated results.

## Decision

A thing's color is its dimension (Black, White, or Gray). The obstacle that forces a shift is a shift gate.

## Consequences

The file is dimension.ts, identifiers and documents are renamed, and the words match how the game is described: things live in the Black dimension, the White dimension, or both.

## Alternatives considered

- Keep phase: confusing.
- Layer: clashes with Tiled and Unity layers.
