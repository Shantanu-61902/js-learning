//reduce

const myNum = [1,2,3]
// const myTotal = myNum.reduce(function (acc,curval) {
//     console.log(`accumulator value = ${acc} and CurrentValue = ${curval}`);
//     return acc + curval
// } , 0)
const myTotal = myNum.reduce((acc,curval) => acc+curval ,0)
console.log(myTotal);

const shoppingCart = [
    {
    itemName : "Ponds Talcum",
    price : 299
},
    {
    itemName : "Olay Creame",
    price : 799
},
    {
    itemName : "Park Avenue Deo",
    price: 149
},

]
const priceTopay = shoppingCart.reduce((acc , item) => acc+ item.price,0)
console.log(priceTopay);