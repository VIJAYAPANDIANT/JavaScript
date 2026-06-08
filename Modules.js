// ==========================================
// TOPIC: ES Modules (ESM) in JavaScript
// ==========================================

/*
Definition:
Modules are a way to break up your code into separate files. This makes it easier to maintain and reuse code.
ES Modules (ESM) is the official standard format for packaging JavaScript code for reuse, utilizing 
`import` and `export` statements.

How Modules Work:
1. Exporting code: You make variables, functions, or classes available to other files using `export`.
2. Importing code: You consume exports from other files using `import`.

There are two types of exports/imports:
- Named Exports (multiple per file)
- Default Exports (only one per file)
*/


// ==========================================
// 1. Exporting Code (Simulated Demonstration)
// ==========================================

// --- File: mathUtils.js ---
/*
// A. Named Exports: Exporting multiple variables/functions.
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// B. Default Export: Exporting a single entity from a module.
export default class Calculator {
    multiply(a, b) {
        return a * b;
    }
}
*/


// ==========================================
// 2. Importing Code (Simulated Demonstration)
// ==========================================

// --- File: app.js ---
/*
// A. Importing Named Exports: Needs to use curly braces and match names exactly.
import { PI, add, subtract } from "./mathUtils.js";

console.log(PI); // Output: 3.14159
console.log(add(5, 3)); // Output: 8

// B. Importing with Aliasing (renaming named exports):
import { add as sumFunction } from "./mathUtils.js";
console.log(sumFunction(10, 20)); // Output: 30

// C. Importing Default Export: No curly braces required. You can name it whatever you like.
import Cal, { PI } from "./mathUtils.js"; // Mixing default import (Cal) with named import (PI)
const calculator = new Cal();
console.log(calculator.multiply(4, 5)); // Output: 20

// D. Import everything as an object:
import * as MathTools from "./mathUtils.js";
console.log(MathTools.PI); // Output: 3.14159
console.log(MathTools.subtract(10, 4)); // Output: 6
*/


// ==========================================
// 3. Enabling Modules in Environments
// ==========================================
/*
To use ES modules:
- In Node.js: Add `"type": "module"` in your package.json, or name files with a `.mjs` extension.
- In HTML/Browser: Add the `type="module"` attribute to your script tag:
  <script type="module" src="app.js"></script>
*/
