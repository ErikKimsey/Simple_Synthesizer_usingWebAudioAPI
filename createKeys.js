'use strict';

// Creates array of new Key objects.
// createKeys()
(function createKeys(){
  var keyArr = [];
  for(var i = 40; i < 53; i++){
    keyArr[i] = new Key(i, 0);
    console.log(keyArr[i]);
  }
})();
