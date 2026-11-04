# decision-008: Server-authoritative multiplayer, deferred

**Status:** Accepted (deferred)
**Date:** Before October 24, 2026

## Context

A multiplayer mode is planned after version 0.2.0 and should not require rewriting the game.

## Decision

When multiplayer is built, a Node server runs the shared simulation over WebSockets with the ws library, and players only send inputs.

## Consequences

The simulation must stay headless, deterministic, and command-driven (decision-003) so the server can reuse it. Rules such as whether a freeze pauses the other player, and whether a shift flips both players, are decided before building it.

## Alternatives considered

Colyseus, Socket.IO, WebRTC, and peer-to-peer were compared.
