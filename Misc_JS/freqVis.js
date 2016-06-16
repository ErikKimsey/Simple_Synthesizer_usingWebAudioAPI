'use strict';

var analyser = audioCtx.createAnalyser();

//source.connect(analyser);
analyser.connect()
analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArr = new Uint8Array(bufferLength);

var canvas = document.getElementById('canvas');
if(canvas.getContext){
  var canvasCtx = canvas.getContext('2d');
} else {
  console.log("Featured unsupported by this browser.")
}
canvasCtx.clearRECT(0,0,WIDTH,HEIGHT);

function draw(){
  drawVis = requestAnimationFrame(draw);
  analyser.getByteFrequencyData(dataArr);

}
