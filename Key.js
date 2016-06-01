'use strict';


var Key = (function(keyNum){
  this.wavIndx = 2;
  this.fired = false;
  this.osc = Synth.audioCtx.createOscillator();
  this.osc.keyNum = keyNum;
  this.osc.frequency.value = keyFreq(keyNum+39);
  this.osc.type = Data.waveTypes[this.wavIndx];
  this.osc.keyCode = Data.keyCodes[keyNum]; //index needs to be determined and setKeyCode needs to be created.

  // "Railsback Curve": Algorithm for piano key frequency (Hz),
  // where "n" is the key number.  440Hz is A4.
  function keyFreq(n){
    var power = (n - 49)/12;
    return Math.pow(2, power)*440;
  }

  this.osc.connect(Synth.gain);
  console.log(Synth.gain);

  if(!this.fired){
    this.fired = true;
    this.osc.start();
  }
});

// Change Wave Type
// Key.prototype.chngType = function(){
//   // if "+", then wavIndx++
//   // if "-", then wavIndx--
//   this.osc.type = Data.waveTypes[wavIndx];
// };



Key.prototype.noteOff = function(){
      this.fired = false;
      this.osc.stop(Synth.audioCtx.currentTime);
};
