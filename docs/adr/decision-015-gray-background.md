# decision-015: The Gray background is a rare, situational third background

**Status:** Accepted
**Date:** October 24, 2026

## Context

Some designs need both colors active at once, and some secrets need a wall the normal shift cannot pass. Making Gray its own ordinary color would erase what Gray means, which is a merger of the two colors.

## Decision

A third background, Gray, exists as a secret and difficult state. It is never reached with the shift button, which only switches between Black and White. Level data decides how it is reached (special switches, timed intervals, jumps or abilities, and similar) and how the player leaves it. On a Gray background, Black and White things are both touchable and Gray things are intangible.

## Consequences

Secrets and strong extra loot can sit behind Gray walls. A trigger in one color can unlock something in another. The rule table gains a third row. Ways of reaching Gray are registered behaviors, so the strategy pattern returns for them. Whether the first level uses Gray is optional. Gray is both colors at the same time, which is different from how the player-owned color works (decisions 032 and 033).

To be decided: how the player leaves Gray, and whether the first level uses it.

## Alternatives considered

- No Gray background: loses secrets and both-colors puzzles.
- A Gray background where everything is touchable: turns it into a plain free zone and makes Gray things pointless.
- A fourth button for Gray: adds an input and makes Gray common instead of rare.
