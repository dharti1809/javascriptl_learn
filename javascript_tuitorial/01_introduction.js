console.log("hello This is first Program");

function addition(a,b,c){
	return a+b+c;
}

let c = addition(5,10,15)
	console.log(c)


let d = 35;
console.log(d);

d = "Dharti";
console.log(d);

console.log("understanding var,const, let");
// var e = 45;
// var e = "p"; // var in veriable define multiple time but not in let so let is safe
let f = "dharti";
const author = "herry"; //const is a identifier
// let author = 5; //its throw error because constant can not be changed
let g = null
let h = undefined
let i = 95;
i = "add new"; 
{
	let f = "hello";
	console.log(f);
}
console.log(h)

console.log("primitive data types");

 let j = null
 let k = 456
 let m = "hello";
 let n = BigInt("2345678")
 let o = Symbol("I am Symbol");
 let p = undefined
 let q = true
 console.log(j,k,m,n,o,p,q);

 console.log(typeof n);
 console.log(typeof o);

 // objects in javascript
console.log("Non primitive data types - objects");
 const item = {
 	"dharti": true,
 	"abc": false,
 	"xyz": 2345,
 	"solanki": undefined,
 }

 console.log(item["dharti"])


 // q-1 prectise set
 let a = "dharti"
 let b = 1;
 console.log(a + b)

 console.log(typeof (a+b))

 const ab = {
 	dharti : "solanki",
 	education : 12,
 	business : false
 };

 console.log(ab["dharti"]) //both use for print
 console.log(ab.dharti)

 console.log(ab)
ab['friend'] = "hello";
ab['dharti'] = "dharu";
console.log(ab)