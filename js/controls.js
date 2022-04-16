let canvas;
let mic;
let fft;
let spectrum = [];
let scaledFreq = [];
let spectrumLen;
let beatEllipseWidth;
let freqVal;


//Sliders
let smoothingSlider;
let frequencySlider;

function setup() {
    spectrumLen = 255;
    canvas = createCanvas(windowWidth, windowHeight / 2);
    noFill();
    textSize(10);

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
    peakDetect = new p5.PeakDetect();

    smoothingSlider = createSlider(0, 1, 0.9, .001);
    smoothingSlider.position(10, 820);
    smoothingSlider.style('width', '80px');

    frequencySlider = createSlider(0, spectrumLen, spectrumLen / 2, 1);
    frequencySlider.position(150, 820);
    frequencySlider.style('width', '80px');

}

function draw() {
    background(230);

    spectrum = fft.analyze();
    spectrumLen = spectrum.length;
    peakDetect.update(fft);
    fill(0);

    if (peakDetect.isDetected) {
        beatEllipseWidth = 50;
      } else {
        beatEllipseWidth *= 0.95;
    }
    
    //ellipse(60, height - 60, beatEllipseWidth, beatEllipseWidth);

    //Draw labels
    text('smoothing: ', 10, 30);
    text(smoothingSlider.value(), 70, 30);
    text('frequency: ', 150, 30);
    text(frequencySlider.value(), 210, 30);
    

    noFill();
    //Draw spectrograph
    beginShape();
    for (i = 0; i < 256; i++) {
        scaledFreq[i] = spectrum[i] * 0.05;
        vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    
    endShape();

    if (planeCustomMaterial != null) {
        planeCustomMaterial.uniforms.frequencies.value = scaledFreq;
        renderer.render(scene, camera);
    }

    fft.smooth(smoothingSlider.value());
    freqVal = frequencySlider.value();

    

}