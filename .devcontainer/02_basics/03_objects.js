// singleton 
// object.create

// Objects literals
const mySym=Symbol("key1")
const JsUser={
    name:"Harsh",
    "full name":"Harsh Bajpai",
    [mySym]:"mykey1",
    age:22,
    Location:"Jaipur",
    email:"harsh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email="harsh@chatgpt.com"
//console.log(JsUser.email)
//Object.freeze(JsUser)
//JsUser.email="harsh@microsoft.com"
//console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
