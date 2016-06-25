'use strict';

var keys = document.getElementsByClassName('key'),
    keyboard = document.querySelector('#keyboard'),
    keyBDToggle = document.getElementById('keyBdToggle'),
    pressed = false,
    toggle = false;

    keyBDToggle.addEventListener('click', function(){
      if(toggle == false){
        keyboard.style.display = "flex";
        toggle = true;
      } else if(toggle != false){
        keyboard.style.display = "none";
        toggle = false;
      }
    });


    /*
    TODO
      Click-to-play:
      eventlistener, get ev.which as index of key array, then
      make that key correspond to the keycodes, in Data.js.
    */
