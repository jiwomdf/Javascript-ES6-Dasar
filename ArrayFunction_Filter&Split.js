/* FILTER FUNCTION() */

/* mengambil nilai genap*/
let vals = [5,4,9,2,1];

let answer = vals.filter(x => (x % 2 == 0) ? true : false);
console.log(answer);

/*intinya kalo dia masuk kondisi di return true maka 
akan di keep di array, bila false di buang. 
fungsi ini membuat array baru */

let s = "It was  a dark and stormy night.";
let words = s.split(/\W+/).filter(x => x.length == 0 ? false : true);

console.log(words);