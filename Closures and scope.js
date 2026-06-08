// ==========================================
// TOPIC: Closures & Scope in JavaScript
// ==========================================

/*
Definition:
1. Lexical Scope: 
   In JavaScript, scope is determined by the physical placement of variables and blocks in the source code (at write-time). 
   An inner function has access to variables defined in its outer scopes (parent functions, global scope).

2. Closure:
   A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
   (the lexical environment). In other words, a closure gives an inner function access to the outer function's scope 
   even after the outer function has finished executing.

================================================================================
SYNTAX REFERENCE
================================================================================
// Basic Closure Pattern
function outer(outerArg) {
    let outerVar = "value";
    return function inner(innerArg) {
        // Accesses outerArg and outerVar from outer scope
        return outerVar + outerArg + innerArg;
    };
}

// Instantiate closure
const closureInstance = outer("arg1");
closureInstance("arg2"); // invokes inner function with access to "value" and "arg1"
*/


// ==========================================
// 1. Lexical Scope
// ==========================================
// Functions are executed using the scope chain that was in effect when they were defined, not when they are invoked.

console.log("--- Lexical Scope Example ---");

function outerFunc() {
    let outerVar = "I am from outerFunc";
    
    function innerFunc() {
        // innerFunc has access to outerVar because of lexical scoping
        console.log(outerVar); 
    }
    
    innerFunc();
}

outerFunc(); // Output: I am from outerFunc


// ==========================================
// 2. Closure Pattern
// ==========================================
// When we return the inner function from the outer function, it retains access to the outer function's variables 
// even after the outer function's execution context is removed from the call stack.

console.log("\n--- Closure Pattern ---");

function createGreeting(greetingWord) {
    // greetingWord is local to createGreeting
    return function(name) {
        // The inner function remembers greetingWord via closure
        return `${greetingWord}, ${name}!`;
    };
}

// createGreeting returns a function that remembers greetingWord as "Hello"
const sayHello = createGreeting("Hello");
// createGreeting returns a function that remembers greetingWord as "Welcome"
const sayWelcome = createGreeting("Welcome");

console.log(sayHello("Vijay"));   // Output: Hello, Vijay!
console.log(sayWelcome("Vijay")); // Output: Welcome, Vijay!


// ==========================================
// 3. Practical Closure: Data Privacy (Encapsulation)
// ==========================================
// Closures are commonly used to create private variables that cannot be accessed directly from the outside.

console.log("\n--- Practical Use: Private Counters ---");

function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount());   // Output: 2

// Attempting to access the private variable directly:
console.log(counter.count); // Output: undefined (Cannot access the raw variable directly, securing data privacy!)
console.log(counter.decrement()); // Output: 1
