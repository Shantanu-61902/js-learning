const marvel_heros = ["Spiderman","Ironman","Thor"]
const dc_heros = ["Batman","Superman","Flash"]

//marvel_heros.push(dc_heros)
// const allHeros = marvel_heros.concat(dc_heros) //===== CONCATE Opertor =====
// console.log(allHeros);

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])
// const all_new_Heros = [...marvel_heros , ...dc_heros]    //++++ SPREAD OPERATOR++++
// console.log(all_new_Heros);

// const anoter_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_Array = anoter_Array.flat(Infinity)
// console.log(real_Array);

// console.log(Array.isArray("SHANTANU MISHRA"))
// console.log(Array.from("SHANTANU MISHRA"))
// console.log(Array.from({name: "hishomi"})) //interesting case ... confusion btween whether to print key or values..

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));