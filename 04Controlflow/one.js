//if
// const isUserLoggedin = true
// const temperature = 41
// if(2 != 3){
//     console.log("Executed");
// }
// if(temperature === 51){
//     console.log("Temperature is less than 50 ");
// }else{
//     console.log("Temeperature is greater than 50");
// }
// const score = 200
// if(score > 100){
//     var power = "Fire"       //var is completely global , use const for within the scope of if condition so that our value of power is safe and cannot be accessed outside.
//     console.log(`USER'S POWER: ${power}`);
// }
// console.log(`USER'S POWER: ${power}`);


// const balance = 1000
// if(balance > 500) console.log("TESTING IMPLICIT SCOPE"),
// console.log("Demo for multiple lines"); //implicit scope ... single line but multiple lines of code is not suggested to use 

// const balance = 1000
// if(balance < 500 ){
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if(balance < 900 ){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const isUserLoggedin = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true
if(isUserLoggedin && debitCard && 3=="3"){
    console.log("Allow to purchase courses");
}
if(loggedinFromEmail || loggedinFromGoogle){
    console.log("Login Successfully");
}
