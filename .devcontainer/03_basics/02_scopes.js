//var c=300;
let a=300
if(true){
    let a=10;
    const b=20;
    //console.log(a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const name="Harsh"

    function two(){
        const website="Youtube"
        //console.log(name);
    }
    //console.log(website)
    two()
}
one()

if(true){
    const name="Harsh"
    if(name==="Harsh"){
        const website="Youtube"
        //console.log(name + website)
    }
    //console.log(website);
}
//console.log(name);

//+++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num+1
}

console.log(addTwo(5));
const addTwo=function(num){
    return num+2
}
