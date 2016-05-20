'use strict';


var keyCodes = [90, 83, 88, 68, 67, 86, 71, 66, 72, 78, 77, 75, 188];
console.log(keyCodes.length);

window.addEventListener("keypress", function (event) {
  if (event.defaultPrevented) {
    return; // Should do nothing if the key event was already consumed.
  }
  console.log(event);
  switch (event) {
    case event == *\:
    console.log("hit");
    osc = audioCtx.createOscillator();
    osc.frequency.value = keyArr[44].freq;
    osc.connect(audioCtx.destination);
    osc.start(0);
      break;
    default:
    console.log('default');
      return; // Quit when this doesn't handle the key event.
  }

  // Consume the event for suppressing "double action".
  event.preventDefault();
}, true);
