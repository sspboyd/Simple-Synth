var synths = [];

function setup() {
    var newSyn = {};
    var secondSyn = {};
    newSyn.osc = synth.initOsc();
    newSyn.ui = synth.initUI(newSyn.osc);

    secondSyn.osc = synth.initOsc();
    secondSyn.ui = synth.initUI(secondSyn.osc);

    synths.push(newSyn);
    synths.push(secondSyn);
}

function draw() {
    background(47);

    synths.forEach(function(e, i, a) {
        var newFreq = e.ui.freqSlider.value();
        var newVol = e.ui.volSlider.value();
        var newWaveType = e.ui.waveType.value();

        if (e.osc.getAmp() !== newVol) {
            e.osc.amp(newVol);
        }
        if (e.osc.getFreq() !== newVol) {
            e.osc.freq(newFreq);
        }
        if (e.osc.getType() !== newWaveType) {
            e.osc.setType(newWaveType);
        }

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

        var waveTypeRadio = createRadio();
        waveTypeRadio.option("Sine", "sine");
        waveTypeRadio.option("Sawtooth", "sawtooth");
        waveTypeRadio.option("Triangle", "triangle");
        waveTypeRadio.option("Square", "square");

        var ui = {
            onOffButton: onOffBtn,
            freqSlider: freqSldr,
            volSlider: volSldr,
            waveType: waveTypeRadio
        };
        return ui;
    }
};
