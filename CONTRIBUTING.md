# Contributing to Java

Thank you for contributing to this open-source learning project.

Requirements: Node.js 22.13 or newer and npm.

```bash
git clone https://github.com/Inmersion-CS/Java.git
cd Java
npm ci
npm run dev
```

Before a pull request, run:

```bash
npm audit --audit-level=high
npm run typecheck
npm run lint
npm run test:run
npm run build
npm run format:check
```

Keep changes focused, test learner-facing behavior, preserve keyboard access and semantic HTML, and distinguish implemented features from roadmap ideas.
