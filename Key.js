'use strict';


var Key = (function(keyNum, wavIndx){
  this.keyNum = keyNum;
  this.freq = keyFreq(keyNum);
  this.type = Data.waveTypes[wavIndx];
  this.keyCode = Data.keyCodes[keyNum]; //index needs to be determined and setKeyCode needs to be created.
  console.log(this);

  // "Railsback Curve": Algorithm for piano key frequency (Hz),
  // where "n" is the key number.  440Hz is A4.
  function keyFreq(n){
    var power = (n - 49)/12;
    return Math.pow(2, power)*440;
  }
});
