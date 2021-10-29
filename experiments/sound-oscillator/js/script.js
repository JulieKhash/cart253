"use strict";

let oscillator;
//let angle = 0;
let t = 0;

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  oscillator = new p5.Oscillator(440, `sine`);
  oscillator.amp(0.1);
}

function draw() {
  background(0);

  // let newFreq = map(mouseY, height, 0, 20, 20000);

  // let sinAngle = tan(angle);
  // let newFreq = map(sinAngle, -1, 1, 0, 880);

  // let r = random(0,1);
  // let newFreq = map(r, 0, 1, 440, 880);

  let noiseValue = noise(t);
  let newFreq = map(noiseValue, 0, 1, 440, 2800);
  oscillator.freq(newFreq);

  t = t + 0.1;
  // angle = angle + 0.2;

  push();
  textSize(30);
  textAlign(LEFT, CENTER);
  fill(255, 0, 0);
  text(newFreq, 100, height / 2);
  pop();

  // let newAmp = map(mouseX, 0, width, 0, 0.5);
  // oscillator.amp(newAmp);
}

function mousePressed() {
  oscillator.start();
}

function mouseReleased() {
  oscillator.stop();
}
