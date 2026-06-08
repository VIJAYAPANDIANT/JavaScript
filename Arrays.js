// ==========================================
// TOPIC: Arrays in JavaScript
// ==========================================

/*
Definition:
An array is a special variable that can hold more than one value at a time.
In JavaScript, arrays are zero-indexed ordered lists that can dynamically resize and hold values of different data types.

Common Operations:
1. Creating & Accessing elements
2. Modifying elements (push, pop, shift, unshift)
3. Iteration & Searching (forEach, indexOf, includes)
4. Advanced Array Methods (map, filter, reduce)
*/


// ==========================================
// 1. Creating and Accessing Arrays
// ==========================================
console.log("--- Creating & Accessing ---");

// Creating an array of strings
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing by index (0-based)
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry

// Array Length
console.log(fruits.length); // Output: 3


// ==========================================
// 2. Modifying Arrays (Adding/Removing Items)
// ==========================================
console.log("\n--- Modifying Arrays ---");

// push(): Add elements to the end
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// pop(): Remove the last element
let removedEnd = fruits.pop();
console.log(removedEnd); // Output: Date
console.log(fruits);     // Output: ["Apple", "Banana", "Cherry"]

// shift(): Remove the first element
let removedStart = fruits.shift();
console.log(removedStart); // Output: Apple
console.log(fruits);       // Output: ["Banana", "Cherry"]

// unshift(): Add elements to the beginning
fruits.unshift("Apricot");
console.log(fruits); // Output: ["Apricot", "Banana", "Cherry"]


// ==========================================
// 3. Iterating Arrays
// ==========================================
console.log("\n--- Iterating Arrays ---");

// using forEach: Executes a provided function once for each array element.
fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});
/*
Output:
0: Apricot
1: Banana
2: Cherry
*/


// ==========================================
// 4. Advanced Array Methods (map, filter, reduce)
// ==========================================
console.log("\n--- Advanced Methods (map, filter, reduce) ---");

let numbers = [1, 2, 3, 4, 5];

// map(): Creates a new array with the results of calling a function on every element.
// Example: Square each number
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter(): Creates a new array with all elements that pass the test implemented by the function.
// Example: Get only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce(): Executes a reducer function on each element, resulting in a single output value.
// Example: Sum all numbers (accumulator starts at 0)
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
