

"use strict";

function preload() {
}

let user ={
  x: 0,
  y: 0,
  size: 100
}

let fish1;
let fish2;
let fish3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  fish1 = createFish(400, 300);
  fish2 = createFish(500, 300);
  fish3 = createFish(600, 300);

  function createFish(x, y){
    let fish = {
      x: x,
      y: y,
      size: 50,
      eaten: false
    }
    return fish;
  }
}


function draw() {
  background (120, 100, 140);

  moveUser();

  checkFish(fish1);
  checkFish(fish2);
  checkFish(fish3);

  displayUser();
  displayFish(fish1);
  displayFish(fish2);
  displayFish(fish3);
}

function moveUser(){
user.x = mouseX;
user.y = mouseY;
}

function checkFish(fish){
  if (!fish.eaten) {
    let d = dist(user.x, user.y, fish.x, fish.y);
    if (d < user.size/2 + fish.size/2) {
      fish.eaten = true;
    }
  }
}

function displayUser(){
  push();
  fill(255, 0, 0);
  ellipse(user.x, user.y, user.size);
  pop();
}

function displayFish(fish){
if(!fish.eaten){
  push();
  fill(255, 100, 150);
  ellipse(fish.x, fish.y, fish.size);
  pop();
}
}
