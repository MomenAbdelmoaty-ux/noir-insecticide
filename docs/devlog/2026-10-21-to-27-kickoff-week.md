# Kickoff week: October 21 to October 29, 2026

*Written afterward on 2026-10-29 from memory and my notes.*

**Hours:** about 43

## What I set out to do

Build Noir Insecticide, a two-dimensional roguelike platformer with a black and white dimension mechanic, as a long-term project to practice professional habits: written requirements, testing, automatic builds, and documentation. I'm working with an artificial intelligence assistant (Claude) as a mentor, so I can learn as I go. The game design and the decisions are mine.

## Timeline

- **October 21 to 22:** scoped the project, chose the technology, and wrote down the core game design.
- **October 23:** settled contradictions in my design notes and decided how enemies find their way (shared flow fields).
- **October 24:** wrote the first setup and build guides.
- **October 25:** renamed "phase" to "dimension" and added the rare Gray background and the overlap rule.
- **October 26:** edited and updated various game mechanics and architecture decisions
- **October 27:** added limited health and the reposition moment, and finished my tool setup and the first live page.
- **October 28:** finalized visual direction and techniques for concept art and designed 16/20 of the melee weapons.
- **October 29:** finished designing, tweaking, naming, and exporting all 20 melee weapon sprites.

## Decisions made

- **Technology:** TypeScript, Phaser for drawing, Planck.js for physics, Vite, Vitest for tests, Selenium for browser tests later, and GitHub Actions for automatic checks.
- **Architecture:** the game rules live in a separate simulation package with no browser code, so they can be tested without a browser and reused on a server later.
- **Data-driven design:** weapons, enemies, traps, and key bindings are data files checked against schemas, so new content does not need code changes.
- **Core design:** difficulty comes from skill and not from numbers, with no progression between runs. The player can only touch things whose color differs from the background. A hit costs exactly 1 of a few health points and starts a short reposition moment.


## Done

- Wrote the requirements, the rulebook, and a set of decision records.
- Installed the tools on Windows 11, configured Git, and created this repository.
- Created two packages (the simulation and the client) with their first tests, automatic checks, and deployment to GitHub Pages.
- Set up planning on GitHub: milestones, issues, and a project board.
- Drew concept art for the 20 melee weapons.
- Merged 2 pull requests to fix issues A1.1 and A1.2.

## Learned

- Various git tools, methods, habits and best practices.
- Phaser "Scene" structure.
- JS constructors, classes, constructor shorthand and return overrides.
- How configs work and what each line does (vite, tsconfig, package, .github/workflows/ci.yml).
- Vitest testing (describe, it, it.each, expect, toBe, toThrow).
- How to set up and effectively use registries.
- How to set up and effectively use schemas (zod and its safeparse).
- Barrel files (index.ts).
- Data scaffolding, Loaders, and the Event bus.
- Library vs Framework (and that React is a library).
- Version Numbering System.



## Blocked

- multiple errors encountered in initial repo and libary setup.
- making consequential game design decisions to address open questions or contradictions and accepting compromises.

## Next

Task A2: write the decision records as files, settle the open design questions, and split the requirements document into separate files.