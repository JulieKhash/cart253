"use strict";

let diam = 20;
let numCircles = 20;
let circleColor = 255;
let circleAlpha = 1;
let colorChangeRate = 0.01;


let music;
let amp;

let lightImg;
let sunImg;
let angelImg;

let numEllipses = 5;
let size = 300

function preload(){
  lightImg = loadImage(`assets/images/blue.png`);
  sunImg = loadImage(`assets/images/thunder.png`);
  music = loadSound(`assets/sounds/dream.mp3`);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  perspective(PI/3, width / height, 80, 1000);
}

function draw() {
  background(0);
  // orbitControl();



  for (let i = 0; i < numCircles; i++) {
    // fill(0, circleColor, circleColor, circleAlpha);   //transparency
    // //circleColor+=0.3;
    //
    // circleAlpha += colorChangeRate;
    // if (circleAlpha >= circleColor){
    //   circleAlpha = 1;
    // }
    //orbitControl();
    //stroke(0, i * 20, i * 20);
    //noStroke();

    noFill();
    noStroke();
    //translate(width/20, height/20);
    rotate(i/2 + frameCount/40);

    //rotateX(frameCount * -0.001);
    //rotateY(frameCount * -0.001);
    rotateZ(frameCount * -0.002);

    rectMode(CENTER);
    texture(lightImg);
    translate(-15, 0, sin(frameCount / 30) * 95);
    box(100);
  }

}
