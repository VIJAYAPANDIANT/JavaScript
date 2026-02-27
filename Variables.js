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

/*let s=600;
console.log(s); // 600
let s=700;
console.log(s); // SyntaxError: Identifier 's' has already been declared
*/

/*const t=800;
console.log(t); // 800
const t=900;
console.log(t); // SyntaxError: Identifier 't' has already been declared
*/
