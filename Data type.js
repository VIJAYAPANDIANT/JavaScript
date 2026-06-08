// ==========================================
// TOPIC: Data Types in JavaScript
// ==========================================

/*
================================================================================
1. DEEP DEFINITION
================================================================================
Data types describe the characteristics and behavior of a value. In JavaScript, 
values are typed, not the variables themselves (since JS is dynamically typed).
Variables can hold values of any type at any point.

JavaScript values are divided into two main categories:
1. Primitive Data Types: Stored directly by value in the Stack. They are immutable 
   (cannot be changed once created).
2. Non-Primitive (Reference) Data Types: Stored as references in the Heap. They are mutable.

================================================================================
2. PRIMITIVE DATA TYPES (7 Types)
================================================================================
1. Number: Represent double-precision 64-bit binary format IEEE 754 values (integers, floats, NaN, Infinity).
2. String: Character sequences representing textual data.
3. Boolean: Logical entity having only two values: `true` and `false`.
4. Undefined: Value automatically assigned to a variable that has been declared but not initialized.
5. Null: Intentional absence of any object value.
6. Symbol: A unique and immutable primitive value, often used as unique object keys.
7. BigInt: Represent integers with arbitrary precision (larger than 2^53 - 1).

================================================================================
3. NON-PRIMITIVE DATA TYPES (Reference Types)
================================================================================
1. Object: Collections of key-value pairs.
2. Array: Ordered lists of values (technically a special type of Object).
3. Function: Callable code blocks (technically objects with executable code).

================================================================================
4. SYNTAX REFERENCE
================================================================================
// Checking data type of a value
typeof value;

// Declaring Primitive Types
let num = 42;               // Number
let str = "Hello";          // String
let active = true;          // Boolean
let empty = null;           // Null
let undef;                  // Undefined (value is undefined)
let sym = Symbol("id");     // Symbol
let bigInt = 1234567890n;   // BigInt (ends with n)

// Declaring Non-Primitive Types
let obj = { key: "value" }; // Object
let arr = [1, 2, 3];        // Array
let fn = () => {};          // Function
*/


// ==========================================
// 1. Primitive Types Demo
// ==========================================
console.log("=== 1. PRIMITIVE DATA TYPES ===");

// Number
let num = 42;
let pi = 3.14159;
console.log(`Number values: ${num}, ${pi}`); // Output: 42, 3.14159

// String
let name = "Vijay";
console.log(`String value: ${name}`); // Output: Vijay

// Boolean
let isCoding = true;
console.log(`Boolean value: ${isCoding}`); // Output: true

// Undefined
let notAssigned;
console.log(`Undefined value: ${notAssigned}`); // Output: undefined

// Null
let emptyValue = null;
console.log(`Null value: ${emptyValue}`); // Output: null

// Symbol (Always guarantees uniqueness)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(`Symbols are unique: ${sym1 === sym2}`); // Output: false

// BigInt (Appended with 'n')
let bigIntNum = 9007199254740991n;
console.log(`BigInt: ${bigIntNum}`); // Output: 9007199254740991n


// ==========================================
// 2. Reference Types Demo & Mutability
// ==========================================
console.log("\n=== 2. REFERENCE DATA TYPES (MUTABILITY) ===");

// Object
let user = { username: "vj123", role: "Admin" };

// Arrays
let scores = [90, 85, 95];

// Demonstration of Referencing (Heap storage)
let secondaryUser = user; // Points to the same object reference in memory
secondaryUser.role = "SuperAdmin"; // Mutating via reference

console.log(user.role); 
// Output: SuperAdmin (The original object is changed because it is shared!)


// ==========================================
// 3. The 'typeof' Operator & JS Quirks
// ==========================================
// Used to inspect the type of a value.

console.log("\n=== 3. TYPE OF OPERATOR & QUIRKS ===");

console.log(typeof 100);        // Output: "number"
console.log(typeof "Text");     // Output: "string"
console.log(typeof true);       // Output: "boolean"
console.log(typeof undefined);  // Output: "undefined"
console.log(typeof Symbol());   // Output: "symbol"
console.log(typeof 10n);        // Output: "bigint"
console.log(typeof [1, 2]);     // Output: "object" (Arrays are sub-types of objects)
console.log(typeof (() => {})); // Output: "function"

// JS Quirk: typeof null returns "object". This is a historical bug in JavaScript, 
// kept for backward compatibility.
console.log(typeof null);       // Output: "object"