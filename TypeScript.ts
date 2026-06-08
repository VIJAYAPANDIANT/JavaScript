// ==========================================
// TOPIC: TypeScript Basics (Types, Interfaces, & Generics)
// ==========================================

/*
Definition:
TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript.
It adds static type definitions to check for errors during development, rather than 
discovering type errors at runtime.

Key Core Structures:
1. Basic Types (Type Annotations)
2. Interfaces (Defining Object structures)
3. Generics (Reusable, type-parameterized components)

================================================================================
SYNTAX REFERENCE
================================================================================
// Variable Type Annotation
let name: string = "Vijay";
let list: number[] = [1, 2, 3];
let union: string | number = 42;

// Interface
interface User {
    readonly id: number;
    name: string;
    email?: string;
}

// Type Alias
type Point = { x: number; y: number; };

// Generic Function
function identity<T>(arg: T): T { return arg; }
*/


// ==========================================
// 1. Basic Type Annotations
// ==========================================
// Annotations verify that a variable only accepts values of the designated type.

let isCompleted: boolean = false;
let userAge: number = 21;
let devName: string = "Vijay";

// Arrays:
let marks: number[] = [85, 90, 95];
let skills: Array<string> = ["JS", "TS"]; // Generic array type representation

// Union Types (Variable can accept multiple designated types):
let userId: number | string = "user_101";
userId = 101; // Permitted


// ==========================================
// 2. Interfaces vs Types
// ==========================================
// - Interfaces describe the shape of an object and support extension (inheritance).
// - Type aliases can represent primitives, unions, and tuples.

// A. Interfaces:
interface Person {
    readonly id: number; // Cannot be modified after initialization
    name: string;
    email?: string;       // Optional property
}

// Inheriting from an Interface
interface Employee extends Person {
    role: string;
}

const developer: Employee = {
    id: 1,
    name: "Vijay",
    role: "Fullstack Developer"
    // email is optional, omitting it is allowed
};

// B. Type Aliases:
type Coordinate = {
    x: number;
    y: number;
};

const point: Coordinate = { x: 10, y: 20 };


// ==========================================
// 3. Generics (<T>)
// ==========================================
// Generics allow us to create reusable, flexible code components that work 
// with a variety of types, while still preserving type safety.

// A. Generic Function:
// The type parameter <T> is defined when the function is invoked
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirstElement<number>([10, 20, 30]); // returns number
const firstString = getFirstElement<string>(["Apple", "Banana"]); // returns string


// B. Generic Interface:
interface ApiResponse<DataStructure> {
    status: number;
    success: boolean;
    data: DataStructure; // Dynamic data type resolved at declaration
}

interface UserData {
    username: string;
    email: string;
}

const response: ApiResponse<UserData> = {
    status: 200,
    success: true,
    data: {
        username: "vj123",
        email: "vj@example.com"
    }
};
