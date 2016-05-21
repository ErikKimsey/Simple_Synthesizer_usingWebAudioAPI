'use strict';

var keyCodes = [90, 83, 88, 68, 67, 86, 71, 66, 72, 78, 74, 77, 188];
var i = 0;
var audioCtx = new AudioContext(), osc;
// var a = fruits.indexOf("Apple");

window.addEventListener('keydown', function(e){

  e.stopImmediatePropagation();
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

});

// window.addEventListener('keyup', function(e){
//   osc.stop();
// });
