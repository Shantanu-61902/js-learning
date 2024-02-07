const eMail = []
if(eMail){
    console.log("Yes have an Email");
}else{
    console.log("not have a email");
}
// falsy values
/*   false , 0 , -0 , undefined , null , " " , Bigint 0n ,NaN 

truthy values
"0",'false'," ",[],{},function(){}
*/
if(eMail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null , undefined
let val1 ;
//val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 17
val1 = null ?? 50 ?? 80

console.log(val1);

//*****Terniary Operator */
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"):console.log("Greater than 80");
