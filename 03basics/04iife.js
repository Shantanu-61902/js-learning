(function chai(){
    console.log(`DB CONNECTED`);
})(); //iife immediately invoked function is used to remove global scope pollution
(function aurCode(){
    //NAMED IIFE
    console.log(`DB CONNECTED 2`);
})();
( () => {
    // IIFE
    console.log(`DB CONNECTED 3`);
})();
( (name) => {
    console.log(`DB CONNECTED 4 ${name}`);
})("Shreya")