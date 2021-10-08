
"use strict";

let lightImg;
let handCatcherImg;


let light = {
  x: 1000,
  y: 150,
  size: 300,
  vx: 0,
  vy: 0,
  speed: 15
}

let handCatcher ={
  sizeX: 200,
  sizeY: 272
}

let xoff = 0;
let yoff = 0;

function preload() {
  lightImg = loadImage("assets/images/light.png");
  handCatcherImg =  loadImage("assets/images/handbrighter.png");
}

function setup() {
  createCanvas(1900, 1300);

}


function draw() {
  let glitter= random(0,25);
  background(glitter);

  light.vx =  random(-light.speed, light.speed);
  light.vy =  random(-light.speed, light.speed);
  //
  light.x = light.x + light.vx;
  light.y = light.y + light.vy;

  light.x = constrain(light.x, 0, width);
  light.y = constrain(light.y, 0, height);

  imageMode(CENTER);
  image(lightImg, light.x, light.y, light.size, light.size);

  
  image(handCatcherImg, mouseX, mouseY, handCatcher.sizeX, handCatcher.sizeY);

  // check if user catcher the light

}
