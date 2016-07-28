'use strict';

var Analyzer = (function(){
  var analyser = Synth.audioCtx.createAnalyser();
  var canvas = document.getElementById('canvas'),
  canvasCtx = canvas.getContext('2d');

  analyser.fftSize = 2048;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);
  console.log(analyser);

  /*
  Use:
  -bufferLength,
  -dataArray...
  ...as parameters in the canvas animation.
  */
  canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
  function draw() {
    drawVisual = requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);
    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

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

    return {
      analyser : analyser
    }

});

Analyzer();
