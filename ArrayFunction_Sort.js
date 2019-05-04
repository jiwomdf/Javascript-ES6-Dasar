/* SORT FUNCTION */

//let vals = ["a","hello", "B","goodbye",2];

/* sort tidak dapat sorting object */
// let vals = [{
//     x: 2,
//     y: 10
// }, {
//     x: 5,
//     y: 6
// }];

let s = "It was  a dark and stormy  night.";
let words = s.split(/\W+/).filter(word => word.length > 2)

console.log(words);

/* .sort(array_ke_2, array_ke_1) */
words.sort((a,b) =>{
    let val = a.length - b.length;
    console.log(a + " " + b + " " + val);
    return a.length - b.length
});
console.log(words);