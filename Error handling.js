// ==========================================
// TOPIC: Error Handling in JavaScript
// ==========================================

/*
Definition:
No matter how good we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, 
unexpected user input, an erroneous server response, or any other reason.
Usually, a script stops (dies) immediately in case of an error, printing it to the console. 
JavaScript provides the `try...catch` statement to handle these errors gracefully and prevent the script from crashing.

Core Statements:
1. try - Code block where errors are tested
2. catch - Code block executed if an error occurs in the try block
3. finally - Code block executed after try and catch, regardless of the result
4. throw - Statement used to create/throw custom errors

================================================================================
SYNTAX REFERENCE
================================================================================
// Basic try-catch structure
try {
    // Code that might throw an error
} catch (error) {
    // Code to execute if an error occurs
    console.error(error.name, error.message);
}

// Complete try-catch-finally structure
try {
    // Code
} catch (error) {
    // Error handling
} finally {
    // Cleanup code (always runs)
}

// Throwing a custom error
throw new Error("Custom error message");
throw new TypeError("Type mismatch error");
*/


// ==========================================
// 1. Basic try...catch Block
// ==========================================
console.log("--- Basic try...catch ---");

try {
    console.log("Start of try block");
    
    // Calling a variable/function that doesn't exist to force an error
    nonExistentFunction();
    
    console.log("End of try block (this will not run)");
} catch (error) {
    console.log("An error occurred!");
    // The error object contains properties like 'name' and 'message'
    console.log("Error Name: " + error.name);       // Output: ReferenceError
    console.log("Error Message: " + error.message); // Output: nonExistentFunction is not defined
}

console.log("The execution continues smoothly..."); // The script doesn't die!


// ==========================================
// 2. The throw Operator (Custom Errors)
// ==========================================
// The throw operator generates a user-defined error.
// The execution of the current function will stop (the statements after throw won't be executed).

console.log("\n--- Custom Errors using throw ---");

function checkAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative."); // Creates and throws a custom Error object
    } else if (age < 18) {
        return "Access Denied (Underage)";
    }
    return "Access Granted";
}

try {
    console.log(checkAge(20)); // Output: Access Granted
    console.log(checkAge(-5)); // This will fail and throw an error
    console.log("This line won't run");
} catch (error) {
    console.log("Caught custom error: " + error.message); // Output: Caught custom error: Age cannot be negative.
}


// ==========================================
// 3. The finally Clause
// ==========================================
// The finally block contains code that always executes, regardless of whether an error was thrown or caught.
// Common use cases: Closing files, ending database connections, hiding loading spinners.

console.log("\n--- try...catch...finally ---");

try {
    console.log("Executing some actions...");
    // Let's force an error
    let x = y + 10; 
} catch (err) {
    console.log("Error caught: " + err.message);
} finally {
    console.log("Finally block: I will run no matter what happens above!");
}
/*
Output:
Executing some actions...
Error caught: y is not defined
Finally block: I will run no matter what happens above!
*/
