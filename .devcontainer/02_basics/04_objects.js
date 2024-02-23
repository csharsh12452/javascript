//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Samm"
tinderUser.isLoggedIn=false
//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userfullName:{
            firstName:"Harsh",
            lastName:"Bajpai"
        }
    }
}

//console.log(regularUser.fullName?.userfullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//const obj4={obj1,obj2}
//const obj4=Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,...obj2,...obj3}
console.log(obj4)

const users=[
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:1,
        email:"h@gamil.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

const {courseInstructor:instructor}=course
console.log(instructor)

// {
//     "name":"hitesh",
//     "coursename":"Js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]