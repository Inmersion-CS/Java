# Java

Web-based Java learning project focused on programming practice and debugging.

> **Status:** Foundation v0.1. The current release provides the application shell and project infrastructure. Browser execution, automated judging, debugging missions, and full lesson systems are roadmap items.

**Live site:** https://inmersion-cs.github.io/Java/

## Learning model

The project is designed around a practical loop: read code, predict what it will do, write a solution, test it, and debug the result. Planned subject coverage includes program flow, methods, arrays and strings, classes and objects, exceptions, I/O, searching, sorting, recursion, testing, and debugging.

## Current implementation

The repository currently contains a React + TypeScript application shell with Java-specific routes and roadmap content, responsive keyboard-accessible navigation, strict type checking, linting, automated tests, production builds, and GitHub Pages deployment.

## Roadmap

1. Program flow
2. Arrays and strings
3. Objects and classes
4. Debugging and problem solving
5. Browser coding workspace and exercise/judging systems

## Technology

React · TypeScript · Vite · React Router · Vitest · Testing Library · ESLint · Prettier · GitHub Actions

## Development

Node.js 22.13 or newer is required.

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm audit --audit-level=high
npm run typecheck
npm run lint
npm run test:run
npm run build
npm run format:check
```

## Contributing and accessibility

See [`CONTRIBUTING.md`](CONTRIBUTING.md). The interface should remain keyboard-operable, responsive, touch-friendly, and clear about what is implemented versus planned.

## License

MIT. See [`LICENSE`](LICENSE).
