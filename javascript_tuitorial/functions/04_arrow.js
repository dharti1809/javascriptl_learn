//object in this keyword is usable

const user = {
    username : "dharti",
    price : 999,

    welcomeMessage: function (){
        console.log(`${this.username} welcome to website`);
        // console.log(this)
    }
}
user.welcomeMessage()

// user.username= "swati"
// user.welomeMessage()

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
//     let username = "dharti"
//     console.log(this.username)
// }
// chai()