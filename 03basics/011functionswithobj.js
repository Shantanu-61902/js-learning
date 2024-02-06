
function calculateCartPrice(...num1){
    return num1;
}
//console.log(calculateCartPrice(2000,455,726))// ... is called rest operator and also called spread operator it's naming depend on how it is used.
const user ={
    username : "Virat Kohli",
    baseprice: 899 
}
function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and Price is ${anyobject.baseprice}`);
}
// handleObject(user)
handleObject({
    username:"Shantanu Mishra",
    baseprice:599
})

const myNewarray = [200,400,600]

function returnSecondvalue(getarray){
return getarray[6]
}
// console.log(returnSecondvalue(myNewarray));
console.log(returnSecondvalue([300,400,500,500,500,1000,9000]));


