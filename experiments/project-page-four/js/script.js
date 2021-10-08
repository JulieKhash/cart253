
"use strict";

let sunImg;
let darkPlanetImg;
let angle = 10


let planet ={
  x: 950,
  y: 12,
  size: 6
}

/**
Description of preload
*/
function preload() {

  sunImg = loadImage("assets/images/sun.png");
  darkPlanetImg =  loadImage("assets/images/darkplanet.png");

}


/**
Description of setup
*/
function setup() {
  createCanvas(1900, 1300);
}


/**
Description of draw()
*/
function draw() {
let glitter= random(0,25);
background(glitter);

push();
translate(width/2, height/5);
rotate(angle);
imageMode(CENTER);
image(sunImg, 0,0 , 800, 800);
pop();


image(darkPlanetImg, width/2, height-100);

}
