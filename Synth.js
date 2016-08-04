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
  keyToggle = document.getElementById('keyBdToggle'),
  element = document.getElementsByClassName('key'),
  keyArr = new Array(),
  instrDot = document.getElementById('instrDot'),
  instrP = document.getElementById('instrP'),
  instrBool = false,
  wavUp = document.getElementById('WavUp'),
  wavDown = document.getElementById('WavDown'),
  wavDisp = document.getElementById('WavDisplay'),

  /////////////////////////
  // AUDIO GRAPH : BEGIN //
  audioCtx = new (window.AudioContext || window.webkitAudioContext),
  analyser = audioCtx.createAnalyser(),
  delay = audioCtx.createDelay(),
  feedback = audioCtx.createGain(),
  gain = audioCtx.createGain(),
  filter = audioCtx.createBiquadFilter();
  gain.gain.value = 0.3,
  delay.delayTime.value = 0.4;
  feedback.gain.value = 0.1;
  filter.frequency.value = 1000;
  delay.connect(feedback);
  feedback.connect(filter);
  filter.connect(delay);
  gain.connect(analyser);
  analyser.connect(gain);
  gain.connect(audioCtx.destination);
  delay.connect(audioCtx.destination);
  var canvas = document.getElementById('canvas'),
  canvasCtx = canvas.getContext('2d'),
  WIDTH = canvas.width,
  HEIGHT = canvas.height,
  drawVisual;

  analyser.fftSize = 2048;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);
  console.log(analyser);
// AUDIO GRAPH : END //
///////////////////////

// VISUAL ANALYSER : BEGIN
//
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);
  canvasCtx.fillStyle = 'rgba(11,11,11,0.3)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = '#CCFFE5';

    canvasCtx.beginPath();
    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;
    for(var i = 0; i < bufferLength; i++) {

      var v = dataArray[i] / 128.0;
      var y = v * HEIGHT/2;

      if(i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }
    canvasCtx.lineTo(canvas.width, canvas.height/2);
    canvasCtx.stroke();
  };
  draw();


//
// VISUAL ANALYSER : END



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
    // createKeys : createKeys,
    gain : gain,
    keyDown : keyDown,
    keyUp : keyUp,
    audioCtx : audioCtx,
    wavDisp : wavDisp,
    displayWave : displayWave,
    setWave : setWave,
    wavIndx : wavIndx,
    waveTypes : waveTypes,
    delay : delay,
    audioCtx : audioCtx
  }

})()

window.addEventListener('keydown', Synth.keyDown, false);
window.addEventListener('keyup', Synth.keyUp, false);
