
"use strict";

let sunImg;
let darkPlanetImg;
let angle = 0;

let sun ={
  x: 950,
  y: 260,
  size: 1100,
  speed: 0.6,
  angle: 6
}

let planet ={
  x: 950,
  y: 950,
  size: 600,
  speed: 0.9,
  angle: 150
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
sun.x -= sun.speed;
//rotate the sun
push();
translate(sun.x, sun.y-600);
rotate(sun.angle);
//imageMode(CENTER);
image(sunImg, 0,0 , sun.size, sun.size);
sun.angle+=0.1;
pop();


//rotate the planet
push();
translate(planet.x, planet.y);
rotate(planet.angle);
image(darkPlanetImg, 0, 0, planet.size, planet.size);
planet.angle+=0.1;
planet.y = planet.y - planet.speed;
planet.size = planet.size - 0.9;
planet.size = constrain(planet.size, 250, 700);
pop();


//check the distance between planet and sun
let d = dist(planet.x, planet.y, sun.x, sun.y);
if (d < planet.size/10 + sun.size/4){
//planet.y = 280;
sun.speed = 0;
planet.speed = 0;
noLoop();
//planet.angle -=0.1;
//sun.angle-=0.1;

// translate(planet.x, planet.y);
// sun.x = planet.x;
// sun.y = planet.y;
// sun.angle = 0;
// sun.size+=2;
// planet.size -=2
}

//
// planet.x = sun.x;
// translate(sun.x + 200, sun.y- 200)
// planet.speed = 0;
// glitter = random(0,25);
// sun.size-=2;
// planet.size -=0.5;
// }



let col = random(0, 220);
noStroke();
textFont(`Verdana`);
textSize(20);
fill(col);
// if (userTextinput()){
// fill(0,0);
// }
textAlign(CENTER, CENTER);
text(`Wait for an Eclipse`, width/2, height/3+400);
}

//constrain sun size to a certain amount than move page
