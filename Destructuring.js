// ==========================================
// TOPIC: Destructuring & Spread/Rest (ES6+)
// ==========================================

/*
Definition:
1. Destructuring: A special syntax that allows us to "unpack" values from arrays, or properties from objects, 
   into distinct variables.
2. Spread Operator (...): Unpacks elements of an array or properties of an object.
3. Rest Parameter (...): Bundles multiple elements/arguments into a single array.

================================================================================
SYNTAX REFERENCE
================================================================================
// Array Destructuring
const [item1, item2, ...restItems] = array;
const [firstItem, , thirdItem] = array; // skipping second item

// Object Destructuring
const { key1, key2: customName, key3 = defaultValue } = object;

// Spread Operator
const newArr = [...oldArr, newItem];
const newObj = { ...oldObj, newKey: value };

// Rest Parameter
function funcName(param1, ...remainingParamsArray) { ... }
*/


// ==========================================
// 1. Array Destructuring
// ==========================================
console.log("--- Array Destructuring ---");

const rgb = [255, 128, 0];

// Basic assignment:
const [r, g, b] = rgb;
console.log(`Red: ${r}, Green: ${g}, Blue: ${b}`); // Output: Red: 255, Green: 128, Blue: 0

// Skipping elements:
const [red, , blue] = rgb;
console.log(`Red: ${red}, Blue: ${blue}`); // Output: Red: 255, Blue: 0

// Default values:
const [first, second, third, fourth = 255] = rgb;
console.log(fourth); // Output: 255 (uses default since index 3 doesn't exist)


// ==========================================
// 2. Object Destructuring
// ==========================================
console.log("\n--- Object Destructuring ---");

const developer = {
    fullName: "Vijay",
    language: "JavaScript",
    experience: 3
};

// Basic assignment (variable names must match key names)
const { fullName, language } = developer;
console.log(`${fullName} codes in ${language}`); // Output: Vijay codes in JavaScript

// Assigning to new variable names
const { fullName: devName, experience: years } = developer;
console.log(`${devName} has ${years} years of experience`); // Output: Vijay has 3 years of experience

// Default values
const { role = "Software Engineer" } = developer;
console.log(role); // Output: Software Engineer (uses default since 'role' key is missing)


// ==========================================
// 3. Spread Operator (...)
// ==========================================
// Unpacks/spreads elements of an array or properties of an object into a new container.

console.log("\n--- Spread Operator (...) ---");

// Spreading arrays:
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Cherry", "Date"];
const combinedFruits = [...fruits1, ...fruits2, "Elderberry"];
console.log(combinedFruits); // Output: [ 'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry' ]

// Spreading objects:
const baseUser = { name: "User1", active: true };
const adminUser = { ...baseUser, role: "Admin" }; // Shallow copy and extend
console.log(adminUser); // Output: { name: 'User1', active: true, role: 'Admin' }


// ==========================================
// 4. Rest Parameter (...)
// ==========================================
// Bundles arguments or array items together. Used in function parameters and destructuring.

console.log("\n--- Rest Parameter (...) ---");

// A. In function definitions (to accept variable number of arguments as an array)
function sumAll(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// B. In destructuring (to gather remaining elements/properties)
const numbers = [10, 20, 30, 40, 50];
const [firstNum, secondNum, ...remainingNums] = numbers;
console.log(firstNum);      // Output: 10
console.log(remainingNums); // Output: [ 30, 40, 50 ] (rest of the array)
