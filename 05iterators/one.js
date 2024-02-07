// //for
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     //console.log(element);
// } 

// for (let i = 0; i <= 10; i++) {
//     //console.log(`outer loop values ${i}`);
//     for (let j = 0; j <= 10; j++) {
//       //  console.log(`inner loop values ${j} and inner loop ${i}`);
//         //console.log(i + '*' + j + '=' + i*j);
        
        
//     }

    // let myArray = ["Flash","Ironman","Loki","Thor","Odin","Hela","Dr.Strange"]
    // for (let index = 0; index < myArray.length; index++) {
    //     const element = myArray[index];
    //     console.log(element);
    //     }
    
    // ****************Break & Continue*****************

    // for (let i = 1; i <= 20; i++) {
    //     if(i == 5){
    //         console.log("5 Detected");
    //         break;
    //     }
    //     console.log(`THE VALUE OF i is ${i}`);
        
    // }
    for (let i = 1; i <= 20; i++) {
        if(i == 5){
            console.log("5 Detected");
            continue;
        }
        console.log(`THE VALUE OF i is ${i}`);
        
    }