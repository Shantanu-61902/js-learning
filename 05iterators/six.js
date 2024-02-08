// const coding = ["java","python","cpp","ruby"]

// const values  = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (nums) => nums > 4)
// console.log(newNums);      // filter function returns values based on the conditions those no.s which satisfies the condition nums>4 are printed in the output. 
//******Implicit way is good which we write in a single line. 
//******Above code is the example of implicit..
// const newNums = myNums.filter( (nums) => { 
//     return nums > 4
// })
// console.log(newNums);// in this eg the filter fn have arrowfn and after that there is a scope , since scope is defined we should include return before the condition otherwise we get {} in output.

// const newNums = []

// myNums.forEach((nums)=>{
//     if(nums > 4){
// newNums.push(nums)
//     }
// })
//     console.log(newNums);
// });
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
   
  let userBooks = books.filter((bks)=> bks.genre === "Fiction")
  userBooks = books.filter((bks)=>{
    return  bks.publish >= 1995 && bks.genre === "History"
})
console.log(userBooks);
//   node 05iterators/six.js
