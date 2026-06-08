// ==========================================
// TOPIC: Variables & Scope in JavaScript
// ==========================================

/*
================================================================================
1. DEEP DEFINITION
================================================================================
A variable is a named container used for storing data values. In computer memory, 
a variable points to a specific address where the data is stored.

In JavaScript, variable declaration has evolved. Originally, only `var` was available. 
With ES6 (2015), `let` and `const` were introduced to solve scope-related bugs and add constants.

================================================================================
2. COMPARING VAR, LET, AND CONST
================================================================================
Feature          | var                          | let                          | const
-----------------+------------------------------+------------------------------+----------------------------
Scope            | Function Scope               | Block Scope                  | Block Scope
Re-declaration   | Allowed                      | Not Allowed                  | Not Allowed
Re-assignment    | Allowed                      | Allowed                      | Not Allowed
Hoisting         | Hoisted (Init: undefined)    | Hoisted (Temporal Dead Zone) | Hoisted (Temporal Dead Zone)
Initialization   | Not required during decl.    | Not required during decl.    | MUST be initialized immediately

================================================================================
3. TYPES OF SCOPE IN JAVASCRIPT
================================================================================
1. Global Scope: Variables declared outside any function or block are globally accessible.
2. Function Scope: Variables declared with `var` inside a function are local to that function.
3. Block Scope: Variables declared with `let` or `const` inside `{ ... }` (like if statements or loops) 
   are accessible only inside that block.

================================================================================
4. SYNTAX REFERENCE
================================================================================
// Declaring mutable variable (block-scoped)
let variableName = value;

// Declaring immutable constant (block-scoped)
const CONSTANT_NAME = value;

// Declaring mutable variable (function-scoped, legacy)
var legacyVar = value;
*/


// ==========================================
// 1. Scope and Re-declaration Behavior
// ==========================================
console.log("=== 1. SCOPE & RE-DECLARATION ===");

// A. var (Function Scope & Re-declarable)
var x = 10;
{
    var x = 20; // Re-declares global x!
}
console.log(`Value of x: ${x}`); // Output: Value of x: 20

// B. let (Block Scope & Not Re-declarable)
let y = 10;
{
    let y = 20; // Distinct variable local to this block only
    console.log(`Inside block y: ${y}`); // Output: Inside block y: 20
}
console.log(`Outside block y: ${y}`); // Output: Outside block y: 10


// ==========================================
// 2. Constants (const)
// ==========================================
// const declares block-scoped variables whose value cannot be reassigned.
// Crucial: Object/Array contents declared with const CAN still be mutated!

console.log("\n=== 2. CONSTANTS & MUTABILITY ===");

const LIMIT = 100;
// LIMIT = 200; // Uncaught TypeError: Assignment to constant variable.

const person = { name: "Vijay", age: 21 };
person.age = 22; // Permitted! We are mutating the object, not reassigning the variable 'person'.
console.log(person); // Output: { name: 'Vijay', age: 22 }


// ==========================================
// 3. Hoisting and Temporal Dead Zone (TDZ)
// ==========================================
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// - `var` is hoisted and initialized with `undefined`.
// - `let` and `const` are hoisted but NOT initialized. They enter the Temporal Dead Zone (TDZ) 
//   and cause a ReferenceError if accessed before declaration.

console.log("\n=== 3. HOISTING & TDZ ===");

// A. var Hoisting:
console.log(`varValue hoisted: ${varValue}`); // Output: varValue hoisted: undefined
var varValue = 50;

// B. let Hoisting (TDZ):
try {
    console.log(letValue); // Accessing before declaration
} catch (error) {
    console.log(`letValue error: ${error.message}`); 
    // Output: letValue error: Cannot access 'letValue' before initialization
}
let letValue = 100;
