 const joshUser  =  new Object() //singelton obj
const user = {}     //non singleton obj

user.id = "001"
user.name = "Ocean Sharma"
user.email = "abc@gmail.com"
user.isLoggedin = true
// console.log(user);

const regUser = {
    email : "shanu2@xyz.com",
    fullname : {
         userfirstname:"Ganga Ram",
         userlastname:"Maurya"
    },
    mobile : "925825001"
}
// console.log(regUser.fullname.userlastname);
// console.log(regUser.mobile);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj4 = {5:"x" , 6:"X"}
const obj3 = Object.assign({} , obj1 , obj2 , obj4)
// console.log(obj3);
const obj5 = {...obj1,...obj2,...obj4}
// console.log(obj5);


const users = [
    {
        name : "shanu",
        number : 1
    },
    {
        name : "Dragon",
        number : 7
    },
    {
        name : "shantanu",
        number : 5
    },
]
console.log(users[0].name)
console.log(joshUser);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
console.log(user.hasOwnProperty('Loggedin'));