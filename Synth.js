'use strict';

/*
**
**
*/

var Synth = (function(){

  var i = 0;
  var fired = false, osc;
  var keyboard = document.getElementById('keyboard');
  var element = document.getElementsByClassName('key');
  var keyArr = [];
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  function paintKeyElems(ind){
      var el = document.createElement('div');
      el.setAttribute('class', 'key');
      el.setAttribute('id', ind);
      console.log(el);
      keyboard.appendChild(el);
  }

  function createKeys(){
    for(var i = 40; i < 53; i++){
      keyArr[i] = new Key(i, 0);
      paintKeyElems(i-39);
    }
  }



  window.addEventListener('keydown', function keyDown(e){
    if(!fired){
      fired = true;
      var kv = e.which,
      a = Data.keyCodes.indexOf(kv);
      console.log(a);
      console.log(kv);
      if(kv == Data.keyCodes[a]){
        osc = audioCtx.createOscillator();
        osc.frequency.value = keyArr[a+40].freq;
        osc.type = "triangle";
        osc.connect(audioCtx.destination);
        osc.start(0);
        console.log("yes");
      }
    }
  });

  window.addEventListener('keyup', function keyUp(e){
    fired = false;
    osc.stop();
  });

  return {
    createKeys : createKeys
  }

})()

// window.addEventListener('keydown', keyDown, false);
// window.addEventListener('keyup', keyUp, false);
