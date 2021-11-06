"use strict";

let music;
let amp;

let lightImg;
let sunImg;
let angelImg;

let numEllipses = 5;
let size = 300

function preload(){
  lightImg = loadImage(`assets/images/angel.png`);
  sunImg = loadImage(`assets/images/light.png`);
  music = loadSound(`assets/sounds/dream.mp3`);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //music.setVolume(0.5);
  amp = new p5.Amplitude();
  music.play();
}

function draw() {




  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.3, 10, 600);
  background(0, diam/7, diam/6);

 push();
  for(let i = 0; i < numEllipses; i++){

  //rotate(i/2 + frameCount/40);

  rotateX(frameCount * -0.009);
  rotateY(frameCount * -0.009);
  rotateZ(frameCount * -0.009);


    stroke(255);
    strokeWeight(1)
    noFill();
    //fill(255);
  //  texture(sunImg)
    rectMode(CENTER)
    ellipse(0, 0, size, mouseX*i+diam);
    // imageMode(CENTER)
    pop();
  }

push()
  rotateX(frameCount * -0.008);
  rotateY(frameCount * -0.008);
  rotateZ(frameCount * -0.008);
  texture(lightImg)
  rectMode(CENTER)
  ellipse(0, 0, size+diam/2, size+diam/2);

pop()

}
