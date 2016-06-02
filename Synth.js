'use strict';

/*
**
**
*/

var Synth = (function(){

  var i = 0,
  wavIndx = 0;
  var waveTypes = [
    'sine',
    'square',
    'sawtooth',
    'triangle'
  ];
  var _prevKeyDown = {},
  keyboard = document.getElementById('keyboard'),
  element = document.getElementsByClassName('key'),
  keyArr = new Array(),
  wavUp = document.getElementById('WavUp'),
  wavDown = document.getElementById('WavDown'),
  wavDisp = document.getElementById('WavDisplay'),
  audioCtx = new (window.AudioContext || window.webkitAudioContext),
  delay = audioCtx.createDelay(),
  feedback = audioCtx.createGain(),
  gain = audioCtx.createGain(),
  filter = audioCtx.createBiquadFilter();
  delay.delayTime.value = 0.5;
  feedback.gain.value = 0.2;
  filter.frequency.value = 2000;
  delay.connect(feedback);
  feedback.connect(filter);
  filter.connect(delay);
  gain.connect(audioCtx.destination);
  delay.connect(audioCtx.destination);

  function paintKeyElems(ind){
      var el = document.createElement('div');
      el.setAttribute('class', 'key');
      el.setAttribute('id', ind);
      console.log(el);
      keyboard.appendChild(el);
  }

  function createKeys(){
    for(var i = 40; i < 53; i++){
      paintKeyElems(i-39);
    }
  }

  function displayWave(indx){
    wavDisp.innerHTML = waveTypes[indx];
  }


  function setWave(){
    if(wavIndx < waveTypes.length){
      wavIndx = wavIndx + 1;
      displayWave(wavIndx);
    }
    if(wavIndx >= waveTypes.length){
        wavIndx = 0;
        displayWave(wavIndx);
    }
  }
  wavDisp.onclick = setWave;

  function _downKey(ev){
    var kD = ev.which,
    note = Data.keyCodes.indexOf(kD);
      if( _prevKeyDown[ kD ] == null ){
          _prevKeyDown[ kD ] = {};
      }
      _prevKeyDown[ kD ][ note ] = true;
  }

  function _upKey(ev){
      var kD = ev.which,
      note = Data.keyCodes.indexOf(kD);
      if( _prevKeyDown[ kD ] != null ){
          _prevKeyDown[ kD ][ note ] = null;
      }
  }

  function _isKeyDown(ev){
    var kD = ev.which,
    note = Data.keyCodes.indexOf(kD);
      var result = false;
      if(_prevKeyDown[kD] != null ){
          if(_prevKeyDown[kD][note] == true ){
              result = true;
          }
      }
      return result;
  }

  function keyDown(ev){
    if(!_isKeyDown(ev)){
        // your once-keydown handler here
        var kD = ev.which,
        note = Data.keyCodes.indexOf(kD);
        if(Data.keyCodes.indexOf(kD) >= 0){
          noteOn(note);
          _downKey(ev);
        }
    }
  }

  function noteOn(note){
      keyArr[note] = new Key(note, wavIndx);
  }

  function keyUp(ev){
    _upKey(ev);
    var kD = ev.which,
    note = Data.keyCodes.indexOf(kD);
    noteOff(note);
  }

  function noteOff(note){
    keyArr[note].noteOff();
    // Remove any DOM or style change
  }

  return {
    createKeys : createKeys,
    gain : gain,
    keyDown : keyDown,
    keyUp : keyUp,
    audioCtx : audioCtx,
    WavUp : WavUp,
    WavDown : WavDown,
    wavDisp : wavDisp,
    displayWave : displayWave,
    setWave : setWave,
    wavIndx : wavIndx,
    waveTypes : waveTypes,
    delay : delay
  }

})()

window.addEventListener('keydown', Synth.keyDown, false);
window.addEventListener('keyup', Synth.keyUp, false);
