'use strict';

/*
Sans the code pertaining to the AudioAPI, this code assures propper fire of audioCtx start() and stop().
No repeated firing should occur when hold key down, to sustain play of a note.
*/

var keyCodes = [90, 83, 88, 68, 67, 86, 71, 66, 72, 78, 74, 77, 188];
var i = 0;
var fired = false;
var audioCtx = new AudioContext(), osc;
// var a = fruits.indexOf("Apple");

window.addEventListener('keydown', function(e){

  if(!fired){
    fired = true;

    var kv = e.which;
    var a = keyCodes.indexOf(kv);
    console.log(a);
    console.log(kv);


    if(kv == keyCodes[a]){
      osc = audioCtx.createOscillator();
      osc.frequency.value = 10 * a;
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
// e.stopPropagation();
