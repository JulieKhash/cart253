
"use strict";

let diam = 20;
let numCircles= 10;
let circleColor = 255;
let circleAlpha = 1;
let colorChangeRate = 0.01


let music;
let amp;

let lightImg;
let angelImg;
let userHand;

function preload(){
  lightImg = loadImage(`assets/images/angel2.png`);
  userHand = loadImage(`assets/images/bat.png`);
  music = loadSound(`assets/sounds/body.mp3`);
}


function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);


  push();
  for(let i = 0; i < numCircles; i++){
    // fill(0, circleColor, circleColor, circleAlpha);   //transparency
    // //circleColor+=0.3;
    //
    // circleAlpha += colorChangeRate;
    // if (circleAlpha >= circleColor){
    //   circleAlpha = 1;
    // }

    stroke(0, i*20, i*20);
    //noStroke();

   noFill();
   translate(width/20, height/20);
   //rotate(i/2 + frameCount/40);

   rotateX(frameCount * -0.004);
   rotateY(frameCount * -0.004);
   rotateZ(frameCount * -0.004);

    let centX = width/2;
    let centY = height/2;

    rectMode(CENTER);
    texture(lightImg)
    ellipse(0, -300, diam*i);
    pop();
  }
}
