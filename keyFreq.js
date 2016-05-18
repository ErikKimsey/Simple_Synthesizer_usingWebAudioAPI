'use strict';

// "Railsback Curve": Algorithm for piano key frequency (Hz),
// where "n" is the key number.  440Hz is A4.
function keyFreq(n){
  var power = (n - 49)/12;
  return Math.pow(2, power)*440;
}
