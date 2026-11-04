# decision-009: Selenium through page elements and a test hook

**Status:** Accepted
**Date:** Before October 24, 2026

## Context

End-to-end tests drive a real browser, but the game canvas is invisible to Selenium.

## Decision

Tests read the on-screen display elements and a small read-only state object exposed on the page (window.__game).

## Consequences

The display must expose its information as page elements. The state object is read-only, so tests cannot change the game.

## Alternatives considered

Reading the canvas by image comparison, which is fragile.
