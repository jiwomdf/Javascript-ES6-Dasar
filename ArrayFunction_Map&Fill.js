/* HIGH ORDER FUNCTION 
    BASIC FUNCTION
*/

/* I. map
   --map will create a new array so it has to be stored to some variable
*/
let arrMap = [4,8,1,2,9];
console.log(arrMap);

let doubledMap = arrMap.map(x => x * 2); 
console.log(doubledMap);

/* II. fill
   --fill akan mengisi/menimpa semua value array
   --dan map hanya berjalan pada array yg tidak kosong
*/
let arrFill = new Array(100);
arrFill = arrFill.fill().map(() => Math.random());
console.log(arrFill);