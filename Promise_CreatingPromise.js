function setup(){
    noCanvas();
    delay(1000)
    .then(() => createP('hello'))
    .catch((err) => console.error(err));
}

function delay(time){
    return new Promise((resolve, reject) => {
        if(isNaN(time)){
            reject(new Error("Delay requires a valid number"));
        }else{
            setTimeout(resolve,time);
        }
    });
}