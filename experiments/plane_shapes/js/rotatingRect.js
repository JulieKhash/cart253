"use strict";
let size = 30;
let numCircles = 15;
let strokeColor = 255;
let strokeAlpha = 10;

let music;
let amp;

let lightImg;
let angelImg;

function preload(){
  lightImg = loadImage(`assets/images/angel.png`);
  music = loadSound(`assets/sounds/germind.mp3`);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);


  amp = new p5.Amplitude();
  music.play();


}

function draw() {
  background(0);
  //camera(mouseX, 900, 20 + sin(frameCount * 0.01) * 300, 0, 0, 0, 0, 1, 0);


  let vol = amp.getLevel();

  let diam = map(vol, 0, 1, 10, 350);

  translate(width/20, height/20);

  let spacing = 1
  for(let i = 0; i < numCircles; i++){
    push();

  rotate(i/2 + frameCount/40);

  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.02);
  rotateZ(frameCount * -0.03);


  noFill();
  stroke(10*diam, strokeAlpha+diam);

  strokeWeight(vol+1);

   rectMode(CENTER);
   texture(lightImg);
   box(size*i, size*i, size*i+diam);
   pop();


}
}


// function mousePressed(){
//
// }
