// function avgTwoNum(x,y){
// 	console.log("done");
// 	// return 1 + (x+y)/2;
// 	return Math.round(1+ (x + y)/2)
// }

// let a = 1;
// let b = 2;
// let c = 3;

// console.log("average of a and b is", avgTwoNum(a,b));
// console.log("average of b and c is", avgTwoNum(b,c));
// console.log("average of c and a is", avgTwoNum(c,a));

// console.log("average of b and c is", 1 + (b+c)/2);
// console.log("average of a and c is", 1 + (a+c)/2);


// Arrow function

// const sum = (p,q) =>{
// 	return p+q;
// }

// console.log(sum(5,7));

// const hello = () =>{
// 	console.log("hello, how are you!!!");
// }

// hello();


// const hello = () =>{
// 	console.log("hello, how are you");
// 	return hii;
// }

// let a = hello();
// console.log(a);


function dharti(){
	console.log("hello dharti");
}

dharti()

// function addTwoNumbers(number1,number2){
// 	console.log(number1 + number2);
// }
// // addTwoNumbers(3,4);

// addTwoNumbers(3, "4");

function twoNumberAddition(number1, number2){

	// first method
	// let result = number1 + number2
	// return result;

	// second method
	return number1 + number2;  // return time variable need to return value
}

const result = twoNumberAddition(3,4)
console.log("result:", result)


function loginUserMessage(username){
	if(username === undefined){
		console.log("Please Enter Your Name")
		return
	}
	return `${username} just logged in`; 
}

// console.log(loginUserMessage("dharti"))
console.log(loginUserMessage()) // undefined result aave