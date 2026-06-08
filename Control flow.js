// ==========================================
// TOPIC: Control Flow in JavaScript
// ==========================================

/*
Definition:
Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated in a computer program. 
By default, JavaScript runs code line-by-line from top to bottom. Control flow statements allow us to modify this execution path based on conditions or repetitions.

Types of Control Flow Structures:
1. Conditional Statements (Decision Making: if, else if, else, switch)
2. Loops (Repetitive Execution: for, while, do-while)
3. Control Statements (Altering loops: break, continue)

================================================================================
SYNTAX REFERENCE
================================================================================
// Conditional Statement
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}

// Switch Statement
switch (expression) {
    case value1:
        // code
        break;
    default:
        // code
}

// For Loop
for (initialization; condition; afterthought) {
    // code
}

// While Loop
while (condition) {
    // code
}

// Do-While Loop
do {
    // code
} while (condition);

// Control statements
break;
continue;
*/


// ==========================================
// 1. Conditional Statements (if, else if, else)
// ==========================================
// Used to perform different actions based on different conditions.

console.log("--- Conditional Statements (if/else) ---");
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // Output since score is 85
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// ==========================================
// 2. Switch Statement
// ==========================================
// Used to select one of many code blocks to be executed. Best used when comparing a single variable against multiple exact values.

console.log("\n--- Switch Statement ---");
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday"; // Executed because dayNumber is 3
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Weekend!";
}
console.log("Today is: " + dayName); // Output: Today is: Wednesday


// ==========================================
// 3. For Loop
// ==========================================
// Repeats a block of code a specified number of times.
// Syntax: for (initialization; condition; increment/decrement)

console.log("\n--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}
/*
Output:
Iteration number: 1
Iteration number: 2
Iteration number: 3
Iteration number: 4
Iteration number: 5
*/


// ==========================================
// 4. While Loop
// ==========================================
// Loops through a block of code as long as a specified condition is true.
// Note: Ensure the loop has a way to terminate to avoid infinite loops!

console.log("\n--- While Loop ---");
let count = 1;
while (count <= 3) {
    console.log("Count is: " + count);
    count++; // Increment count to eventually break the loop
}
/*
Output:
Count is: 1
Count is: 2
Count is: 3
*/


// ==========================================
// 5. Do-While Loop
// ==========================================
// A variant of the while loop that executes the code block ONCE before checking if the condition is true. 
// It then repeats the loop as long as the condition is true.

console.log("\n--- Do-While Loop ---");
let num = 5;
do {
    console.log("This will print at least once, current value: " + num);
    num++;
} while (num < 5);
// Output: This will print at least once, current value: 5 (since condition is false, it stops)


// ==========================================
// 6. Break and Continue
// ==========================================
// break: Exits out of a loop immediately.
// continue: Skips the current iteration of a loop and moves to the next iteration.

console.log("\n--- Break and Continue ---");

console.log("Using continue to skip number 3:");
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        continue; // Skip the rest of the code block for this iteration
    }
    console.log(k);
}
/*
Output:
1
2
4
5
*/

console.log("Using break to stop loop when it reaches 3:");
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        break; // Stop and exit the loop
    }
    console.log(k);
}
/*
Output:
1
2
*/
