// ==========================================
// TOPIC: Functions in JavaScript
// ==========================================

/*
Definition:
A function is a block of organized, reusable code that is used to perform a single, related action.
Functions help break down a program into smaller, manageable, and reusable parts.

Types of Functions:
1. Function Declaration (Named function)
2. Function Expression (Anonymous function assigned to a variable)
3. Arrow Function (Shorthand syntax introduced in ES6)
4. IIFE (Immediately Invoked Function Expression)
*/


// ==========================================
// 1. Function Declaration
// ==========================================
// Declared with the function keyword. They are hoisted (can be called before they are defined).

console.log("--- Function Declaration ---");

// Call function before definition (Hoisting)
sayHello(); // Output: Hello there!

function sayHello() {
    console.log("Hello there!");
}

// Function with parameters and return value
function add(num1, num2) {
    return num1 + num2;
}
let sum = add(10, 20);
console.log("Sum: " + sum); // Output: Sum: 30


// ==========================================
// 2. Function Expression
// ==========================================
// A function created inside an expression. These are NOT hoisted.

console.log("\n--- Function Expression ---");

// sayGoodbye(); // Throws TypeError: sayGoodbye is not a function (no hoisting)

const sayGoodbye = function() {
    console.log("Goodbye!");
};

sayGoodbye(); // Output: Goodbye!


// ==========================================
// 3. Arrow Functions (ES6+)
// ==========================================
// A compact alternative to a traditional function expression. 
// Features: Shorter syntax, does not have its own 'this' binding.

console.log("\n--- Arrow Functions ---");

// Standard Arrow Function
const multiply = (x, y) => {
    return x * y;
};
console.log(multiply(4, 5)); // Output: 20

// Implicit Return: If the function body has only one expression, curly braces and 'return' can be omitted.
const square = x => x * x;
console.log(square(6)); // Output: 36


// ==========================================
// 4. Immediately Invoked Function Expression (IIFE)
// ==========================================
// A function that runs as soon as it is defined.
// Often used to avoid polluting the global namespace.

console.log("\n--- IIFE ---");
(function() {
    let localMsg = "I run immediately!";
    console.log(localMsg); // Output: I run immediately!
})();


// ==========================================
// 5. Scope in Functions
// ==========================================
// Global Scope: Variables declared outside any function can be accessed anywhere.
// Local/Function Scope: Variables declared inside a function can only be accessed within that function.

console.log("\n--- Scope ---");
let globalVar = "I am global";

function scopeTest() {
    let localVar = "I am local to scopeTest";
    console.log(globalVar); // Accessible! Output: I am global
    console.log(localVar);  // Accessible! Output: I am local to scopeTest
}

scopeTest();

// console.log(localVar); // Throws ReferenceError: localVar is not defined
