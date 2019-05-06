class Conffeti extends Particle{
    constructor(x,y,r){
        super(x,y,r);
        this.bright = random(255);
        this.r = r;
    }

    show(){
        strokeWeight(1);
        stroke(255);
        fill(this.bright);
        rect(this.x,this.y,this.r,this.r);
    }
}