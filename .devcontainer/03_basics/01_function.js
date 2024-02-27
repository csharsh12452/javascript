function sayMyName(){
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
}

//sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1+num2)
// }

function addTwoNum(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
}
const result=addTwoNum(3,4)
//console.log("Result:",result)

function loginUserMessage(userName="Harsh"){
    if(!userName){
        console.log("Please enter a userName")
        return 
    }
    return`${userName} just logged in`
}
//console.log(loginUserMessage("Harsh"))
//console.log(loginUserMessage("deep"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(2,3,4,5))

const user={
    userName:"harsh",
    age:29
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and age is ${anyobject.age}`)
}
//handleObject(user)
handleObject({
    userName:"Deep",
    age:34
})
const myNewArray=[200,400,100,600]
function returnSecondVal(getArray){
    return getArray[1]
}
// console.log(returnSecondVal(myNewArray))
console.log(returnSecondVal([200,220,220,100]))