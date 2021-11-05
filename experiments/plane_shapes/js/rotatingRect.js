"use strict";
let size = 5;
let numCircles = 40;
let strokeColor = 255;
let strokeAlpha = 0;

let music;
let amp;

let lightImg;
let angelImg;

function preload(){
  lightImg = loadImage(`assets/images/sun.png`);
  music = loadSound(`assets/sounds/music.mp3`);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);


  amp = new p5.Amplitude();
  music.play();


}

function draw() {
  background(0);


  let vol = amp.getLevel();

  let diam = map(vol, 0, 1, 10, 250);

  translate(width/20, height/20);


  for(let i = 0; i < numCircles; i++){
    push();

  rotate(i/2 + frameCount/40);

  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  rotateZ(frameCount * -0.01);


  noFill();
   stroke(1*diam, 5*diam, 10*diam, strokeAlpha);
    //strokeAlpha += 0.05;
//  strokeWeight(diam*100);
    // if (strokeAlpha === 100){
    //   strokeAlpha -= 0.1;
    // }

    strokeWeight(vol+1);
  // noStroke();
    rectMode(CENTER);
  //  texture(lightImg);
    rect(size*i, size*i, size*i+diam);
    pop();
  }
}

// function mousePressed(){
//
// }
