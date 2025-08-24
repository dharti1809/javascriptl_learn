function sayMyName(){
    console.log("D")
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("T")
    console.log("I")
}

// function addtwonum(num1,num2){
//     console.log(num1 + num2);
// }

// addtwonum(5,7)
// addtwonum(5,"7")
// addtwonum(5,"a")
// addtwonum(5,null)

function addtwonum(num1,num2){
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}


function loginMessage(username = "user"){
    if(!username){
        console.log("please enter user name")
        return
    }
    return `${username} just logged in`
}

// loginMessage("Dharti"); 
// console.log(loginMessage("dhartix"));

function addcart(...num1){  // ... - called rest operator & spread operator
    return num1 
}

// console.log(addcart(50,100,200,400,500,2000));


const user = {
    username: "Dharti",
    price: 199
}

function handleObj(anyobj){
    console.log(`user name is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleObj(user)

//direct pass object
handleObj({
    username: "Dharti",
    price: 199
})

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))