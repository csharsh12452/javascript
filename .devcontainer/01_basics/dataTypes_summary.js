// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp=null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)

const bigNumber=12345564343253525n


// Referrence (Non-Primitive)

// Arrays , Objects , Functions

const heroes = ["shaktimaan","naagraj","doga"];

let myObj={
    name:"Harsh",
    age:23
}

const myFunction =function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)
console.log(typeof scoreValue)
console.log(typeof outsideTemp)
console.log(typeof myFunction)

// ***************************************************************************************

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName ="Harsh bjp"
let anotherName=myYoutubeName
anotherName="deep bjp"

console.log(myYoutubeName)
console.log(anotherName)

let userOne={
    email:"harsh@google.com",
    upi:"9548351006@paytm"
}

let userTwo=userOne

userTwo.email="deep@google.com"

console.log(userOne.email)
console.log(userTwo.email)
