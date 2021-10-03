
"use strict";
let angle = 1;
let x = 50;
let y = 50;

let rect1 = {
  x: 0,
  y: 0,
  sizeW: 100,
  sizeH: 100


}

function setup (){
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  push();
  translate(200, 200);
  scale(1, 1)
  rotate(angle);
  //scale(mouseX/100, mouseY/100);
  stroke(255);
  fill(100);
  //rectMode(CENTER);
  rect(0, 0, 100, 50);

  pop();

  angle +=1;
  // x += 1;
  // y +=1;
  // x = constrain(x, 0, 200);
  // y = constrain(y, 0, 200);
  // //rect1.sizeW +=1;


}
