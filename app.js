'use strict';

var keyboard = document.getElementById('keyboard');
var element = document.getElementsByClassName('key');
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

/*
** Draw key elements
*/
