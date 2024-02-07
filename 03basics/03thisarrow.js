const user = {
    username : "Shantanu Mishra",
    price: 699 ,                
    msgLoggedin : function(){
        console.log(`${this.username} ,Hey you are logged in sucessfully , Welcome to website`)         //this can be used for current context
        // console.log(this);
    }

}
// user.msgLoggedin()
// user.username="Black Mamba"
// user.msgLoggedin()
// console.log(this); // ye this refers to node environment that's why it's returning the {}(object in output)

// function chai(){
//     let username = "Shantanu"
//     console.log(this.username);// here this can be used within object but not in function it will gives the value of undefined when we see output.
// }
// chai()
// const chai = function(){
//     let username = "shantanu "
//     console.log(this.username);
// }
// chai()
const chai = () => {
    let username = "shantanu "
    console.log(this);
}                   // here we remove the function keyword and instead of it we put => arrow just after the () and here we go with the arrow function 
chai()
 

// const addNew = (num1,num2) => {
//     return num1+num2
// }
// console.log(addNew(5,5))
//const addNew = (num1,num2) => num1+num2  //Implicit - for single line statement    just remove {  } and also return 
// const addNew = (num1,num2) => (num1+num2) //used in react 
const addNew = (num1,num2) => ({username:"Shantanu"})
    

console.log(addNew(5,5))

// const myArray = [2,3,4,5,6]
// myArray.forEach()