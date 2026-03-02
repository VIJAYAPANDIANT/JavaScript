//Primitive Data Type

//1. Number
var a=10;
console.log(a);  //10

//2. String
var b="Hello World";
console.log(b);  //Hello World

let i="vj123@gmail.com";
console.log(i);  //vj123@gmail.com

//3. Boolean
var c=true;
console.log(c);  //true

//4. Undefined
var d;
console.log(d);  //undefined

//5. Null
var e=null;
console.log(e);  //null

//6. Symbol
var f=Symbol("Hello");
console.log(f);  //Symbol(Hello)

//7. BigInt
var g=BigInt(1234567890123456789012345678901234567890);
console.log(g);  //1234567890123456789012345678901234567890n

//Non-Primitive Data Type   

//1. Object
var h={name:"John", age:30};
console.log(h);  // {name: "John", age: 30}

//2. Array
var j=[1,2,3,4,5];
console.log(j);  //1,2,3,4,5

//3. Function
var k=function(){
    console.log("Hello");
}
console.log(k);  //Hello

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