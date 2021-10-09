
"use strict";

let sunImg;
let darkPlanetImg;
let angle = 0;

let sun ={
  x: 950,
  y: 260,
  size: 1100,
  speed: 0.9
}

let planet ={
  x: 950,
  y: 950,
  size: 600,
  speed: 0.9,
  angle: 0
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
  angleMode(DEGREES);
}


/**
Description of draw()
*/
function draw() {
let glitter= random(0,25);
background(glitter);

//rotate the sun
push();
translate(sun.x, sun.y);
rotate(angle);
//imageMode(CENTER);
image(sunImg, 0,0 , sun.size, sun.size);
angle+=0.1;
pop();

push();
translate(planet.x, planet.y);
rotate(angle);
image(darkPlanetImg, 0, 0, planet.size, planet.size);
angle+=0.3;
pop();
planet.y = planet.y - planet.speed;
planet.size = planet.size - 0.8;
planet.size = constrain(planet.size, 250, 700);
pop();
//check the distance between planet and sun
let d = dist(planet.x, planet.y, sun.x, sun.y);
if (d < planet.size/10 + sun.size/6){
//planet.y = 280;
planet.x = sun.x;
//translate(sun.x + 200, sun.y- 200);
//imageMode(CENTER);
planet.speed = 0;
glitter = random(0,25);
sun.size-=2;
planet.size -=0.5;
}
}

//constrain sun size to a certain amount than move page
