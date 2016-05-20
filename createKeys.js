'use strict';

// Creates array of new Key objects.
// createKeys()
var keyArr = [];
function createKeys(){
  for(var i = 40; i < 53; i++){
    keyArr[i] = new Key(i, 0);
    createKeyElems(i-39);
  }
}
createKeys();
