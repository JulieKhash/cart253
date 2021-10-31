"use strict";

let music;
let fft;
let w;

let spectrum = [];

let button;



function toggleMusic() {
  if (music.isPlaying()) {
    music.pause();
  } else {
    music.play();
  }
}

function preload() {
  music = loadSound(`assets/sounds/funnel.mp3`);
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  angleMode(DEGREES);

  button = createButton(`toggle`);
  button.mousePressed(toggleMusic);

  music.play();
  fft = new p5.FFT(0.9,64);
  w = width/ 64;
}

function draw() {
  background(0);

  push();
  // beginShape();
  translate(width/2, height/2);
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i ++){
    let angle = map(i , 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 10, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);
    fill(i, 255, 255);
    //(i, 255, 255);
    rect(0, 0, x*3, y*3);
    //let y = map(amp, 0, 255, height, 0);
    // stroke(255, 0,0);
    // noStroke();

    // rect(i*w, y, w-2, height - y)
  }
  // endShape();

  //console.log(spectrum.length);

}
