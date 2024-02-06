//Singleton ---- apni tarah ka ek hi object
//Object Literals
const mySym = Symbol("Key1")
const jsUser = {
    [mySym]: "myKey1",
name:   "Brendon Maccullam",
"full name": "shantanu mishra",
age: 32,
location: "jaipur",
email: "abcd@xyz.com",
isLoggedin: false,
lastloginDays:["monday","friday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); 
console.log(jsUser[mySym])
 console.log(typeof [mySym])

 jsUser.email = "DEMON@vcx.com"
 //Object.freeze(jsUser)
 jsUser.email = "Naumrt@sg.com"
 console.log(jsUser);

 jsUser.greetings = function(){
    console.log("Hello Folks");
 }
 jsUser.greetingsTwo = function(){
    console.log(`Hello Folks , ${this.name}`);
 }
 console.log(jsUser.greetings());
 console.log(jsUser.greetingsTwo());