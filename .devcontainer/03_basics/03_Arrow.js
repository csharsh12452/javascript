const user={
    username:"Harsh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     console.log(this.username);
// }

// chai()

// const chai=function(){
//     let username="Harsh"
//     console.log(this.username);
// }

const chai=() =>{
    let username="Harsh"
    console.log(this);
}

//chai()

// const addTwo=(num1,num2) =>{
//     return num1+num2
// }

//const addTwo=(num1,num2) => num1+num2

// const addTwo=(num1,num2) => (num1+num2)

const addTwo=(num1,num2) => ({username:"Harsh"})

console.log(addTwo(4,5))

const myArray =[2,3,4,5,3]

// myArray.forEach()