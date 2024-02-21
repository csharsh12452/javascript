const marvelHeroes=["Thor","Ironman","Spiderman"]
const dc_heroes=["Superman","flash","batman"]

//marvelHeroes.push(dc_heroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes=marvelHeroes.concat(dc_heroes)
// console.log(allHeroes);

// Spread operator
const all_new_heroes=[...marvelHeroes,...dc_heroes]
//console.log(all_new_heroes)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array)

console.log(Array.isArray("Harsh"))
console.log(Array.from("Harsh"))
console.log(Array.from({name:"Harsh"})) //Interview

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))