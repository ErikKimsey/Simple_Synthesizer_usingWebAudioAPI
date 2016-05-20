'use strict';


(function(){
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  console.log(audioCtx);
})(window);
