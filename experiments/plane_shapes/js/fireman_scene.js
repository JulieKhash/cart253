"use strict";

let fireman;
let fire;

let music;
let amp

let numRects = 4;
let rectSize = 400;
let numEllipses = 25;

function preload() {
  fireman = loadImage(`assets/images/batman15.png`);
  fire = loadImage('assets/images/fireball.gif');
  music = loadSound(`assets/sounds/distortion.mp3`);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  amp = new p5.Amplitude();
  music.setVolume(0.4);
  music.play();
}

function draw() {
  orbitControl();

  let volume = amp.getLevel();
  let highestVolume = map(volume, 0, 0.3, 0.5, 3);
  background(2, 0, highestVolume*30);

  push();

  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  texture(fire);
  noStroke();
  // fill(100, 20, 20, 100)
  sphere(100);
  pop();


  push();
  for (let i = 0; i < numRects; i++){

    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.005);

    stroke(highestVolume*200);
    strokeWeight(highestVolume);
    noFill();
    rectMode(CENTER);
    //texture(fireman)
    ellipse(0, 0, rectSize*i);
    pop();
  }
  push();
  rotateX(frameCount * -0.008);
  rotateY(frameCount * -0.008);
  rotateZ(frameCount * -0.008);


  imageMode(CENTER);
  image(fireman, 0, 150,  3000/2, 4000/2);
  // texture(fireman);
  // ellipse(0, 0, rectSize);
  pop();

  push();
  for (let j = 0; j < numEllipses; j++){
    //rotate(frameCount*0.003);
    rotateX(frameCount * -0.006);
    rotateY(frameCount * - 0.006);
    rotateZ(frameCount * -0.006);

    texture(fire);
    ellipse(500+j, 500, 150);
  }
    pop();


}
