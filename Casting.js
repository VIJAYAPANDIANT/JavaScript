// ==========================================
// TOPIC: Type Casting & Conversion in JavaScript
// ==========================================

/*
================================================================================
1. DEEP DEFINITION
================================================================================
Type Casting refers to converting a value of one data type into another.
There are two types of conversion in JavaScript:

1. Implicit Conversion (Type Coercion): 
   JavaScript automatically converts one data type to another behind the scenes 
   when operations involve mismatched types.
2. Explicit Conversion (Type Casting): 
   The developer manually converts a type using built-in methods/constructors 
   (like Number(), String(), Boolean(), parseInt()).

================================================================================
2. SYNTAX REFERENCE
================================================================================
// Explicit Casting to Number
Number(value);
parseInt(value);
parseFloat(value);

// Explicit Casting to String
String(value);
value.toString();

// Explicit Casting to Boolean
Boolean(value);

// Checking for NaN
isNaN(value);
*/


// ==========================================
// 1. Implicit Conversion (Type Coercion)
// ==========================================
// JS tries to run the operation by guessing the correct target type.

console.log("=== 1. IMPLICIT COERCION ===");

// String Coercion (numbers converted to strings when added to a string)
let result1 = "5" + 2; 
console.log(result1, typeof result1); // Output: "52" (string)

// Numeric Coercion (strings converted to numbers for subtraction, multiplication, division)
let result2 = "5" - 2; 
console.log(result2, typeof result2); // Output: 3 (number)

let result3 = "5" * "2"; 
console.log(result3, typeof result3); // Output: 10 (number)

// Boolean Coercion (evaluating truthy/falsy values in conditions)
if ("hello") {
    console.log("Non-empty strings are truthy!"); // Output: Non-empty strings are truthy!
}


// ==========================================
// 2. Explicit Conversion (Type Casting)
// ==========================================
// Converting types manually for deterministic program flow.

console.log("\n=== 2. EXPLICIT CASTING ===");

// A. Converting to Number
let strNum = "123.45";
let castedNum1 = Number(strNum);      // Convert to floating point
let castedNum2 = parseInt(strNum);    // Parse as Integer
let castedNum3 = parseFloat(strNum);  // Parse as Float

console.log(castedNum1, typeof castedNum1); // Output: 123.45 'number'
console.log(castedNum2, typeof castedNum2); // Output: 123 'number'
console.log(castedNum3, typeof castedNum3); // Output: 123.45 'number'

// B. Converting to String
let activeCode = 200;
let castedStr1 = String(activeCode);
let castedStr2 = activeCode.toString();

console.log(castedStr1, typeof castedStr1); // Output: "200" 'string'
console.log(castedStr2, typeof castedStr2); // Output: "200" 'string'

// C. Converting to Boolean
// Falsy values: 0, "", null, undefined, NaN, false. Everything else is truthy.
console.log(Boolean(0));          // Output: false
console.log(Boolean("Hello"));    // Output: true
console.log(Boolean(null));       // Output: false


// ==========================================
// 3. Special Case: NaN (Not-a-Number)
// ==========================================
// If JavaScript fails to cast a value into a valid number, it returns NaN.

console.log("\n=== 3. NaN (NOT-A-NUMBER) ===");

let failedCast = Number("abc");
console.log(failedCast); // Output: NaN
console.log(typeof failedCast); // Output: "number" (NaN is technically of type number!)
console.log(isNaN(failedCast)); // Output: true
