# decision-045: Levels are assembled from hand-made sections

**Status:** Accepted (extends decision-004)
**Date:** November 5, 2026

## Context

Many roguelikes build levels from hand-made rooms, where what is random is which rooms appear, where, and how they connect. The game already uses tiles, and a large level was already divided into sections. Drawing every level whole by hand makes it harder to check, test, and vary.

## Decision

Each section is made by hand in Tiled, contains all its colors (Black, White, and Gray) and all its spawn slots, and is its own puzzle: parkour, a shift gate, or both. A section has a single entrance and a single exit and a difficulty value from 1 to 10. Sections are squares of a standard size (to be decided), with a few exceptions that are whole multiples of that size. A level is a list of sections, joined from the exit of one to the entrance of the next. Each level uses a subset of all sections, with weights set in level data, so later levels favor harder sections. For version 0.2.0, a level is joined by hand from a few sections. A generator that joins them at random comes after version 0.2.0, unless a large library of sections exists sooner.

## Consequences

Levels are easier to build, check, and test, and a level of good sections joined by rules is guaranteed to be completable. Each section is checked on its own by shifting between the Black and White backgrounds, with its slots on or off. The flow fields work on the assembled grid, and can be limited to the sections near the player. Trigger identifiers are local to a section, so a section can appear twice. The main cost is authoring, and the library must be large enough that levels differ. Difficulty values are tuned from playtests and telemetry.

## Alternatives considered

- Several whole levels, each drawn entirely by hand: they have no randomness and no variety, so every run is the same.
- Fully generated levels from single tiles: they are difficult to create, and difficult to prove completable. A generator also has to get the difficulty right and keep levels engaging, fun, and readable, in short a good experience. Generated levels could be too easy, too hard, or just nonsense, and they are hard to test.
