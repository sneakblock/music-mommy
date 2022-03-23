let canvas;
let col;

function setup() {
    canvas = createCanvas(windowWidth / 2, windowHeight);
    canvas.position = (0, 0);

    col = 0;
}

function draw() {
    col++;
    if (col > 255) col = 0;
    background(col);
}