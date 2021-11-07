"use strict"


let music;
let amp;

let lightImg;
let angelImg;

function preload(){
  lightImg = loadImage(`assets/images/sun.png`);
  music = loadSound(`assets/sounds/music.mp3`);
}

function setup() {
  createCanvas(1000, 1000);

  //music.setVolume(0.5);
  amp = new p5.Amplitude();
  //amp.setInput(music);
  music.play();
}

function draw() {
  background(0);

  let vol = amp.getLevel();

  let diam = map(vol, 0, 0.3, 10, 600);

  fill(255);
  ellipse(200, 200, diam)
}
