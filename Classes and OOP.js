// ==========================================
// TOPIC: Classes & Object-Oriented Programming (OOP) in JavaScript
// ==========================================

/*
================================================================================
1. DEEP DEFINITION of OOP & Classes in JavaScript
================================================================================
Object-Oriented Programming (OOP) is a programming paradigm (a way of designing code) 
that organizes software design around data, or "objects", rather than functions and logic. 

In JavaScript:
- A Class is a blueprint or template for creating objects. It defines what properties (data) 
  and methods (actions) the created objects will have.
- JavaScript classes were introduced in ES6 (2015). Under the hood, they are NOT true 
  classes like in Java or C++; they are "syntactical sugar" over JavaScript's existing 
  prototype-based inheritance system.
- An Instance is an individual object created from a class template using the `new` keyword.

================================================================================
2. THE FOUR PILLARS OF OOP
================================================================================
1. Encapsulation: Grouping data (properties) and methods that operate on that data into 
   a single unit (Class), and restricting direct access to some of the object's components 
   (using private fields `#` and getters/setters).
2. Inheritance: Creating a hierarchy where a child class inherits properties and methods 
   from a parent class, promoting code reusability.
3. Polymorphism: "Many forms". The ability of different classes to respond to the same 
   method call in their own unique way (e.g., overriding inherited parent methods).
4. Abstraction: Hiding complex implementation details and showing only the essential 
   features to the user.
*/


// ==========================================
// PILLAR 1 & 4: Encapsulation & Abstraction (Class, Constructor, Private Fields, Getters/Setters)
// ==========================================
/*
Explanation:
- We define a class `BankAccount`.
- We use private fields (`#balance`, `#accountHolder`) so they cannot be accessed or modified 
  directly from outside the class. This is Encapsulation.
- We expose get/set methods (Getters and Setters) to allow controlled, validated access to these variables.
- The constructor initializes the object when we run `new BankAccount(...)`.
*/

console.log("=== 1. ENCAPSULATION & ABSTRACTION (Classes & Private Fields) ===");

class BankAccount {
    // 1. Declare Private Fields (must start with '#')
    #accountHolder;
    #balance;

    // 2. The Constructor: Initializes properties when a new object is instantiated
    constructor(holderName, initialDeposit) {
        this.#accountHolder = holderName;
        // Validation during initialization
        if (initialDeposit >= 0) {
            this.#balance = initialDeposit;
        } else {
            this.#balance = 0;
            console.log("Initial deposit cannot be negative. Balance set to $0.");
        }
    }

    // 3. Getter Method: Allows reading the private balance property
    get balance() {
        return this.#balance;
    }

    // 4. Setter Method: Allows modifying the private balance property with validation
    set balance(newAmount) {
        if (newAmount >= 0) {
            this.#balance = newAmount;
        } else {
            console.log("Error: Balance cannot be negative!");
        }
    }

    // 5. Public Method: Exposes behavior (Abstraction - hides how deposit calculation works)
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Successfully deposited $${amount} for ${this.#accountHolder}.`);
        } else {
            console.log("Error: Deposit amount must be positive.");
        }
    }
}

// --- Program Execution ---
const myAccount = new BankAccount("Vijay", 500);

// Using the deposit method
myAccount.deposit(150); 
// Output: Successfully deposited $150 for Vijay.

// Accessing via Getter
console.log(`Current Balance: $${myAccount.balance}`); 
// Output: Current Balance: $650

// Updating via Setter
myAccount.balance = 800; // Triggers the 'set balance(newAmount)' method
console.log(`Updated Balance: $${myAccount.balance}`); 
// Output: Updated Balance: $800

// Attempting invalid updates
myAccount.balance = -100; 
// Output: Error: Balance cannot be negative!

// Attempting direct access to private property
// console.log(myAccount.#balance); 
// Output: SyntaxError: Private field '#balance' must be declared in an enclosing class


// ==========================================
// PILLAR 2 & 3: Inheritance & Polymorphism (extends, super, Method Overriding)
// ==========================================
/*
Explanation:
- `Animal` is the Parent (Super) Class.
- `Dog` and `Cat` are Child (Sub) Classes that inherit from `Animal` using the `extends` keyword.
- In child constructors, we MUST call `super()` to execute the parent class constructor first.
- Both `Dog` and `Cat` implement their own versions of `makeSound()`. This is Polymorphism.
*/

console.log("\n=== 2. INHERITANCE & POLYMORPHISM (extends, super, and Overriding) ===");

// Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic animal sound.");
    }
}

// Child Class 1 (Inherits Animal)
class Dog extends Animal {
    constructor(name, breed) {
        // 'super' refers to parent constructor. It passes 'name' up to Animal class.
        super(name); 
        this.breed = breed;
    }

    // Method Overriding: Changing parent method's behavior specifically for Dog (Polymorphism)
    makeSound() {
        console.log(`${this.name} (the ${this.breed}) says: Woof! Woof!`);
    }
}

// Child Class 2 (Inherits Animal)
class Cat extends Animal {
    // If no constructor is defined in a child class, it automatically calls super() with parent arguments.
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}

// --- Program Execution ---
const petDog = new Dog("Buddy", "Labrador");
const petCat = new Cat("Whiskers");

petDog.makeSound(); 
// Output: Buddy (the Labrador) says: Woof! Woof!

petCat.makeSound(); 
// Output: Whiskers says: Meow!


// ==========================================
// FEATURE: Static Methods & Properties
// ==========================================
/*
Explanation:
- Static members are defined using the `static` keyword.
- They belong to the Class blueprint itself, NOT to individual instance objects.
- They are typically used for helper functions or initial configurations.
*/

console.log("\n=== 3. STATIC METHODS & PROPERTIES ===");

class MathOperations {
    // Static property
    static PI = 3.14159;

    // Static method
    static calculateCircleArea(radius) {
        // 'this' inside static methods refers to the Class itself (MathOperations)
        return this.PI * (radius ** 2);
    }
}

// --- Program Execution ---
// We call static members directly using the Class name, without creating an instance with 'new'
console.log(`PI Constant: ${MathOperations.PI}`); 
// Output: PI Constant: 3.14159

console.log(`Area of radius 4 circle: ${MathOperations.calculateCircleArea(4)}`); 
// Output: Area of radius 4 circle: 50.26544

// Trying to call on an instance:
// const mathObj = new MathOperations();
// console.log(mathObj.calculateCircleArea(4)); 
// Output: TypeError: mathObj.calculateCircleArea is not a function
