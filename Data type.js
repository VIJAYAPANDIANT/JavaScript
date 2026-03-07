//Primitive Data Type

//Primitive data type is a data type that is not an object. It is a single value.

//There are 7 primitive data types in JavaScript.It is immutable.It is not changeable.


//1. Number

//Number is a data type that is used to store numbers. It is a floating-point number.

var a=10;
console.log(a);  //10

//2. String

//String is a data type that is used to store strings. It is a sequence of characters.

var b="Hello World";
console.log(b);  //Hello World

let i="vj123@gmail.com";
console.log(i);  //vj123@gmail.com

//3. Boolean

//Boolean is a data type that is used to store boolean values. It is a true or false value.

var c=true;
console.log(c);  //true

//4. Undefined

//Undefined is a data type that is used to store undefined values. It is a value that is not defined.

var d;
console.log(d);  //undefined

//5. Null

//Null is a data type that is used to store null values. It is a value that is not defined.

var e=null;
console.log(e);  //null

//6. Symbol

//Symbol is a data type that is used to store symbol values. It is a unique value.

var f=Symbol("Hello");
console.log(f);  //Symbol(Hello)

//7. BigInt

//BigInt is a data type that is used to store big integer values. It is a integer value.

var g=BigInt(1234567890123456789012345678901234567890);
console.log(g);  //1234567890123456789012345678901234567890n

//Non-Primitive Data Type 

//Non-primitive data type is a data type that is an object. It is not a single value.

//There are 3 non-primitive data types in JavaScript.It is mutable.It is changeable.    

//1. Object

//Object is a data type that is used to store object values. It is a collection of key-value pairs.

var h={name:"John", age:30};
console.log(h);  // {name: "John", age: 30}

//2. Array

//Array is a data type that is used to store array values. It is a collection of values.

var j=[1,2,3,4,5];
console.log(j);  //1,2,3,4,5

//3. Function

//Function is a data type that is used to store function values. It is a collection of statements.

var k=function(){
    console.log("Hello");
}
console.log(k);  //Hello

//typeof operator

//typeof operator is used to find the data type of a variable.

console.log(typeof a);  //number
console.log(typeof b);  //string
console.log(typeof c);  //boolean
console.log(typeof d);  //undefined
console.log(typeof e);  //object
console.log(typeof f);  //symbol
console.log(typeof g);  //bigint
console.log(typeof h);  //object
console.log(typeof j);  //object
console.log(typeof k);  //function  