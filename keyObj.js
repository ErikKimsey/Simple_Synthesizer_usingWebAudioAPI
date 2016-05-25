
'use strict';

// onmousedown:
// Create key,
// Apply key values,
// start()
var Key = (function(keyNum, wavIndx){

  this.keyNum = keyNum;
  this.freq = keyFreq(keyNum);
  this.waveType = waveTypes[wavIndx];
  this.keyCode = keyCodes[someIndex]; //index needs to be determined and setKeyCode needs to be created.
  console.log(this);

});
