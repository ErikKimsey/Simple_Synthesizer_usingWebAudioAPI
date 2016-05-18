Synthesizer
===========

About
-----------------------
Using the Web Audio API, Canvas, and later the Web MIDI API, I'm building a simple synthesizer.  The keys are constructors, instances created dynamically and pushed into an array.  I've used the Railsback Curve function to create frequencies of those of an 88-key piano.  

At completion, the user will be able to:
* change the wave type,
* play keys in polyphony,
* adjust the gain,
* and apply delay.

Disclaimer
----------
This project is in its very infancy, 2 days old as of May 18, 2016.  That being said, at the moment, the primary functions of initializing the audio context, creating the keyboard keys and applying their wave types are all in separate files.  In the following days, I hope to put them together into one file and get some simply UI together with Canvas.
