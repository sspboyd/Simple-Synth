var wave;
var button;
var playing;

function setup() {
    createCanvas(100, 100);

    wave = new p5.Oscillator();
    wave.start();
    wave.setType("triangle");
    wave.amp(.1);
    wave.freq(440);

    slider = createSlider(100,1200,440);

    button = createButton("play/pause");
    button.mousePressed(toggle);
    playing = true;
}

function draw() {
    wave.freq(slider.value());
    if (playing) {
        background(18, 199, 47);
    } else {
        background(123, 18, 47);
    }
}



function toggle() {
    if (!playing) {
        playing = true;
        wave.start();
        wave.amp(.2,1);
        wave.freq(440);
    } else {
        playing = false;
        wave.stop();
    }
}
