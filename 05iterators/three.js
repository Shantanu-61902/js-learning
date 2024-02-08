// higher order array loops
const arr = [1,2,3,5,6,8]

for (const value of arr) {
    console.log(value);
}
const greetMsg = "Welcome Home!"
for (const greet of greetMsg) {
    console.log(`Each value is ${greet}`);
    
}

// ********* Maps *********
const map  = new Map()
map.set("IN" , "INDIA")
map.set("AUS" , "AUSTRALIA")
map.set("US" , "UNITED STATES OF AMERICA")
map.set("CN" , "CHINA")
map.set("RUS" , "RUSSIA")
// console.log(map);
for (const [key,value] of map) {
    console.log(key,":--",value);
}

const myObj = {
 "GAME1": "NFS",
 "GAME2": "COD",
 "GAME3": "BGMI"
}
// for (const {key,value} in myObj) {
//     console.log(key,"-->",value);
// }