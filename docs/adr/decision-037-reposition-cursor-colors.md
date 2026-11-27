# decision-037: The reposition line and circle use the Gray outline pattern, with an X when invalid

**Status:** Accepted
**Date:** November 5, 2026

## Context

During the choice stage of the reposition moment (decision-020), a line of dots and a circle follow the mouse and show whether a spot is valid. The first design drew both in white when valid and red when invalid. White disappears against a white background, and red blends into the red Melee character (decision-032).

## Decision

The line of dots and the circle use the alternating white and black pattern of the Gray outline (decision-018), so they can be seen on any background and next to either class. A valid and an invalid spot look the same, except that an invalid spot shows an X inside the circle, drawn in the same pattern. Clicking an invalid spot still plays a distinct invalid sound.

## Consequences

The line and circle are visible on every background and next to both classes. Telling valid from invalid no longer depends on telling two colors apart. The pattern reuses an existing visual rule, so there is nothing new to learn, and the art guide includes it. A check should confirm that the X appears exactly when the spot is invalid.

## Alternatives considered

- White for valid and red for invalid: white blends into a white background, and red blends into the Melee character.
- A single solid color with only the X to mark invalid spots: any single color blends into some background or class color.
