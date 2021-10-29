"use strict";

let mic; // variabke to store the object
let ghost = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  image: undefined,
};

function preload() {
  ghost.image = loadImage(`assets/images/clown.png`);
}

function setup() {
  createCanvas(600, 600);

  ghost.x = width / 2;
  ghost.y = height / 2;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);

  // get volume into microphone
  let level = mic.getLevel();

  ghost.x += random(-1, 1);
  ghost.y += random(-1, 1);

  // check if the ghost is scared
  if (level > 0.1) {
    // runs to the right
    ghost.vx = 20;
  }

  ghost.x += ghost.vx;
  ghost.y += ghost.vy;

  // console.log(level);
  // let size = map(level, 0, 1, 0, width);
  //
  // push();
  // fill(255, 0, 0);
  // ellipse(width/2, height/2, size);
  // pop();
  push();
  imageMode(CENTER);
  tint(255, 50);
  image(ghost.image, ghost.x, ghost.y);
  pop();
}
