// var synth1 = new Synth();
var osc = new p5.Oscillator();

// function Synth() {
//     //this.osc = new p5.Oscillator();

//     this.setupCall = function() {
//         //call during setup
//         console.log("setupCall this", this);
//         // this.slider = createSlider(100, 1200, 440);
//         // this.button = createButton("on/off");
//         // this.button.mousePressed(this.toggle);
//         // this.playing = true;
//     }
// }

// function toggle(synth) {
//     console.log(synth);
//     if (!synth.osc.playing) {
//         synth.osc.playing = true;
//         synth.osc.start();
//         synth.osc.amp(.5, 1);
//         synth.osc.freq(440);
//         console.log("playing");
//     } else {
//         playing = false;
//         synth.osc.stop();
//         synth.osc.amp(0, 1);
//         console.log("stopped");
//     }
// }



function setup() {
    createCanvas(100, 100);
    background(47);
    //synth1.setupCall();
    // synth1.slider = createSlider(100, 1200, 440);
    // synth1.button = createButton("on/off");
    // synth1.button.mousePressed(function() { toggle(synth1); });
    // synth1.playing = true;
    // synth1.osc = new p5.Oscillator();

    // synth1.osc.start();
    // synth1.osc.setType("triangle");
    // synth1.osc.amp(1);
    // synth1.osc.freq(440);

    osc.start();
    osc.setType("triangle");
    osc.amp(.3);
    osc.freq(440);
}

function draw() {
    // var newFreq = synth1.slider.value();
    // synth1.osc.freq(newFreq);
}
