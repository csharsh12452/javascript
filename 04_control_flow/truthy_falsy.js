const userEmail=[]
if(userEmail){
    console.log("Got userEmail");
}else{
    console.log("Don't have userEmail");
}

//falsy value

// false, 0, -0,BigInt 0n,"",null ,undefined ,NaN

// truthy value

// "0" , 'false' ," ", [] ,{} ,function(){}

// if(userEmail.length===0){
//     console.log("Array is Empty");
// }

const emptyObj={}

if(Object.keys(emptyObj).length==0){
    console.log("Object is Empty");
}

// Nullish coalescing Operator (??) : null undefined

let val1;
//  val1 = 5 ?? 10
//  val1 = null ?? 10
// val1=undefined ?? 15
val1=null ?? 10 ?? 20 

console.log(val1);

// ternary Operator

// condition ? true : false

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("Greater than 80");