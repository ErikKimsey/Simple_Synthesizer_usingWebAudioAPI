'use strict';

var Data = (function(){

  var keyCodes = [90, 83, 88, 68, 67, 86, 71, 66, 72, 78, 74, 77, 188];

  var waveTypes = [
    'sine',
    'square',
    'sawtooth',
    'triangle'
  ];

  return {
    waveTypes : waveTypes,
    keyCodes : keyCodes
  };

});
