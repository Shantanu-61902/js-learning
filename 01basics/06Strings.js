const name = "Shantanu"
const repoCount = 65
//console.log(name + repoCount);
console.log(`Hello My Name is ${name} and my RepoCount is ${repoCount}`);

const gameName = new String('Shan-u-Doc')
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('D'));

const newString = gameName.substring(0,6);
console.log(newString);

//const anotherString = gameName.slice(2,1);
//console.log(anotherString);

const newStringOne = "   SHANTANU   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shanu.com/Shanu%20Mishra"
console.log(url.replace('%20','-'));
console.log(gameName.split('-'));

console.log(url.includes('Demo'));