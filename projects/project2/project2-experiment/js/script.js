/**
Title of Project
Author Name

*/

"use strict";

let lightImg;
let angelImg;

let musicXylophone;
let amp;

let numEllipses = 5;
let ellipses = []  //an empty array to store our ellipses

let size = 300;
this.minRotationSpeed = 0.001;
this.maxRotationSpeed = 0.01;

let angel;

let volume;
let mapVolume;

function preload() {
  angelImg = loadImage(`assets/images/AngelMan.png`);
  lightImg = loadImage(`assets/images/light.png`);
  musicXylophone = loadSound(`assets/sounds/dream.mp3`);
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  musicXylophone.play();
  amp = new p5.Amplitude();
  amp.setInput(musicXylophone);

  // makes a given number of ellipses
    for (let i = 0; i <  numEllipses; i++){
    let ellipse = new Ellipse1(0, 0);
    ellipses.push(ellipse);
}
    angel  = new Angel(lightImg);
}

function draw() {
  orbitControl(6, 6, 0.2);
  background(50);

  volume = amp.getLevel();
  mapVolume = map(volume, 0, 0.3, 10, 600);

  background(0, mapVolume / 7, mapVolume / 6);

/////////////////////////////////////////
// First firstScene
  // displays rotating circles
  push();

  for (let i = 0; i < ellipses.length; i++){
   ellipses[i].rotate();
   ellipses[i].display();
   // ellipses[i].keyPressed();
  }

  pop();


  push();
  angel.rotate();
  angel.display();
  pop();

  // push()
  // stroke(255);
  // strokeWeight(1);
  //
  // rotateX(frameCount * -this.minRotationSpeed*8);
  // rotateY(frameCount * -this.minRotationSpeed*8);
  // rotateZ(frameCount * -this.minRotationSpeed*8);
  //
  // if (mapVolume > 250) {
  //   texture(lightImg);
  // } else {
  //   texture(angelImg);
  // }
  // rectMode(CENTER)
  // ellipse(0, 0, size + mapVolume / 2);
  // pop();



console.log();
}
