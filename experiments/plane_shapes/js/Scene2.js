"use strict";

let fireman;
let fire;
let eyeImg;
let planet;

let music;
let amp;
let fft;

let numEllipses = 6;
let rectSize = 400;
let numSmallSpheres = 10;
let numMainSpheres = 3;

let minRotationSpeed = 0.001;
let maxRotationSpeed = 0.01;

let soundThreshold = 200;

function preload() {
  fireman = loadImage(`assets/images/CircusMan.png`);
  fire = loadImage('assets/images/fireball.gif');
  planet = loadImage('assets/images/angel33.png');
  eyeImg = loadImage('assets/images/light.png');
  music = loadSound(`assets/sounds/one-two.mp3`);
}

function setup() {
  createCanvas(1700, 1000, WEBGL);

  amp = new p5.Amplitude();
  music.setVolume(0.5);
  fft = new p5.FFT(0.8, 512);
  music.play();
}

function draw() {
  orbitControl(6, 6, 0.2);
  translate(0, 0, 0);

  let radius = width / 6;

  // get the volume to detect the beats
  let volume = amp.getLevel();
  let mapVolume = map(volume, 0, 0.3, 10, 200);

  let scaleVolume = map(volume, 0, 0.3, 0.5, 20);

  let spectrum = fft.analyze(); //gets an array of frequency bands

  // amplitude of certain frequency bands
  let bass = fft.getEnergy(`bass`);
  let mid = fft.getEnergy(`mid`);
  let treble = fft.getEnergy(`treble`);

  // map frequency value to a "good" number
  let mapBass = map(bass, 0, 255, 5, radius);
  let mapMid = map(mid, 0, 255, 5, radius * 2);
  let mapTreble = map(treble, 0, 255, 5, radius * 10);

  background(0, 0, mapVolume / 2);

  let minRotationValue = frameCount * minRotationSpeed;
  let maxRotationValue = frameCount * minRotationSpeed;

  // center fire ball
  push();
  translate(-10, 0, 0);
  noStroke();
  rotate(maxRotationValue * 5);
  rotateX(maxRotationValue);
  rotateY(maxRotationValue);
  rotateZ(maxRotationValue);
  texture(fire);
  sphere(90 + scaleVolume * 1.5);
  pop();

  // orbital ellipses
  push();
  for (let i = 0; i < numEllipses; i++) {

    rotateX(minRotationValue * 5);
    rotateY(minRotationValue * 5);
    rotateZ(minRotationValue * 5);

    noFill();
    stroke(mapMid / 3 * scaleVolume / 2, mapMid / 3 * scaleVolume / 2, mapTreble * 2 + mapMid, mapMid);
    strokeWeight(scaleVolume / 4);
    rectMode(CENTER);
    ellipse(0, 0, rectSize * i + scaleVolume);
  }
  pop();

  //floating fire balls
  push();
  for (let j = 0; j < numSmallSpheres; j++) {

    let x = radius * cos(j);
    let y = radius * sin(j);
    translate(x + 200, y + 100, 200);
    rotate(-minRotationValue * 3);
    noStroke();

    rotateY(minRotationValue * 3);
    rotateZ(-minRotationValue * 3);

    texture(fire);
    sphere(20 + j + scaleVolume / 2);
  }
  pop();

  //make the light appear
  push();
  if (mapMid > 200) {
    texture(eyeImg);
    rotate(-maxRotationValue);
    rotateX(-minRotationValue * 5);
    rotateY(-minRotationValue * 5);
    rotateZ(minRotationValue * 5);
    noStroke();
    ellipse(0, 0, mapBass + mapMid * 5 + mapTreble * 3);
  }

  else {
    rotate(-maxRotationValue);
    rotateX(minRotationValue * 5);
    rotateY(minRotationValue * 5);
    imageMode(CENTER);
    image(fireman, 0, 250, 3000 / 4 + mapVolume + mapTreble / 2, 4000 / 4 + mapVolume + mapTreble / 2);

    noFill();
    stroke(mapMid / 3, mapMid / 3, mapTreble * 2, mapMid);
    strokeWeight(scaleVolume / 4);
    ellipse(0, 0, 1900 + mapTreble / 2);
  }
  pop();

  console.log(mapMid);
}
