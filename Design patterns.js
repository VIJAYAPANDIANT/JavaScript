// ==========================================
// TOPIC: JavaScript Design Patterns
// ==========================================

/*
Definition:
Design patterns are reusable solutions to commonly occurring problems in software design. 
They act as templates that show how to structure code to solve problems cleanly and maintainably.

Patterns Covered:
1. Singleton Pattern (Restricts class instantiation to a single object instance)
2. Factory Pattern (Interface for creating objects without specifying their exact class)
3. Observer Pattern (Subscription model to notify multiple objects of state changes)
*/


// ==========================================
// 1. Singleton Pattern
// ==========================================
// Ensures a class has only one instance and provides a global point of access to it.
// Common Use Case: Database connection pools, application configuration managers.

console.log("--- 1. Singleton Pattern ---");

class DatabaseConnection {
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance; // Return existing instance
        }
        
        this.connectionString = "mongodb://localhost:27017/my_db";
        DatabaseConnection.instance = this; // Cache instance
    }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // Output: true (Both references point to the exact same instance!)


// ==========================================
// 2. Factory Pattern
// ==========================================
// Useful when we need to generate different instances of objects based on variable conditions.

console.log("\n--- 2. Factory Pattern ---");

class Developer {
    constructor(name) {
        this.name = name;
        this.type = "Developer";
    }
}

class Tester {
    constructor(name) {
        this.name = name;
        this.type = "Tester";
    }
}

class EmployeeFactory {
    static createEmployee(name, type) {
        switch (type) {
            case "dev":
                return new Developer(name);
            case "test":
                return new Tester(name);
            default:
                throw new Error("Invalid employee type.");
        }
    }
}

const emp1 = EmployeeFactory.createEmployee("Vijay", "dev");
const emp2 = EmployeeFactory.createEmployee("Sarah", "test");

console.log(`${emp1.name} is a ${emp1.type}`); // Output: Vijay is a Developer
console.log(`${emp2.name} is a ${emp2.type}`); // Output: Sarah is a Tester


// ==========================================
// 3. Observer Pattern
// ==========================================
// A subscription model where objects (observers) register to listen for events published by a Subject.
// Common Use Case: Event listeners, state management libraries (Redux, MobX).

console.log("\n--- 3. Observer Pattern ---");

class Subject {
    constructor() {
        this.observers = []; // Array of subscribing observer functions
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter(fn => fn !== fnToRemove);
    }

    notify(data) {
        this.observers.forEach(fn => fn(data));
    }
}

// Instantiate Subject
const newsAgency = new Subject();

// Create Observers
const observer1 = (news) => console.log(`Observer 1 received: ${news}`);
const observer2 = (news) => console.log(`Observer 2 received: ${news}`);

// Subscribe
newsAgency.subscribe(observer1);
newsAgency.subscribe(observer2);

// Notify all subscribers
newsAgency.notify("JavaScript ESNext released!");
/*
Output:
Observer 1 received: JavaScript ESNext released!
Observer 2 received: JavaScript ESNext released!
*/

// Unsubscribe
newsAgency.unsubscribe(observer2);
newsAgency.notify("Weather Update: Sunny");
/*
Output:
Observer 1 received: Weather Update: Sunny (Observer 2 does not receive since unsubscribed)
*/
