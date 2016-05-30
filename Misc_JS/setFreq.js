'use strict';

// Sets each key's freq
function setFreq(){
  for(var i = 0; i < keyArr; i++){
    keyArr[i].freq.apply(this, keyFreq);
  }
}
