
"use strict";

let sunImg;
let darkPlanetImg;

let numStars = 200;

let sun ={
  x: 1800,
  y: 100,
  vx: 0.7,
  vy: 0.3,
  size: 1100,
  angle: 6
}

let planet ={
  x: 200,
  y: 1000,
  vx: 0.9,
  vy: 0.6,
  size: 650,
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

checkPlanetSize();
moveSun();
movePlanet();
eclipseMode();
//text8()
displayClick()


}

// makes
function makeStars(){

let glitch = random(0, 250);
for (let i = 0; i < numStars; i++){
let x = random(0, width);
let y = random(0, height);
noStroke()
fill(glitch, 150);
strokeWeight(1);
ellipse(x, y, 2);
}
}


// moves sun down and to the left
function moveSun(){
sun.x -= sun.vx;
sun.y += sun.vy;
sun.size +=0.7;
sun.size = constrain(sun.size, 1000,  1800);
//rotates sun
push();
translate (sun.x, sun.y);
rotate(sun.angle);
image(sunImg, 0, 0, sun.size, sun.size);
sun.angle+=0.2;
pop();
}

// moves planet up and to the right
function movePlanet(){
planet.x += planet.vx;
planet.y -= planet.vy;
planet.size -=0.3;
planet.size = constrain(planet.size,  340, 650);
//rotates sun
push();
translate (planet.x, planet.y);
rotate(planet.angle);
image(darkPlanetImg, 0, 0, planet.size, planet.size);
planet.angle+=0.7;
pop();
}

//check the distance between the planent and the sun
function isOverlap(){
let d = dist(planet.x, planet.y, sun.x, sun.y);
if (d < planet.size/14){
  return true;
}
else {
  return false;
}
}

// planet and the sun stops after and shows starsoverlap
function eclipseMode(){
  if (isOverlap()){
  planet.vy = 0;
  planet.vx = 0;
  sun.vy = 0;
  sun.vx = 0;
  push();
  makeStars();
  tint(10, 200);
  pop();
}
}
 function displayClick(){
   if (checkPlanetSize()){
     text9();
   }
   else {
     text8();
   }
 }

// displays a text before eclipse
function text8(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  if (isOverlap() && planet.vx === 0){
    fill(0, 0);
  }
    else {
  text(`Wait for an Eclipse`, width/2+100, height/2+200);
}
}

// displays a text
function text9(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(25);
  fill(col);
  textAlign(CENTER, CENTER);

  text(`Click`, planet.x, planet.y);
}

// checks the planet's size
function checkPlanetSize(){
  if(planet.size === 340){
  return true;
  }
  else {
    return false;
  }
}


function isOnPlanet(){
  let d = dist(mouseX, mouseY, planet.x, planet.y);
  if (d < planet.x/2){
  return true;
}
 else {
return false;
}
}


// if mouse clicked move to other state
