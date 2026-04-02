//  global scope
var c = 100
let a = 300
//{ } = scope / block scope
if(true) {
    let a = 30
    const b = 20
    // var c = 10
    console.log("INNER a: ",a)
}

console.log(a);
// console.log(b);
// console.log(c);