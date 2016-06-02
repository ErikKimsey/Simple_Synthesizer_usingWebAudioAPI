'use strict';

function setWave(curInd){
  if(curInd < 0 || curInd > waveTypes.length){
    return;
  }
  if(curInd && wavIndex < waveType.length){
    wavIndex = wavIndex + 1;
    return wavIndex;
  }
  if(curInd && wavIndex >= 0){
    wavIndex = wavIndex - 1;
    return wavIndex;
  }
}
