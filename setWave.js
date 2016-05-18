'use strict';
// click "change wave button ('+' or '-')",
// calls setWave(['+' or '-'])
// wavIndex is from waveTypes[wavIndex]
function setWave(posOrNeg){
  if(posOrNeg < 0 || posOrNeg > waveTypes.length){
    Key.waveType = waveTypes[wavIndex];
  }
  if(posOrNeg && wavIndex < waveType.length){
    wavIndex++;
    Key.waveType = waveTypes[wavIndex];
  }
  if(posOrNeg && wavIndex >= 0){
    wavIndex--;
    Key.waveType = waveTypes[wavIndex];
  }
}
