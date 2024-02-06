// function sayMyName () {
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("N");
//     console.log("T");
//     console.log("A");
//     console.log("N");
//     console.log("U");

// }
// sayMyName() //sayMyName is a reference and () is Execution

function addTwoNumbers(num1,num2){
    //console.log(num1+num2);
//     let result = num1+num2;
//     return result
// 
return num1+num2;
}
// const result = addTwoNumbers(9,5)
// console.log("Result: ", result);
//addTwoNumbers(65,4)
function loginMessage(username = "Sam Wilson")
{
    if( !username){ //username === undefined also written as "if(!username)"
        console.log("please enter a name");
        return 
    }
    return `${username} has just logged in !`
}
console.log(loginMessage("Shantanu"))
// console.log(loginMessage(""))
// console.log(loginMessage())
// here in this code if the value in username = "Sam Wilson" and function call contain loginMessage() then Sam Wilson just logged in ! printed 
// else if in method call if defined loginMessage("Shantanu") then Shantanu has just logged in ! printed the value of Sam wilson is overwritten 