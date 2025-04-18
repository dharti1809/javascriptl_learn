//object in this keyword is usable

const user = {
    username : "dharti",
    price : 999,

    welcomeMessage: function (){
        console.log(`${this.username} welcome to website`);
        // console.log(this)
    }
}
// user.welcomeMessage()

// user.username= "swati"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "dharti"
//     console.log(this.username)
//     // console.log(this)
// }
// chai()   // in function not use this result is undefined

// const chai = function(){
//     let username = "dharti"
//     console.log(this.username)
// }    // undefined

// const chai = () => {
//     // let username = "dharti"
//     // console.log(this.username)

//     // console.log(this)
// }
// chai()
 
//arrow functiom

//explisite return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//implisite return
// const addTwo = (num1, num2) => num1 + num2

//second

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3,4))


//object return

// const addTwo = (num1, num2) => ({username: "Dharti"})

// console.log(addTwo(3,4))


const myArray = [4,5,6,7,8]

myArray.forEach( function () {})
myArray.forEach( () => {})