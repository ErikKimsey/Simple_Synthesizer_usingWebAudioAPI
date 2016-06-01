'use strict';

/*
**
**
*/

var Synth = (function(){

  var i = 0,
  _prevKeyDown = {},
  keyboard = document.getElementById('keyboard'),
  element = document.getElementsByClassName('key'),
  keyArr = new Array(),
  audioCtx = new (window.AudioContext || window.webkitAudioContext),
  gain = audioCtx.createGain();

  gain.connect(audioCtx.destination);

  function paintKeyElems(ind){
      var el = document.createElement('div');
      el.setAttribute('class', 'key');
      el.setAttribute('id', ind);
      console.log(el);
      keyboard.appendChild(el);
  }

  function createKeys(){
    for(var i = 40; i < 53; i++){
      // keyArr[i] = new Key(i, 0);
      paintKeyElems(i-39);
    }
  }

  function _downKey(ev){
    var kD = ev.which,
    note = Data.keyCodes.indexOf(kD);
      if( _prevKeyDown[ kD ] == null ){
          _prevKeyDown[ kD ] = {};
      }
      _prevKeyDown[ kD ][ note ] = true;
  };

  function _upKey(ev){
      var kD = ev.which,
      note = Data.keyCodes.indexOf(kD);
      if( _prevKeyDown[ kD ] != null ){
          _prevKeyDown[ kD ][ note ] = null;
      }
  };

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
        console.log(kD, note);
        noteOn(note);
        _downKey(ev);
    }
  }

  function noteOn(note){
      keyArr[note] = new Key(note);
  }

  function keyUp(ev){
    _upKey(ev);
    var kD = ev.which,
    note = Data.keyCodes.indexOf(kD);
    console.log(kD, note);
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
  }

})()

window.addEventListener('keydown', Synth.keyDown, false);
window.addEventListener('keyup', Synth.keyUp, false);
