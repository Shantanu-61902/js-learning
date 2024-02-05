//PRIMITIVE DATATYPES
// 7 types - String,Number,Boolean,Symbol,Undefined,Null,BigInt
const score = 100
const scoreValue = 100.67

const isLoggedIn = true
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(userEmail);
console.log(outsideTemp);
console.log(scoreValue);

const bigNumber = 32589357293872n;
console.log(typeof bigNumber);

// Reference(Non-Primitive DataTypes)-Arrays,Functions,Objects
const avengers = ["Ironman","Hawkeye","Steve Rogers"];
let myobj = {
    name: "Shantanu Mishra",
    age: 22,
    DOB:250611
}
const myFunction = function(){
    console.log("Hello Shantanu Mishra");
}
console.log(myFunction);
console.log(avengers);
console.log(myobj);

// STACK AND HEAP MEMORY
let myYoutubename = "Shantanudotcom"
let anotherName = myYoutubename
console.log(anotherName);
anotherName = "Chai aur Code"
console.log(anotherName);
let userOne = {
    email: "shantanu@gmail.com",
    upi:    "user@ybl"
}
console.log(userOne.email)
let userTwo = userOne

userTwo.email = "Dexterlab@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.email);
console.log(userOne.upi);
