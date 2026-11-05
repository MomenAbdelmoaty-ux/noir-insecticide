# decision-025: Losing footing after a shift keeps momentum and gives no coyote time

**Status:** Accepted
**Date:** October 30, 2026

## Context

A shift can make the floor, platform, ladder, or wall under the player intangible. The first proposal was that the player falls and nothing else.

## Decision

The player keeps their momentum and falls as if they had walked off a ledge. Ordinary ledges keep coyote time, but a shift gives none. The double jump stays available, and so does a wall jump if a wall is still touchable. Climbing and wall sliding end.

## Consequences

The movement system already handles the case of no longer touching a floor, so the shift only changes what counts as touchable and needs no special case. Losing footing is a risk the player takes on purpose, which keeps shift timing a skill.

## Alternatives considered

- Fall and nothing else: rejected, because momentum should be conserved.
- Coyote time after a shift: rejected.
