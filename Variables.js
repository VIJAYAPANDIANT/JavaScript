/*
var -> Variable(Declare variable)(Global Scope)(Can be re-declared)(Can be updated)(Can be initialized at the time of declaration)(Hoisting)
let -> Let(Declare variable)(Block Scope)( Can be re-declared)(Can be updated)(Can't be initialized at the time of declaration)(Hoisting)
const -> Constant(Declare constant)(Block Scope)(Can't be re-declared)(Can't be updated)(Must be initialized at the time of declaration)(Hoisting)
*/

var a = 10;
var b = 20;
var c = 30;
console.log(a + b + c); // 60

let d = 40;
let e = 50;
let f = 60;
console.log(d + e + f); // 150  

const g = 70;
const h = 80;
const i = 90;
console.log(g + h + i); // 240

var z=100;
{
    var m=100;
}
console.log(z); // 100
console.log(m); // 100

let n=200;
{
    let o=200;
}
console.log(n); // 200
console.log(o); // ReferenceError: o is not defined

const p=300;
{
    const q=300;
}
console.log(p); // 300
console.log(q); // ReferenceError: q is not defined

var r=400;
console.log(r); // 400
var r=500;
console.log(r); // 500

/*
let s=600;
console.log(s); // 600
let s=700;
console.log(s); // SyntaxError: Identifier 's' has already been declared
*/

/*
const t=800;
console.log(t); // 800
const t=900;
console.log(t); // SyntaxError: Identifier 't' has already been declared
*/

/*
let u=1000;
let u=2000;
console.log(u); // 2000
*/

/*
const v=3000;
const v=4000;
console.log(v); // SyntaxError: Identifier 'v' has already been declared 
*/  

var w=5000;
var w=6000;
console.log(w); // 6000 

let r=10;{
    console.log(r); // 10
}
console.log(r); // 10

var x=10;{
    console.log(x); // 10
}
console.log(x); // 10

const y=10;{
    console.log(y); // 10
}
console.log(y); // 10

console.log(s); // undefined
let s=100
console.log(s); // 50

console.log(t); // ReferenceError: t is not defined
var t=200;
console.log(t); // 200  

console.log(u); //ReferenceError: u is not defined
const u=300;
console.log(u); // 300