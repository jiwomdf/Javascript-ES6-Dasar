
/* I. callbackFunction yang memerlukan ARGUMENT berupa
      function 
*/
function sing(callback){
    console.log('la la la la');

    if(callback instanceof Function){
        callback();
    }
}

/* II. factory function yang me-RETURN sebuah function 
*/
// a. bentuk function biasa
// function multiplier(factor){
//     return function(x){
//         return x * factor;
//     }
// }
// b. bentuk arrow function
// function multiplier(factor){
//     return x => x * factor;
// }

function setup(){

    
    sing(function(){ //-- I.
        console.log("yeah mantap");
    });

}