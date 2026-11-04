# decision-012: Data-driven content with registries and schema validation

**Status:** Accepted
**Date:** October 24, 2026

## Context

New weapons, enemies, traps, and levels should be cheap to add, and a mistake in a data file should be easy to find.

## Decision

Content is data in files. New kinds of behavior are small classes registered by name in a registry. Every data file is validated at load with Zod, a schema validation library, so errors name the file and the field.

## Consequences

Adding a weapon, enemy, trap, trigger, or platform movement needs a data entry, plus a behavior class only if the behavior is new, with no edits to the core loop (quality-011). A test registers a fake definition to prove it. Data validation errors are clear (quality-012). The rule of thumb is in the scaffolding rules of the architecture document.

## Alternatives considered

Hard-coding content in the simulation, and writing validation by hand.
