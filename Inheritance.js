// let Particle = require('Inheritance/Particle.js');
// let Coffeti = require('Inheritance/Coffeti.js');

let arrObj = [];

function setup(){

    createCanvas(600, 400);
    arrObj[0] = new Particle(200,200,100);
    arrObj[1] = new Conffeti(200,200,10);

}

function draw(){
    background(0);

    arrObj[0].show();
    arrObj[0].update();

    arrObj[1].show();
    arrObj[1].update();
}