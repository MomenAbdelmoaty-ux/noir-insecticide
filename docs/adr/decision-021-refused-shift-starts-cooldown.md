# decision-021: A shift that would trap the player is refused, and still starts the cooldown

**Status:** Accepted (updated October 30, 2026)
**Date:** October 27, 2026

## Context

A shift can make solid something that overlaps the player. Five ways of handling that were considered:

1. Refuse the shift.
2. Let the player stay stuck inside until the next shift, taking damage. This could be used to wait out cooldowns or act mid-air as a health sacrifice, is too easy to break, and feels cheesy.
3. Rewind the player a few frames until free. This is cheesable, a lot of work, likely to be buggy, and costly to store.
4. Pop the player to the nearest free spot. This makes sense but is cheesable, although level design could fix it and it could be a skill.
5. Pop the player out in a set-back direction (down, to the side, or against their momentum). This could feel unfair or work incorrectly.

The choice must be fair, fun, sensical, punishable when misused, and not "cheesable".

To "cheese" something means to win, advance, or otherwise benefit by abusing or exploiting a mechanic in a unintended fashion, allowing the player to ignore or bypass obstacles, challenges, and generally the core difficulty of the game.

## Decision

Option 1, with the cooldown starting on every attempt. Refusing the shift removes the collision, softlock (when a player becomes trapped in a way that makes progress completely impossible), and cheese problems entirely. Its one weakness, that spamming(repeatedly clicking a button or using an action constantly/as fast as possible) could be rewarded over timing, is fixed by the cooldown, which punishes mistiming and abuse.

Added October 30: the shift icon greys out in advance whenever a shift would be refused.

## Consequences

There is no stuck-resolution code for shifts and no stuck-on-shift damage. Refused shifts need clear feedback after the attempt (a distinct sound and a short visual cue). Shift gates stay timing-based. The advance warning removes the guessing, which this record originally did not assume: the player can see that a shift is blocked. Mistiming still costs something through the cooldown, and spamming is still punished because every attempt starts it. The greyed look must differ from the cooldown fill. During the reposition moment the refusal rule is suspended (decision-027).

## Alternatives considered

Options 2 to 5 above. For the advance warning, no warning at all: it was recommended at first, because a warning removes some of the skill of timing a shift, and the greyed icon was chosen instead.
