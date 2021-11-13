"use strict";

let music;
let amp;


let lightImg;
let angelImg;

let numEllipses = 5;
let size = 300;

let strokeColor = 255;
let strokeSize = 1;

let minRotationSpeed = 0.001;
let maxRotationSpeed = 0.01;


function preload() {
  angelImg = loadImage(`assets/images/AngelMan.png`);
  lightImg = loadImage(`assets/images/light.png`);
  music = loadSound(`assets/sounds/dream.mp3`);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);


  amp = new p5.Amplitude();
  // music.setVolume(0.5);
  music.play();
}

function draw() {
  orbitControl(6, 6, 0.2);

  let volume = amp.getLevel();
  let mapVolume = map(volume, 0, 0.3, 10, 600);

  stroke(strokeColor);
  strokeWeight(strokeSize);

  let minRotationValue = frameCount * minRotationSpeed;
  let maxRotationValue = frameCount * minRotationSpeed;

  let mapMouseX = map(mouseX, 0, width, 0, 400);

  background(0, mapVolume / 7, mapVolume / 6);


  // rotating ellipses
  push();
  for (let i = 0; i < numEllipses; i++) {

    rotateX(-minRotationValue * 9);
    rotateY(-minRotationValue * 9);
    rotateZ(-minRotationValue * 9);

    noFill();
    rectMode(CENTER)
    ellipse(0, 0, size, mapMouseX * i + mapVolume);
  }
  pop();

// angel and light
  push()
  rotateX(-minRotationValue * 8);
  rotateY(-minRotationValue * 8);
  rotateZ(-minRotationValue * 8);

  if (mapVolume > 250) {
    texture(lightImg);
  } else {
    texture(angelImg);
  }
  rectMode(CENTER)
  ellipse(0, 0, size + mapVolume / 2);
  pop();

  console.log(mapVolume);
}
