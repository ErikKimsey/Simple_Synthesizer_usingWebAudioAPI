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
