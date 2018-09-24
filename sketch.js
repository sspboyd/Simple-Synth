var synths = [];

function setup() {
    var newSyn = {};
    newSyn.osc = synth.initOsc();
    newSyn.ui = synth.initUI(newSyn.osc);
    synths.push(newSyn);
}

function draw() {
    background(47);

    synths.forEach(function(e, i, a) {
        var newFreq = e.ui.freqSlider.value();
        var newVol = e.ui.volSlider.value();
        e.osc.amp(newVol);
        e.osc.freq(newFreq);
    })
}

var synth = {
    initOsc: function() {
        var playing = false;
        var synOsc = new p5.Oscillator();
        synOsc.start();
        synOsc.amp(0.5, .5);
        synOsc.setType("square");
        synOsc.freq(300);
        return synOsc;
    },
    initUI: function(osc) {
        var onOffBtn = createButton("syn on/off");
        onOffBtn.mousePressed(function() {
            if (!osc.started) {
                osc.start();
                // osc.amp(.5, .4);
                console.log("playing");
            } else {
                osc.stop(1);
                osc.amp(0, .8);
                console.log("not playing");
            }
        });
        var freqSldr = createSlider(50, 2000, 440);
        var volSldr = createSlider(0.0, 1.0, 0.4, 0.025);
        var ui = {
            onOffButton: onOffBtn,
            freqSlider: freqSldr,
            volSlider: volSldr
        };
        return ui;
    }
};
