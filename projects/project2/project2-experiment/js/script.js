/**
Title of Project
Author Name

*/

"use strict";

let lightImg;
let angelImg;

let musicXylophone;
let amp;


function preload() {
  angelImg = loadImage(`assets/images/AngelMan.png`);
  lightImg = loadImage(`assets/images/light.png`);
  musicXylophone = loadSound(`assets/sounds/dream.mp3`);
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  amp = new p5.Amplitude();
  // music.setVolume(0.5);
  music.play();
}



function draw() {
  orbitControl(6, 6, 0.2);

}
