
'use strict';

// onmousedown:
// Create key,
// Apply key values,
// start()
var Key = (function(keyNum, wavIndx){

  this.keyNum = keyNum;
  this.freq = keyFreq(keyNum);
  this.waveType = waveTypes[wavIndx];
  console.log(this);

});
