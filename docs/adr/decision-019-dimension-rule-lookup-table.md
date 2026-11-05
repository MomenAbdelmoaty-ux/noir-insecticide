# decision-019: The dimension rule is a lookup table

**Status:** Accepted
**Date:** October 24, 2026

## Context

The Gray background adds a third background, and hard-coded conditions would need rewriting each time a background is added.

## Decision

Which dimensions are touchable on each background is stored as a table, and one function (isReal) reads it. The test lists all nine combinations by hand.

## Consequences

TypeScript refuses to compile if a background has no row. Collision masks are built from the same table. A future change is one row.

## Alternatives considered

A boolean expression: it breaks with each new background.
