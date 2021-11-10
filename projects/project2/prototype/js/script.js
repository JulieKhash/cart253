/**
Project 2 prototype
Julie Khashimova
*/

"use strict";

let handImg;

let musicXylophone;
let amp;

let numEllipses = 5;
let ellipses = []  //an empty array to store our ellipses

/**
Description of preload
*/
function preload() {
  musicXylophone = loadSound(`assets/sounds/dream.mp3`);
  handImg = loadImage(`assets/images/cursor.png`);
}


// initial setup of the canvas
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
// make an instance of js object
  amp = new p5.Amplitude();

  for (let i = 0; i < numEllipses; i++){
  //let size = 300;
  let ellipse = new Ellipse(0, 0, 300);
  ellipses.push(ellipse);
}
}

function draw() {

// gets a current volume of the music
let initialVolume = amp.getLevel();
//mapps the sound into the larger range of numbers
let diameter = map(initialVolume, 0, 0.3, 10, 600);
//make bacgkround responsive to music beats
background(0, diameter/7, diameter/6);

// displays rotating circles
push();
for (let i = 0; i < ellipses.length; i++){
let ellipse  = ellipses[i];
 ellipse.rotate();
 ellipse.display();
}
pop();

//displays hand image, size changing according to the amplitude
push();
let size = 300
let first_dance = new First_Dance(0, 0, size+diameter/2, handImg);
first_dance.rotate();
first_dance.display();
pop();
}


// toggles between playing/pausing the music when the mouse is pressed
function mousePressed(){
  if(musicXylophone.isPlaying() === true){
    musicXylophone.pause();
  } else {
    musicXylophone.play();
  }
}
