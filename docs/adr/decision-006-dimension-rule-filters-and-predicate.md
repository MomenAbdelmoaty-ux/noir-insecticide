# decision-006: Dimension rule through collision filters plus one shared predicate

**Status:** Accepted
**Date:** Before October 24, 2026

## Context

The rule that decides what the player can touch affects collisions, triggers, reach checks, and damage. If each place implements it separately, they can disagree.

## Decision

Map dimensions to Planck category and mask bits so collisions follow the rule. A lookup table lists which dimensions are touchable on each background. Collision filters cover collisions only, so one function, isReal, decides triggers, reach checks, and damage.

## Consequences

A test confirms that the filters and isReal agree for all nine combinations of dimension and background. The lookup table later became its own decision (decision-019).

## Alternatives considered

Writing separate conditions in each system, which risks the systems drifting apart.
