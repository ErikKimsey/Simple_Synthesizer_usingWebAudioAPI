'use strict';


  var keyArr = [];
  var octUp = document.getElementById('OctUp');
  var octDown = document.getElementById('OctDown');
  var octDisplay = document.getElementById('OctDisplay');
  var wavUp = document.getElementById('WavUp');
  var wavDisplay = document.getElementById('WavDisplay');
  var wavDown = document.getElementById('WavDown');
  var octIndex = 1, oI, sI = 0,
  wtype = synthData.waveTypes;
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var synth = audioCtx.createOscillator();
  var dest = audioCtx.destination;
  synth.connect(dest);
  var key = document.getElementsByClassName("key");

  function setWavDisplay(wT){
    wavDisplay.innerHTML = wT;
  }

//
  function applyKeyVals(){
    for(var i = 1; i < keyArr.length; i++){
      keyArr[i] += synthData.keyFreqDiff;
      synthData.keyFreqDiff += synthData.keyFreqDiff;

    }
    console.log(keyArr);
    synth.frequency.value = keyArr[0];
  }
//




//
  function incrOctave(){
      octIndex = octIndex + 1;
      // for(var i = 0; i<keyArr.length; i++){
      //   keyArr[i] = 0;
      //   keyArr[i] = octave[octIndex] + keyFreqDiff;
      //   keyFreqDiff += keyFreqDiff;
      //   console.log(keyArr[i]);
      // }
      synthData.keyFreqDiff = 1.1225;
      init(octIndex);
  }
  octUp.onclick = incrOctave;
//


  function decrOctave(){
    octIndex = octIndex - 1;
    // for(var i = 0; i<keyArr.length; i++){
    //   keyArr[i] = 0;
    //   keyArr[i] = octave[octIndex] + keyFreqDiff;
    //   keyFreqDiff += keyFreqDiff;
    //   console.log(keyArr[i]);
    // }
    synthData.keyFreqDiff = 1.1225;
    init(octIndex);
  }
  octDown.onclick = decrOctave;

  function playKey(k){
    synth.start(0);
    console.log(k);
  }

  function stopPlay(k){
    synth.stop();
  }

  function init(oI){

    synth.type = wtype[sI];
    setWavDisplay(wtype[sI]);
    for(var i = 0; i<key.length; i++){
      keyArr[i] = key[i];
    }
    for(var i = 0; i<keyArr.length; i++){
      keyArr[i] = synthData.octave[oI];
      console.log(keyArr[i]);
    }
    applyKeyVals();
  }
  
  console.log(AudioContext.prototype.hasOwnProperty('createOscillator'));
  window.onload = init(octIndex);

//
//
