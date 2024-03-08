const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)

const myTotal=myNums.reduce((acc,currval)=>{return acc+currval},0)

// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python",
        price:999
    },
    {
        itemName:"java",
        price:3999
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=>{return acc+item.price},0)
console.log(priceToPay);