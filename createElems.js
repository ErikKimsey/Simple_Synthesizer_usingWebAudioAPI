'use strict';
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

////////////////////////////////////////////////////
// PLAY function
//
var osc;
  function play(bl, indx){

    if (bl === false){
      osc = audioCtx.createOscillator();
      osc.frequency.value = keyArr[indx+39].freq;
      osc.connect(audioCtx.destination);
      osc.start(0);
      console.log(osc.frequency.value);
    }
    if (bl === true){
      osc.stop();
    }
}
//
//
/////////////////////////////////////////////////////



function createKeyElems(ind){
    var el = document.createElement('div');
    el.setAttribute('class', 'key');
    el.setAttribute('id', ind);
    el.setAttribute('onmousedown', 'play(false, ' + ind + ')');
    el.setAttribute('onmouseup', 'play(true,' + ind + ')');
    console.log(el);
    keyboard.appendChild(el);
  }
