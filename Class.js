let bubbles = [];

class Bubble{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    show(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r);
    }

    move(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
}

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);

    bubbles.forEach(bubble => {
        bubble.move();
        bubble.show();
    });
    
}

function mousePressed(){
    let r = random(10, 50);
    let bubble = new Bubble(mouseX, mouseY,r);
    bubbles.push(bubble);

    console.log(bubbles.length);

}

