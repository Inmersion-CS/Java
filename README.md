# Java

Open-source web software for learning Java programming foundations through active practice.

> **Status:** Foundation v0.1 — the application foundation is being established. Browser execution, judging, debugging missions, and full lesson systems are roadmap items, not implemented features yet.

**Live site target:** https://inmersion-cs.github.io/Java/

## Why this project exists

Programming is learned by doing. Java is intended to become a learning environment where reading code, predicting execution, writing programs, testing ideas, and debugging mistakes form one continuous practice loop.

## Learning scope

The planned scope includes program flow, methods, arrays and strings, classes and objects, exceptions, I/O, searching, sorting, recursion, testing, and debugging practice.

## Current features

Foundation v0.1 provides a React + TypeScript application shell, subject-specific routes and roadmap, responsive keyboard-accessible navigation, strict type checking, linting, automated tests, dependency audit, production builds, GitHub Pages automation, and open-source project governance files.

## Roadmap

1. Program flow
2. Arrays and strings
3. Objects and classes
4. Debugging and problem solving
5. Later: browser coding workspace and exercise/judging systems

## Technology

React, TypeScript, Vite, React Router, Vitest, React Testing Library, ESLint, Prettier, GitHub Actions, and GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

Node.js 22.13 or newer is required.

## Quality commands

```bash
npm audit --audit-level=high
npm run typecheck
npm run lint
npm run test:run
npm run build
npm run format:check
```

## Project structure

```text
.github/          CI, Pages, Dependabot, contribution templates
public/           Project-owned static assets
src/app/          Application shell, routes, identity
src/styles/       Responsive/accessibility foundation
src/test/         Test setup
```

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). Keep changes focused, tested, accessible, and honest about implemented versus planned behavior.

## Accessibility

Semantic landmarks, keyboard navigation, visible focus states, touch-friendly controls, and reduced-motion support are foundation requirements.

## License

MIT. See [`LICENSE`](LICENSE).
