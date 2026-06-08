// ==========================================
// TOPIC: Objects in JavaScript
// ==========================================

/*
Definition:
An object is a standalone entity, with properties and type. Compare it with a cup, for example. 
A cup has properties like color, design, weight, material it is made of, etc.
In JavaScript, an object is a collection of key-value pairs (properties), where keys are strings (or symbols) and values can be any type, including functions (methods).

Common Topics:
1. Creating Objects & Accessing Properties (Dot vs Bracket notation)
2. Modifying Properties (Add, Edit, Delete)
3. Object Methods (Functions inside objects)
4. Object Keys, Values, and Entries

================================================================================
SYNTAX REFERENCE
================================================================================
// Creation
let obj = {
    key1: value1,
    key2: value2,
    methodName() { ... }
};

// Accessing properties
obj.key1;       // Dot notation
obj["key1"];    // Bracket notation

// Deleting properties
delete obj.key1;

// Object utility methods
Object.keys(obj);    // Returns array of keys
Object.values(obj);  // Returns array of values
Object.entries(obj); // Returns array of [key, value] pairs
*/


// ==========================================
// 1. Creating and Accessing Objects
// ==========================================
console.log("--- Creating & Accessing ---");

// Creating a literal object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    city: "New York"
};

// Accessing properties using dot notation
console.log(person.firstName); // Output: John

// Accessing properties using bracket notation (useful for dynamic keys)
console.log(person["lastName"]); // Output: Doe

let propToAccess = "age";
console.log(person[propToAccess]); // Output: 25


// ==========================================
// 2. Modifying Object Properties
// ==========================================
console.log("\n--- Modifying Properties ---");

// Adding a new property
person.email = "john.doe@example.com";

// Updating an existing property
person.age = 26;

console.log(person);
// Output: { firstName: 'John', lastName: 'Doe', age: 26, city: 'New York', email: 'john.doe@example.com' }

// Deleting a property
delete person.city;
console.log(person.city); // Output: undefined


// ==========================================
// 3. Object Methods
// ==========================================
// A method is a function defined as a property of an object.
// We use the `this` keyword to access other properties inside the same object.

console.log("\n--- Object Methods ---");

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    getCarDetails: function() {
        return this.brand + " " + this.model + " (" + this.year + ")";
    }
};

console.log(car.getCarDetails()); // Output: Toyota Corolla (2022)


// ==========================================
// 4. Object Utility Methods (Keys, Values, Entries)
// ==========================================
// JavaScript provides global Object methods to extract information from objects.

console.log("\n--- Object Keys, Values, and Entries ---");

let user = {
    username: "coder123",
    role: "Admin",
    status: "Active"
};

// Object.keys(): Returns an array of keys
console.log(Object.keys(user)); // Output: ['username', 'role', 'status']

// Object.values(): Returns an array of values
console.log(Object.values(user)); // Output: ['coder123', 'Admin', 'Active']

// Object.entries(): Returns an array of key-value pairs (nested arrays)
console.log(Object.entries(user)); 
/*
Output:
[
  [ 'username', 'coder123' ],
  [ 'role', 'Admin' ],
  [ 'status', 'Active' ]
]
*/
