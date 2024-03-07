// for of

const arr=[1,2,3,4,5];
for (const val of arr) {
    //console.log(val);
}

const greetings="Hello world !"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map =new Map()
map.set('IN','India')
map.set('USA','United states of america')
map.set('Fr','France')
map.set('IN','India')
// console.log(map);

for (const [key,value] of map) {
    //console.log(key,':-',value);
}

const myObj={
    'game1':'fns',
    'game2':'sds'
}

// Not iterate on object

for (const [key,value] of myObj) {
    console.log(key,value);
}