let canvas;
let mic;

function setup() {
    canvas = createCanvas(windowWidth / 2, windowHeight);
    canvas.position = (0, 0);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(51);
    
}