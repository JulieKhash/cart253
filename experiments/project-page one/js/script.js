
"use strict";

let handImg;
let shadowImg;

let handPosition ={
  x: 810,
  y: 665,
  place: 90,
  alpha:100
}



function preload() {
  shadowImg = loadImage("assets/images/shadow.gif");
  handImg =  loadImage("assets/images/handgre.png");
}



function setup() {
  createCanvas(1900, 1300);

}

function draw() {
  // x = width/3+190;
  // y = height/2;

background(0);
imageMode(CENTER);
tint(100, 210, 210);
image(shadowImg, width/2, height/2, 800, 590);
tint(255, 100); // how to apply a tint to a single code?
image(handImg, mouseX, mouseY, 140, 190);


//hand postion point
noStroke();
fill(200, handPosition.alpha);
ellipse(handPosition.x, handPosition.y, handPosition.place);

}
