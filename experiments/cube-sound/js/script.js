

"use strict";
let song;

/**
Description of preload
*/
function preload() {
  song = loadSound(`assets/sounds/funnel.mp3`);

}


function setup() {
  createCanvas(700, 700, WEBGL);

}


function draw() {
  background(40);

//translate(width/2, height/2);

push();
rotateZ(frameCount * 0.01);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);

strokeWeight(3);
noFill();
box(100, 100, 100, width/2, height/2);
pop();
}
