// ==========================================
// TOPIC: Basic JavaScript & Running Environments
// ==========================================

/*
================================================================================
1. DEEP DEFINITION
================================================================================
JavaScript (JS) is a lightweight, interpreted (or Just-In-Time compiled), 
single-threaded, dynamic programming language with first-class functions. 
While it is best known as the scripting language for Web pages, many non-browser 
environments also use it, such as Node.js, Deno, and Apache CouchDB.

Key Characteristics of JavaScript:
- High-level: Abstracts away low-level operations like memory management.
- Dynamic typing: Variable types are associated with values, not variable declarations.
- Prototype-based: Uses prototypes instead of traditional OOP classes for inheritance.
- Multi-paradigm: Supports functional, imperative, and object-oriented programming.

================================================================================
2. HISTORICAL TIMELINE
================================================================================
- 1995: Created by Brendan Eich at Netscape in 10 days, originally named Mocha, then LiveScript, and finally JavaScript.
- 1997: Standardized under ECMAScript (ES) to ensure cross-browser compatibility.
- 2009: ES5 released, introducing strict mode (`"use strict"`), JSON support, and array helpers.
- 2009: Node.js released, bringing JavaScript to servers/backend.
- 2015: ES6 (ECMAScript 2015) released - the largest update, adding Classes, let/const, Promises, and Arrow Functions.
*/


// ==========================================
// 1. Core Syntax & Printing: console.log()
// ==========================================
// The `console` object provides access to the browser/engine debugging console.
// `log()` outputs message arguments sequentially.

console.log("=== 1. CORE SYNTAX & PRINTING ===");
console.log("Hello, JavaScript!"); // Output: Hello, JavaScript!

// Log multiple values together:
console.log("Name:", "Vijay", "Age:", 21); // Output: Name: Vijay Age: 21


// ==========================================
// 2. JavaScript Execution Environments
// ==========================================
/*
JavaScript code runs inside a JavaScript Engine (like V8 in Google Chrome/Node.js, 
SpiderMonkey in Firefox, or JavaScriptCore in Safari).

There are two primary environments to run your JavaScript files:

--------------------------------------------------------------------------------
A. Browser Environment
--------------------------------------------------------------------------------
1. Embed the script inside an HTML document:
   <script src="Basic Js.js"></script>
2. Open the HTML file in a web browser.
3. Open Developer Tools (Right-Click -> Inspect -> select the Console tab).
4. Any `console.log()` statement will output messages directly there.

--------------------------------------------------------------------------------
B. Terminal (Node.js) Environment
--------------------------------------------------------------------------------
Node.js is a runtime that allows JavaScript to run directly on your operating system.
1. Open your terminal/command prompt.
2. Navigate to the directory containing your file.
3. Run the node execution command:
   node "Basic Js.js"
4. The outputs will print directly to your terminal.
*/