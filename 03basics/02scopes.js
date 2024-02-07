let a = 300         //global scope
if(true){
    let a = 20          //local scope
    const b = 50
    console.log("INNER a: ", a);
    console.log("Inner b: ",b);
}
console.log("Outer a:",a);

// function one(){
//     const username = "Pokemon"
//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     two()
// }
// one()              //here the fn two can access the value of fnone as it is global for fn2 in their scope body whereas it's not possible for fn1 to access values of fn2

// if(true){
//     const username = "Dragoon"
//     if(username === "Dragoon"){
//         const website = " Dreamhat.com"
//         console.log(username+website);
//     }
//     console.log(website);
// }
// console.log(username);

// // ++++++++ Interesting ++++++++
// console.log(addOne(5));
// function addOne(num){
//     return num + 1
// }

// // console.log(addTwo(5));              //we cannot print value here bcz it is stored in an expression named addTwo and this can be solved with Hoisting....
// const addTwo = function(num){

//     return num + 2
// }
// console.log(addTwo(5));