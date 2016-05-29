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

  function init(){
    /*
    ** 1. Create keys,
    ** 2. Draw HTML,
    ** 3. Set up so that keys can play.
    */
      createKeys();
  }

  // Creates array of new Key objects.
  // createKeys()

  function createKeys(){
    for(var i = 40; i < 53; i++){
      keyArr[i] = new Key(i, 0);
      paintKeyElems(i-39);
    }
  }

  function paintKeyElems(ind){
      var el = document.createElement('div');
      el.setAttribute('class', 'key');
      el.setAttribute('id', ind);
      console.log(el);
      keyboard.appendChild(el);
  }





  window.addEventListener('keydown', function(e){

    if(!fired){
      fired = true;

      var kv = e.which,
      a = keyCodes.indexOf(kv);
      console.log(a);
      console.log(kv);


      if(kv == keyCodes[a]){
        osc = audioCtx.createOscillator();
        osc.frequency.value = keyArr[a].freq;
        osc.type = "triangle";
        osc.connect(audioCtx.destination);
        osc.start(0);
        console.log("yes");
      }
    }

  });

  window.addEventListener('keyup', function(e){
    fired = false;
    osc.stop();
  });

});
