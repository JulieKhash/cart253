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
    for (let i = 0; i < numEllipses; i++){
    let ellipse = new Ellipse(0, 0, 300);
    ellipses.push(ellipse);
}
}

function draw() {
  orbitControl(6, 6, 0.2);
  background(50);

  let volume = amp.getLevel();
  let mapVolume = map(volume, 0, 0.3, 10, 600);

  background(0, mapVolume / 7, mapVolume / 6);

  // displays rotating circles

  push();
  for (let i = 0; i < ellipses.length; i++){
  let ellipse = ellipses[i];

   //ellipse.mouseControl();
   ellipse.rotateObject();
   ellipse.display();
  }
  pop();


console.log(ellipses);
}
