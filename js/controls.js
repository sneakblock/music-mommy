let canvas;
let mic;
let fft;
let spectrum;
let beatEllipseWidth;

//Sliders
let smoothingSlider;

function setup() {

    canvas = createCanvas(windowWidth, windowHeight / 2);
    noFill();
    textSize(10);

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
    peakDetect = new p5.PeakDetect();

    smoothingSlider = createSlider(0, 1, 0.8, .001);
    smoothingSlider.position(10, height);
    smoothingSlider.style('width', '80px');
}

function draw() {
    background(230);
    spectrum = fft.analyze();
    peakDetect.update(fft);
    fill(0);

    if (peakDetect.isDetected) {
        beatEllipseWidth = 50;
      } else {
        beatEllipseWidth *= 0.95;
    }
    
    ellipse(60, height - 60, beatEllipseWidth, beatEllipseWidth);

    //Draw labels
    text('smoothing', 10, 30);
    

    noFill();
    //Draw spectrograph
    beginShape();
    for (i = 0; i < spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();

    fft.smooth(smoothingSlider.value());

    

}