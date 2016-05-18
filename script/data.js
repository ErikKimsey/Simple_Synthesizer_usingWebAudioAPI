


var synthData = (function(){

  var waveTypes = [
    "sine",
    "square",
    "sawtooth",
    "triangle"
  ];

  var octave = [
    220,
    440,
    880
  ];

  var keyFreqDif = 8.1225;

  return {
    waveTypes : waveTypes,
    octave : octave,
    keyFreqDif : keyFreqDif
  }
})();
