# Documentation

Everything written about Noir Insecticide lives here. The documents describe what the game is, what it must do, how its rules work, how the code is organized, and why each choice was made. They are kept in step with the code: the rulebook is updated whenever behavior changes, decision records are written when decisions are made, and development logs are kept to showcase the entire process.

New here? Read the product requirements first, then the rulebook. Anyone reading the code should start with the architecture and the decision records. Unfamiliar words are explained in the [glossary](glossary.md).

## The documents

| Document | What it is for | Who reads it |
|---|---|---|
| [Product requirements](01-product-requirements.md) | What the game is and why, who it is for, and the scope | Players, contributors, and anyone evaluating the project |
| [Software requirements](02-software-requirements.md) | The numbered requirements: what the game does, and how well | Developers and testers |
| [Rulebook](03-rulebook.md) | The detailed design: controls, the dimension rule, weapons, enemies, traps, health, levels, and art direction | Developers, designers, and testers |
| [Architecture](04-architecture.md) | How the code is organized and why | Engineers |
| [Use cases](05-use-cases.md) | Player scenarios with acceptance criteria and the requirements each one covers | Everyone |
| [Test plan](06-test-plan.md) | How the game is checked, how bugs are tracked, and how playtests run | Testers and engineers |
| [Decision records](adr/README.md) | One short note for each technical choice: the context, the decision, the consequences, and the alternatives | Engineers |
| [Glossary](glossary.md) | The terms used in these documents, in plain language | Everyone |
| [Development log](devlog) | Short dated notes on what was done and learned | Everyone |
| [Concept art](concept-art/README.md) | Weapon concept art | Everyone |

The art guide will be added to this list when it is written.

## How the documents connect

Each requirement has an identifier made of a category word and a number, for example `movement-004`. Use cases are numbered `usecase-001`, and decision records `decision-001`. Documents refer to each other by these identifiers.

Every requirement can be followed to a test. Requirements about behavior the player experiences can also be followed to a use case. Design principles trace to the balance test and playtests, and data and loader requirements trace directly to tests. Each use case lists its requirements and is checked by at least one automated test or a written manual check.

Numbers that are removed are not reused, so an identifier always points to the same thing.

## Decisions and the documents

The requirements and the rulebook say what the game does. The decision records say why. When a decision changes a rule, the rule is updated in the rulebook and the requirements, and the record points to the new decision. Records are never deleted: a replaced decision is marked superseded and linked to its replacement.
