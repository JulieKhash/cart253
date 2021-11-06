
"use strict";

let diam = 20;
let numCircles= 10;
let circleColor = 255;
let circleAlpha = 1;
let colorChangeRate = 0.01


function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);

  for(let i = 0; i < numCircles; i++){
    // fill(0, circleColor, circleColor, circleAlpha);   //transparency
    // //circleColor+=0.3;
    //
    // circleAlpha += colorChangeRate;
    // if (circleAlpha >= circleColor){
    //   circleAlpha = 1;
    // }

    stroke(i*20);
    //noStroke();

   noFill();
   translate(width/20, height/20);
   //rotate(i/2 + frameCount/40);

   rotateX(frameCount * -0.01);
   rotateY(frameCount * -0.01);
   rotateZ(frameCount * -0.01);

    let centX = width/2;
    let centY = height/2;

    rectMode(CENTER);
    ellipse(0, 0, diam*i);
  }
}
