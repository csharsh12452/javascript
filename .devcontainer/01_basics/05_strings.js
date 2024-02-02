const name="Harsh"
const repoCount=15
//console.log(name+repoCount+" value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String("free-fire-game")
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStringOne="  Harsh  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://harsh.com/harsh%20bajpai"
console.log(url.replace('%20','-'))

console.log(url.includes('harsh'))

console.log(gameName.split('-'))






