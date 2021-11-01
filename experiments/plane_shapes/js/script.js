

"use strict";
let angel;


let ang = {
  x: 0,
  y: 0,
  vx:0,
  vy:0,
  speed: 5
}


function preload() {
  angel = loadImage(`assets/images/angel.png`);

}

function setup() {
  createCanvas(700, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  //translate(width/2, height/2, 0);
  //normalMaterial();
  push();
  noFill();
  stroke(0, 0, random(255));
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  plane(100);
  pop();

  push();
  noFill();
  stroke(0, 0, random(255));
  rotateZ(frameCount * -0.01);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  plane(100);
  pop();

  push();
  noFill();
  stroke(0, random(200), random(255));
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  plane(100);
  pop();

  push();
  noFill();
  stroke(0, random(200), random(255));
  rotateZ(frameCount * -0.02);
  rotateX(frameCount * -0.02);
  rotateY(frameCount * -0.02);
  plane(100);
  pop();

push();
noFill();
stroke(0, random(200), random(255));
 rotateX(frameCount * 0.01);
 rotateZ(frameCount * 0.01);
 cone(50, 100);
 pop();

 push();
 noFill();
 stroke(0, random(200), random(255));
  rotateX(frameCount * -0.01);
  rotateZ(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  cone(100, 200);
  pop();

  push();
  //translate(width/2-350, height/2-200);

  let angle = 0
  rotate(angle);
  angle+=0.1;

  // ang.vx += random(-ang.speed, ang.speed);
  // ang.vy += random(-ang.speed, ang.speed);

  ang.x += 0.1;
  ang.y += 0.1;

  imageMode(CENTER);
  image(angel,ang.x, ang.y, 3000/7, 3000/7);
  pop()
}
