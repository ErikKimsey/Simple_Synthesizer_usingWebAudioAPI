'use strict';

(function(){

  var ctx = new AudioContext(),
  node, boolV, osc, o1, o2,o3,
  oct1 = [],
  oct2 = [],
  oct3 = [],
  keyFreq = synthData.keyFreqDif,
  oct = synthData.octave,
  type = synthData.waveTypes;
  // keyFreq.toFixed(4);
  console.log(ctx);

  var key = document.getElementsByClassName('key');
  var keyArr = [];
  console.log(key, keyArr);


key[0].onmousedown = function(){
  o1 = ctx.createOscillator();
  o1.frequency.value = oct[1];
  o1.type = "sawtooth";
  o1.connect(ctx.destination);
  o1.start();
  console.log(o1.frequency.value)
}
key[0].onmouseup = function(){
  // boolV = false;
  o1.stop();
}

//
key[1].onmousedown = function(){
  o2 = ctx.createOscillator();
  o2.frequency.value = oct[1] + keyFreq;
  o2.type = "sine";
  o2.connect(ctx.destination);
  o2.start();
  console.log(o2.frequency.value)
};

key[1].onmouseup = function(){
  // boolV = false;
  o2.stop();
};




key[2].onmousedown = function(){
  o3 = ctx.createOscillator();
  o3.connect(ctx.destination);
  o3.frequency.value = (oct[1] + (keyFreq * 2));
  o3.type = "square";
  o3.start();
  console.log(o3.frequency.value)
}
key[2].onmouseup = function(){
  // boolV = false;
  o3.stop();
}


  // for(var i = 0; i < key.length; i++){
  //   keyArr[i] = ctx.createOscillator();
  //   keyArr[i].frequency.value = oct[1] + (i * keyFreq);
  //   console.log(keyArr[i].frequency.value);
  //   keyArr[i].connect(ctx.destination);
  // }

  // if(keyArr[0= function(){
  //   var n;
  //   this.n = ctx.createOscillator();
  //   this.p
  // }




})();
