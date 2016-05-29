'use strict';


var Key = (function(keyNum, wavIndx){

  this.keyNum = keyNum;
  this.freq = keyFreq(keyNum);
  this.waveType = waveTypes[wavIndx];
  this.keyCode = keyCodes[someIndex]; //index needs to be determined and setKeyCode needs to be created.
  console.log(this);

  // "Railsback Curve": Algorithm for piano key frequency (Hz),
  // where "n" is the key number.  440Hz is A4.
  function keyFreq(n){
    var power = (n - 49)/12;
    return Math.pow(2, power)*440;
  }

});
