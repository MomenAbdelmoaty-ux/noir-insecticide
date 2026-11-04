# decision-005: Toggle rules as swappable strategies

**Status:** Superseded by decision-011
**Date:** Before October 24, 2026

## Context

The first design let the background change in several ways: by timers, levers, and jumps as well as a button. Each way needed its own rule.

## Decision

Make each toggle rule a swappable strategy: pieces of behavior that share one interface and can be chosen by data.

## Consequences

This decision was replaced when shifting became one dedicated button (decision-011). The strategy pattern is still used for enemy behaviors, attack behaviors, and trigger types, and it came back for the ways of reaching the Gray background (decision-015).

## Alternatives considered

See decision-011, which chose a single button over all of these toggle rules.
