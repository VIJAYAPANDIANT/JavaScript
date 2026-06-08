// ==========================================
// TOPIC: Testing in JavaScript (Jest, Vitest, & TDD)
// ==========================================

/*
Definition:
Software testing is the process of verifying that our application behaves exactly as expected.
Instead of checking features manually, we write code (tests) to automatically verify assertions.

Key Testing Concepts:
1. Unit Testing: Testing individual functions or modules in isolation.
2. TDD (Test Driven Development): A design methodology where you write tests BEFORE writing code.
3. Test Runners: Jest (classic, popular framework) and Vitest (modern, fast framework built for Vite).
*/


// ==========================================
// 1. TDD (Test Driven Development) Cycle
// ==========================================
/*
The TDD workflow follows the "Red-Green-Refactor" cycle:
1. RED: Write a unit test asserting desired functionality. Run it and watch it fail (Red).
2. GREEN: Write the minimum amount of production code needed to make the test pass (Green).
3. REFACTOR: Clean up the code (remove duplicates, improve variables) while ensuring tests stay green.
*/


// ==========================================
// 2. Unit Testing syntax (Jest / Vitest)
// ==========================================
// Both Jest and Vitest share a very similar syntax for defining test blocks and assertions.

// A. Code to test (e.g., mathUtils.js)
function add(a, b) {
    return a + b;
}

function getGreeting(name) {
    if (!name) return "Hello, Guest!";
    return `Hello, ${name}!`;
}

// B. Test implementation (e.g., mathUtils.test.js)
/*
// (For Vitest, you import assertion functions first. Jest provides them globally)
// import { describe, test, expect } from "vitest";

describe("Math Utilities: add()", () => {
    test("should add positive integers correctly", () => {
        const result = add(2, 3);
        
        // Assertions using expect() and matchers
        expect(result).toBe(5); // .toBe uses Object.is (strict equality)
    });

    test("should handle negative integers correctly", () => {
        expect(add(-5, -5)).toBe(-10);
    });
});

describe("Greeting Utilities: getGreeting()", () => {
    test("should return guest greeting when name is empty", () => {
        expect(getGreeting("")).toBe("Hello, Guest!");
        expect(getGreeting(null)).toBe("Hello, Guest!");
    });

    test("should address user by name", () => {
        expect(getGreeting("Vijay")).toContain("Vijay"); // Check if name is included
    });
});
*/


// ==========================================
// 3. Common Matchers Reference
// ==========================================
/*
- expect(x).toBe(y)           // Strict equality (x === y)
- expect(obj).toEqual(target) // Deep checks values of object/array properties
- expect(arr).toContain(item) // Checks if array or string contains a value
- expect(x).toBeNull()        // Checks if x is null
- expect(x).toBeUndefined()   // Checks if x is undefined
- expect(x).toBeTruthy()      // Checks if x is truthy
- expect(fn).toThrow()        // Checks if a function throws an error when invoked
*/


// ==========================================
// 4. Running Tests
// ==========================================
/*
Configure package.json:
{
  "scripts": {
    "test": "jest"      // or "vitest"
  }
}

Run command in terminal:
$ npm run test
*/
