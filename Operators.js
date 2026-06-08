// ==========================================
// TOPIC: Operators in JavaScript
// ==========================================

/*
Definition:
An operator in JavaScript is a special symbol used to perform operations on operands (variables and values).
For example, in the expression 5 + 2, the '+' is the operator and '5' and '2' are the operands.

Types of Operators:
1. Arithmetic Operators (Perform mathematical calculations)
2. Assignment Operators (Assign values to variables)
3. Comparison (Relational) Operators (Compare two values and return a boolean)
4. Logical Operators (Determine logic between variables/values)
5. Bitwise Operators (Operate on binary/bit level representation of numbers)
6. Ternary (Conditional) Operator (Shorthand for if-else statement)
7. String Operators (Operators used specifically for string manipulation)
8. Type Operators (Verify or convert types of data)
*/


// ==========================================
// 1. Arithmetic Operators
// ==========================================
// Used to perform arithmetic on numbers.
// Operators: +, -, *, /, %, ++, --, **

let x = 10;
let y = 3;

console.log("--- Arithmetic Operators ---");
console.log(x + y);  // Output: 13  (Addition)
console.log(x - y);  // Output: 7   (Subtraction)
console.log(x * y);  // Output: 30  (Multiplication)
console.log(x / y);  // Output: 3.3333333333333335 (Division)
console.log(x % y);  // Output: 1   (Modulus - Remainder of division)
console.log(x ** y); // Output: 1000 (Exponentiation - 10 to the power of 3)

// Increment & Decrement
let z = 5;
z++; // Post-increment: adds 1 to z
console.log(z); // Output: 6

let w = 5;
w--; // Post-decrement: subtracts 1 from w
console.log(w); // Output: 4


// ==========================================
// 2. Assignment Operators
// ==========================================
// Used to assign values to variables.
// Operators: =, +=, -=, *=, /=, %=, **=

console.log("\n--- Assignment Operators ---");
let a = 10; // Assignment (=)
a += 5;     // Same as: a = a + 5
console.log(a); // Output: 15

a -= 3;     // Same as: a = a - 3
console.log(a); // Output: 12

a *= 2;     // Same as: a = a * 2
console.log(a); // Output: 24

a /= 4;     // Same as: a = a / 4
console.log(a); // Output: 6


// ==========================================
// 3. Comparison Operators
// ==========================================
// Used in logical statements to determine equality or difference between variables/values.
// Returns: true or false
// Operators: ==, ===, !=, !==, >, <, >=, <=

console.log("\n--- Comparison Operators ---");
let num1 = 5;
let num2 = "5";

console.log(num1 == num2);  // Output: true  (Loose Equality - compares value only, performs type conversion)
console.log(num1 === num2); // Output: false (Strict Equality - compares both value AND type)
console.log(num1 != num2);  // Output: false (Loose Inequality)
console.log(num1 !== num2); // Output: true  (Strict Inequality)

console.log(10 > 5);   // Output: true  (Greater than)
console.log(10 < 5);   // Output: false (Less than)
console.log(10 >= 10); // Output: true  (Greater than or equal to)
console.log(10 <= 5);  // Output: false (Less than or equal to)


// ==========================================
// 4. Logical Operators
// ==========================================
// Used to determine the logic between variables or values.
// Operators: && (Logical AND), || (Logical OR), ! (Logical NOT)

console.log("\n--- Logical Operators ---");
let hasLicense = true;
let isSober = false;

// Logical AND (&&): Returns true if BOTH conditions are true
console.log(hasLicense && isSober); // Output: false

// Logical OR (||): Returns true if AT LEAST ONE condition is true
console.log(hasLicense || isSober); // Output: true

// Logical NOT (!): Reverses the boolean state (negation)
console.log(!hasLicense); // Output: false


// ==========================================
// 5. Ternary (Conditional) Operator
// ==========================================
// Shorthand for an if-else statement.
// Syntax: condition ? expressionIfTrue : expressionIfFalse

console.log("\n--- Ternary Operator ---");
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log(canVote); // Output: Yes, can vote


// ==========================================
// 6. String Operators
// ==========================================
// The '+' operator can also be used to concatenate (join) strings.
// The '+=' operator can append strings together.

console.log("\n--- String Operators ---");
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenation
console.log(fullName); // Output: John Doe

let greeting = "Hello ";
greeting += "World!"; // Append
console.log(greeting); // Output: Hello World!


// ==========================================
// 7. Type Operators
// ==========================================
// Used to check the type of a variable or check inheritance.
// Operators: typeof, instanceof

console.log("\n--- Type Operators ---");
console.log(typeof "Hello"); // Output: string
console.log(typeof 42);      // Output: number
console.log(typeof true);    // Output: boolean
console.log(typeof {});      // Output: object
