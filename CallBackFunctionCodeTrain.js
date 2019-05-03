var bgcolor;

function setup(){
    canvas = createCanvas(200,200);
    bgcolor = color(200);
    button = createButton("go go go go");

    button.mouseClicked(changeColor);
    console.log(button);
}

function changeColor(){
    bgcolor = color(random(255));
}

function draw(){
    background(bgcolor);
    fill(255,0,175);
    rect(100,100,50,50);
}
