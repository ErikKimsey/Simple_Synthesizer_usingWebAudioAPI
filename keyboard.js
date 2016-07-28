'use strict';

var Keyboard = function(){

  var togd = false;

  function isTogd(){
    return togd;
  }

  function makeTogd(){
    return togd = togd ? false : true;
  }

  return {
    makeTogd : makeTogd,
    isTogd : isTogd
  }
};
