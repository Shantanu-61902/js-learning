const coding = ["java","python","cpp","ruby"]
coding.forEach(function (index){
    console.log(index);
} )

//OR Arrow Function

coding.forEach( (val) =>{
    // console.log(val);
}  )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {

// console.log(item,index,arr);

// } )

const myGaming = [
    {
    gamename : "BGMI",
    gameId : 101
    },
    {
    gamename : "COD",
    gameId : 102
    },
    {
    gamename : "NFS",
    gameId : 103
    },
]
myGaming.forEach( (value)=>{
    console.log(value.gameId);
    console.log(value.gamename);
} )
