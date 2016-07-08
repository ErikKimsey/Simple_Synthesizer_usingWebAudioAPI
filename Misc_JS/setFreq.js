'use strict';

/*
** UNDER CONSTRUCTION **
Octave Control:
This logic will allow user to adjust the octave of playback.
*/

// Sets each key's freq
function setFreq(){
  for(var i = 0; i < keyArr; i++){
    keyArr[i].freq.apply(this, keyFreq);
  }
}
