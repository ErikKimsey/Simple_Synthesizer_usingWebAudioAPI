'use strict';


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
