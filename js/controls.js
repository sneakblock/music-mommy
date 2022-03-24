let canvas;
let mic;
let fft;
let spectrum;

//Sliders
let smoothingSlider;

function setup() {

    canvas = createCanvas(windowWidth, windowHeight / 2);
    noFill();
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

    smoothingSlider = createSlider(0, 1, 0.8, .001);
    smoothingSlider.position(10, height);
    smoothingSlider.style('width', '80px');
}

function draw() {
    background(240);
    spectrum = fft.analyze();

    beginShape();
    for (i = 0; i < spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();

    fft.smooth(smoothingSlider.value());

}