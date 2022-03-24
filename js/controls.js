let canvas;
let mic;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight / 2);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(51);
    
}