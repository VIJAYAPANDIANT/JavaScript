// ==========================================
// TOPIC: Comments in JavaScript
// ==========================================

/*
================================================================================
1. DEEP DEFINITION
================================================================================
Comments are hints or annotations in the code that are completely ignored by the 
JavaScript engine during compilation/execution. 

Why use comments?
1. Explaining code logic to fellow developers (and your future self).
2. Temporarily disabling code blocks during debugging.
3. Generating automatic API documentation (using structured formats like JSDoc).

================================================================================
2. SYNTAX REFERENCE
================================================================================
// Single-line comment syntax

/* 
   Multi-line
   block comment syntax
*/

/**
 * JSDoc / Documentation comment syntax
 * @param {type} paramName - parameter description
 * @returns {type} description
 */
*/


// ==========================================
// 1. Single-Line Comments
// ==========================================
// A single-line comment begins with two forward slashes `//`. 
// Anything from `//` to the end of that specific line is ignored.

console.log("=== 1. Single-Line Comments ===");
let a = 10; // This is an inline single-line comment
// a = 20;  <- This statement is commented out and will not execute
console.log(`Value of a: ${a}`); // Output: Value of a: 10


// ==========================================
// 2. Multi-Line Block Comments
// ==========================================
/*
   A multi-line comment starts with `/*` and ends with `*\/`.
   Anything inside this block is ignored by the engine, 
   regardless of how many lines it spans.
*/

console.log("\n=== 2. Multi-Line Comments ===");
let b = 20;
/*
   let c = a + b;
   console.log(c);
   None of these lines will execute.
*/
console.log(`Value of b: ${b}`); // Output: Value of b: 20


// ==========================================
// 3. JSDoc (Documentation) Comments
// ==========================================
/**
 * JSDoc comments start with `/**` and end with `*\/`.
 * They are structured comments read by IDEs (like VS Code) and documentation tools 
 * to provide rich autocomplete suggestions, type hints, and parameter explanations.
 * 
 * @param {number} x - The first number to add.
 * @param {number} y - The second number to add.
 * @returns {number} The sum of x and y.
 */
function addNumbers(x, y) {
    return x + y;
}

console.log("\n=== 3. JSDoc Function Output ===");
console.log(addNumbers(5, 7)); // Output: 12