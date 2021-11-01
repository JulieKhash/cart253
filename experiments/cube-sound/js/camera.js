

"use strict";
let song;
var img;
let frozenImg;
let sharks;
let jelly

let jel = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size: 25,
  speed: 10
}


var cameras = [];


function preload() {
  img = loadImage('assets/images/fgg.gif');
  frozenImg = loadImage('assets/images/juggletr.png');
  jelly = loadImage('assets/images/strata.gif');
  song = loadSound(`assets/sounds/funnel.mp3`);
  sharks = loadImage('assets/images/fire-flames.gif');
}

function setup() {
  createCanvas(1200, 1000,WEBGL);
    song.play();

}

function draw() {
  background(0);
  //sphere(50,50);


  camera(100, 100, sin(frameCount * 0.01) * 100, 0, 0, 0, 100, 0, 0);

//  fill(random(0, 100), 50);
  //plane(120, 120);

  for (var i = -1; i < 2; i++) {
    for (var j = -2; j < 3; j++) {
      push();
      translate(i * 160, 0, j * 160);
      rotateX(frameCount * 0.01);
      //tint(255, 200);
      stroke(random(0,255), random(0,255), 0);
      strokeWeight(0.1);
      texture(sharks)
      sphere(20, 20, 20);
      pop();
    }

  }


  push();
    stroke(random(0,255));
  //  tint(255,210);
  // texture(img);
   texture(frozenImg);
   box(200, 200, 200);
   pop();

   push()
   jel.vx += random(-jel.speed, jel.speed);
   jel.vy += random(-jel.speed, jel.speed);

   translate(i * 100, 0, j * 100);

   jel.x += jel.vx;
   jel.y += jel.vy;

   image(jelly, jel.x, jel.y, jel.size, jel.size);
   pop();
}
