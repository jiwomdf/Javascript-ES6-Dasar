let members = ['jiwo', 'christan', 'sameul']

console.log(members);

/*1. normal function */
members.forEach(function(member){
    //console.log(member);
});

/*2. arrow function 1 parameter */
members.forEach(member => {
    //console.log(member);
})

/*3. arrow function 4 parameter and its weird */
members.forEach((member,xzx,ueue, inigimanadah) => {
    console.log(member + ' ' + xzx + ' ' + ueue + ' ' + inigimanadah);
})

/*4. arrow function 2 parameter return gausah ditulis  */
let membersindex = members.map((member,index) => member + '--' + index)

/* return berupa obj setelah di console*/
console.log(membersindex);