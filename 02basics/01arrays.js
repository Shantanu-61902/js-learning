const myArr = [6,7,2,78,49,50]
const myHeros = ["Ironman","Black Widow","Wolverine","Spider-man"]
console.log(myHeros[2]);
console.log(myArr[3]);
const myArr2 = new Array("himanshi",2,3,"Jaxon")



//Arrays Methods

// myArr2.push(6)
// myArr2.push(88)
// myArr2.pop()

//myArr2.unshift(8) //parameter is needed
//myArr2.shift()      // no parameter is needed
// console.log(myArr2.includes('Jaxon'));
// console.log(myArr2.indexOf('Jaxon'));
//console.log(myArr2);
const myArr3 = myArr2.join()
// console.log(myArr2);
// console.log(myArr3);
// console.log(typeof myArr3);

//slice and splice

console.log("A ", myArr )
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);