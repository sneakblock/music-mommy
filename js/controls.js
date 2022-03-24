let canvas;
let mic;
let fft;
let spectrum;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight / 2);
    noFill();
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    background(240);
    spectrum = fft.analyze();

    beginShape();
    for (i = 0; i < spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();
}