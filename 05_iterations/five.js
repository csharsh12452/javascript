const coding=['js','ruby','cpp','python','html','java']

coding.forEach( function (lang) {
    //console.log(lang);
})

coding.forEach( (lang) => {
    // console.log(lang);
} )

function printme(item){
    // console.log(item);
}

// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding=[
    {
    lang:'javascript',
    ext:'js'
    },
    {
    lang:'java',
    ext:'java'
    },
    {
    lang:'python',
    ext:'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.lang);
})
