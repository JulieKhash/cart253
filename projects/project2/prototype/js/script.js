/**
Project 2 prototype
Julie Khashimova

*/

"use strict";
let musicXylophone;
let amp;


/**
Description of preload
*/
function preload() {
  musicXylophone = loadSound(`assets/sounds/dream.mp3`);

}


// initial setup of the canvas
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
// making a js instance of the sound
  amp = new p5.Amplitude();

}

function draw() {
// gets a current volume of the music
let initialVolume = amp.getLevel();
//mapps the sound into the larger range of numbers
let diameter = map(initialVolume, 0, 0.3, 10, 600);
//make bacgkround responsive to music beats
background(0, diameter/7, diameter/6);

}


// toggles between playing/pausing the music when the mouse is pressed
function mousePressed(){
  if(musicXylophone.isPlaying() === true){
    musicXylophone.pause();
  } else {
    musicXylophone.play();
  }
}
