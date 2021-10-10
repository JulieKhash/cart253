
"use strict";

let sunImg;
let darkPlanetImg;

let sun ={
  x: 1800,
  y: 100,
  vx: 0,
  vy: 0.3,
  size: 1100,
  speed: 0.7,
  angle: 6
}

let planet ={
  x: 200,
  y: 1000,
  vx: 0,
  vy: 0.6,
  size: 650,
  speed: 0.9,
  angle: 60
}

function preload() {

  sunImg = loadImage("assets/images/sun.png");
  darkPlanetImg =  loadImage("assets/images/darkplanet.png");

}


function setup() {
  createCanvas(1900, 1300);
  angleMode(DEGREES);
}


function draw() {
let glitter= random(0,30);
background(glitter);




imageMode(CENTER);




sun.x -= sun.speed;
sun.y += sun.vy;
sun.size +=0.7;
push();
translate (sun.x, sun.y);
rotate(sun.angle);
image(sunImg, 0, 0, sun.size, sun.size);
sun.angle+=0.2;
pop();

planet.x += planet.speed;
planet.y -= planet.vy;
planet.size -=0.3;

push();
translate (planet.x, planet.y);
rotate(planet.angle);
image(darkPlanetImg, 0, 0, planet.size, planet.size);
planet.angle+=0.4;
pop();


//check the distance
let d = dist(planet.x, planet.y, sun.x, sun.y);
if (d < planet.size/14){
  planet.vy = 0.01;
  planet.speed = 0.01;
  sun.vy = 0.01;
  sun.speed = 0.01;
  //planet.size += 1;
  tint(10, 200);
}
}

//if the sun size reaches ... move to other page
