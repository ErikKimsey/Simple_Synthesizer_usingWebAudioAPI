'use strict';
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();





function createKeyElems(ind){
    var el = document.createElement('div');
    el.setAttribute('class', 'key');
    el.setAttribute('id', ind);
    el.setAttribute('onmousedown', 'play(false, ' + ind + ')');
    el.setAttribute('onmouseup', 'play(true,' + ind + ')');
    console.log(el);
    keyboard.appendChild(el);
  }
