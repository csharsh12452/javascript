const accountId=144553
let accountEmail="harsh@gmail.com"
var accountPassword="123445"
accountCity="Jaipur"
let accountState;
//accountId=2   //notallowed
accountEmail="hc@hc.com"
accountPassword="908765454"
accountCity="bangluru"
console.log(accountId);
/*
Prefer not to use var because of issue of block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])