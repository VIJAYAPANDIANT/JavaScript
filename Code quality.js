// ==========================================
// TOPIC: Code Quality (ESLint, Prettier, & Husky)
// ==========================================

/*
Definition:
Ensuring clean code is vital for long-term codebase health. Code quality tools analyze scripts, 
format documents uniformly, and enforce rules automatically before code is committed.

Key Tools:
1. ESLint (Linter: catches syntax mistakes, logical bugs, and style issues)
2. Prettier (Formatter: formats code styling - indentation, spacing, quotes)
3. Husky (Git Hooks manager: runs linters and formatters before permitting git commits)
*/


// ==========================================
// 1. ESLint (Linting)
// ==========================================
/*
ESLint analyzes code statically to quickly find problems.

A. Installation & Initialization:
$ npm init @eslint/config           # Interactively sets up configuration config file

B. Sample Configuration File: eslint.config.js (ESLint v9+)
import js from "@eslint/js";

export default [
    js.configs.recommended, // Enforces standard rules (no unused vars, no undefined variables)
    {
        rules: {
            "no-console": "warn",        // Warn when console.log is used
            "eqeqeq": "error",           // Enforce strict equality === instead of ==
            "semi": ["error", "always"]  // Require semicolons
        }
    }
];
*/


// ==========================================
// 2. Prettier (Formatting)
// ==========================================
/*
Prettier parses code and re-prints it with its own rules, ensuring uniform style.

A. Installation:
$ npm install -D prettier

B. Configuration File: .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 4,
  "trailingComma": "none"
}

C. Ignore Rules File: .prettierignore
node_modules/
dist/
build/
*/


// ==========================================
// 3. Husky (Git Hooks Automation)
// ==========================================
/*
Husky lets you configure Git Hooks to automatically run linting and formatting 
when running git actions (like git commit, git push). This prevents bad code from 
reaching your remote repository.

A. Installation & Setup:
$ npm install -D husky
$ npx husky init                 # Sets up git hooks folder structure

B. Adding a Pre-Commit Hook:
Inside the `.husky/pre-commit` file, we tell Git to run tests and linters:

--- File: .husky/pre-commit ---
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint && npm run format
------------------------------

Now, whenever you run:
$ git commit -m "feat: new component"
Husky will execute your linter and formatter. If ESLint returns an error, the commit fails!
*/
