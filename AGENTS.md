# AGENTS.md

Guidelines for AI agents and contributors working on this codebase.

## Commit & push

- **Commit major changes before stopping.** When a logical unit of work is complete, commit and push it. Don't leave uncommitted work in the tree.
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, etc.
- Run `npm run lint` and `npm run build` before pushing to make sure CI passes.
- Only commit when explicitly asked, or when the user has framed the work as "go ahead and do X" (where the commit is part of the task). Otherwise, stop after making changes and ask before committing.

## Follow YAGNI

- **You Aren't Gonna Need It.** Don't add abstractions, helpers, configuration, or features for hypothetical future use. Build what the current task requires.
- Prefer the simplest implementation that solves the problem in front of you. Refactor when a real second use case appears, not before.
- Don't introduce dependencies, plugins, or build tooling without a concrete need.
- Don't add fallbacks, error handling, or validation for inputs that can't actually occur in the current codebase.
- When a feature could be 3 lines or 50 lines, pick the 3-line version unless the 50-line version is genuinely clearer.

## Code style

- Match the surrounding code's style and conventions. Read a few neighboring files before writing.
- Use the existing libraries — don't add new ones without justification.
- Don't add comments unless the user asks for them. Code should be self-documenting.
- Keep functions and components small and focused.

## Working in this repo

- TypeScript strict mode is on. Run `npx tsc --noEmit` to typecheck.
- Lint with `npx eslint --ext .ts,.tsx src/`.
- Build with `npm run build` to verify nothing is broken.
- Test files use `tsx --test "src/**/*.test.ts"`.
- The Learn data lives in `src/data/learn/`. Each lesson file exports a `LearnTopic` with typed `sections` (text, position, moves, tip, trap, key-idea). For move walkthroughs, the `chess.js` library validates every SAN move — write sequences that actually play through cleanly, or use `type: "position"` for static references.
