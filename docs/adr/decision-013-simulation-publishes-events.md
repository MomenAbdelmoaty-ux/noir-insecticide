# decision-013: The simulation publishes events

**Status:** Accepted
**Date:** October 24, 2026

## Context

The display, sound, telemetry, and a future network connection all need to know what happened in the simulation, and none of them should be wired into the game rules.

## Decision

The simulation announces events (for example shifted, enemy killed, switch pressed) on an event bus. Other parts subscribe to it.

## Consequences

Sound is a data file that maps events to sound files. The display and telemetry can be added or removed without touching the rules.

A single central bus was chosen because it gives one deterministic, ordered stream of events (quality-003). Tests, replays, the display, sound, and a future multiplayer server can all listen to that one stream, and the simulation stays reusable outside the browser.

## Alternatives considered

- **Direct calls from the rules.** The simulation calls the sound or display code itself when something happens. This is the simplest to build, but it ties the rules to the display and the sound, so the simulation could no longer run without a browser (quality-002), and a future server could not reuse it (decision-003).
- **Decentralized events.** Each object keeps its own list of listeners. Recording everything would mean attaching a recorder to every object, the order between sources is harder to guarantee, and there is no single stream to send to a server.
