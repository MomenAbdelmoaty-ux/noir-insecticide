# decision-022: Crushing counts as damage and grants the reposition

**Status:** Accepted (updated October 30, 2026)
**Date:** October 27, 2026

## Context

A moving platform, a trap, or an object can squeeze the player against solid world objects.

## Decision

While not immune, being deeply squeezed or clipped inside solid world objects deals 1 damage and starts the same reposition moment. The player is punished for being squashed and is given a way out. A shallow overlap is handled differently (decision-026).

## Consequences

Traps and platforms need a crush check. Levels must leave free space near every place a crush can happen, and a level that does not is a level mistake to fix (decision-023).

## Alternatives considered

None recorded.
