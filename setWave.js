'use strict';
// click "change wave button ('+' or '-')",
// calls setWave(['+' or '-'])
// wavIndex is from waveTypes[wavIndex]
function setWave(posOrNeg){
  if(posOrNeg < 0 || posOrNeg > waveTypes.length){
    // Key.waveType = waveTypes[wavIndex];
    return;
  }
  if(posOrNeg && wavIndex < waveType.length){
    wavIndex = wavIndex + 1;
    // Key.waveType = waveTypes[wavIndex];
    createKeys(wavIndex);
  }
  if(posOrNeg && wavIndex >= 0){
    wavIndex = wavIndex - 1;
    Key.waveType = waveTypes[wavIndex];
    createKeys(wavIndex);
  }
}
