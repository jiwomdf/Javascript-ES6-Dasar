/* REDUCE() FUNCTION */
let vals = [5,4,1,2,9];

/*  I. using foreach loop */
// let acc = 0;

// for(let val of vals){
//     acc += val;
// }
// console.log(acc);
 
/* II. using reduce() function 
        fyi: reduce itu sama dengan looping terus return valuenya
        menggunakan callbackfunction
*/
// let answer = vals.reduce((acc,val) => {
//     console.log('acc: ' + acc + ' val: ' + val);
//     return acc + val;
// }, 10);
// console.log(answer);

/*
  III. contoh penggunaan reduce
  Find max value di array
*/
let answer = vals.reduce((acc,val) =>{
        console.log('acc: ' + acc + ' val: ' + val);
        
        (acc > val) ? acc : acc = val ;
        return acc;
});

console.log(answer);