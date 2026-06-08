// ==========================================
// TOPIC: The 'this' Keyword & Function Binding
// ==========================================

/*
Definition:
In JavaScript, the `this` keyword refers to the object that is executing the current piece of code. 
Unlike variables, the value of `this` is not static; it is determined dynamically based on how a function is called.

Rules of 'this' Binding:
1. Default Binding (Global context or undefined in strict mode)
2. Implicit Binding (When a function is called as a method of an object)
3. New Binding (When a function is called as a constructor using 'new')
4. Explicit Binding (Using call(), apply(), and bind() to manually set 'this')

================================================================================
SYNTAX REFERENCE
================================================================================
// Explicit Binding
// 1. call: passes arguments individually
fn.call(thisArg, arg1, arg2, ...);

// 2. apply: passes arguments as an array
fn.apply(thisArg, [arg1, arg2, ...]);

// 3. bind: returns a new function with bound context
const boundFn = fn.bind(thisArg, arg1, arg2, ...);

// New Binding (constructor)
function Person(name) {
    this.name = name;
}
const p = new Person("Vijay");
*/


// ==========================================
// 1. Implicit Binding
// ==========================================
// When a function is called as a method of an object, `this` points to the object before the dot.

console.log("--- Implicit Binding ---");

const user = {
    name: "Vijay",
    greet() {
        console.log(`Hello, my name is ${this.name}`); // 'this' refers to the 'user' object
    }
};

user.greet(); // Output: Hello, my name is Vijay


// ==========================================
// 2. Default & Arrow Function Binding
// ==========================================
// In global execution, `this` refers to the window (browser) or global (Node.js) object.
// In strict mode (`"use strict";`), default binding of `this` is `undefined`.
// Arrow functions do NOT have their own `this`. Instead, they inherit `this` from their lexical scope.

console.log("\n--- Arrow Functions & 'this' ---");

const group = {
    title: "Developers",
    members: ["Alice", "Bob"],
    showMembers() {
        // Arrow function inherits 'this' from showMembers context (which is group)
        this.members.forEach((member) => {
            console.log(`${member} is in group: ${this.title}`);
        });
    }
};

group.showMembers();
/*
Output:
Alice is in group: Developers
Bob is in group: Developers
*/


// ==========================================
// 3. Explicit Binding (call, apply, bind)
// ==========================================
// JavaScript allows us to explicitly set what `this` refers to using three utility methods:

console.log("\n--- Explicit Binding: call, apply, bind ---");

const person1 = { name: "John" };
const person2 = { name: "Sara" };

function introduce(hobby, city) {
    console.log(`Hi, I'm ${this.name}. I like ${hobby} and live in ${city}.`);
}

// A. call(): Invokes the function immediately, passing the 'this' value first, followed by comma-separated arguments.
introduce.call(person1, "Coding", "New York");
// Output: Hi, I'm John. I like Coding and live in New York.

// B. apply(): Invokes the function immediately, passing the 'this' value first, but arguments are passed as an array.
introduce.apply(person2, ["Painting", "Paris"]);
// Output: Hi, I'm Sara. I like Painting and live in Paris.

// C. bind(): Does NOT invoke the function immediately. Instead, it returns a new copy of the function with the 'this' value permanently bound.
const boundIntroduce = introduce.bind(person1, "Gaming", "Tokyo");
boundIntroduce(); // Invoke the bound function
// Output: Hi, I'm John. I like Gaming and live in Tokyo.
