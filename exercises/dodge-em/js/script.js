/***
Dodge-em "Save the Earth from a meteor"
Julie Khashimova

This is a simulation of planet Earth and the large meteor that's about to hit Earth in space.
The user can help the Earth to avoid the enemy by moving their mouse cursor to direct the Earth to a safer place.
If both celestial bodies collide, they will explode with a calamitous blast.
***/

"use strict";

let earthImg;
let meteorImg;

function preload() {
  earthImg = loadImage("assets/images/earth.png");
  meteorImg = loadImage("assets/images/meteor.png");
}
//rotational angle
let angle = 0;
let numStars = 200;
//background colour
let bgShade = {
  r: 0,
  g: 0,
  b: 0,
};
//meteor object
let meteor = {
  x: 0,
  y: 0,
  size: 100,
  vx: 3,
  vy: 3,
  ax: 2,
  ay: 2,
  acceleration: 8,
  maxSpeed: 20,
  fill: {
    r: 0,
    g: 0,
    b: 0,
  },
};
//meteor's whirling wing
let meteorWing = {
  x: 0,
  y: 0,
  w: 150,
  h: 10,
  size: 100,
  scale: 0.5,
};
//earth object
let earth = {
  x: 250,
  y: 650,
  size: 250,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 3,
  fill: {
    r: 0,
    g: 0,
    b: 0,
  },
};
  //wide-screen canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}
  //draw the earth, meteor and stars. Add interactivy, change and movement
function draw() {
  background(bgShade.r, bgShade.g, bgShade.b, 140);

  //Display stars
  for (let i = 0; i < numStars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    strokeWeight(2);
    point(x, y);
  }

  //Earth
  noStroke();
  //control the earth and its movement with the mouseX
  if (mouseX < earth.x) {
    earth.vx = -earth.acceleration;
  } else {
    earth.vx = earth.acceleration;
  }
  //control the earth and its movement with the mouseY
  if (mouseY < earth.y) {
    earth.vy = -earth.acceleration;
  } else {
    earth.vy = earth.acceleration;
  }
  //make the earth move in x/y postions
  earth.x = earth.x + earth.vx;
  earth.y = earth.y + earth.vy;
  //display earth
  fill(earth.fill.r + 40, earth.fill.g + 180, earth.fill.b + 250);
  ellipse(earth.x, earth.y, earth.size);

  imageMode(CENTER);
  image(earthImg, earth.x, earth.y, earth.size + 5, earth.size + 5);

  //Meteor
  meteor.x = meteor.x + meteor.ax;
  meteor.y = meteor.y + meteor.ay;

  //constrains meteor within a screen
  if (meteor.x > width) {
    meteor.ax = -meteor.acceleration;
  }
  if (meteor.x < 0) {
    meteor.ax = meteor.acceleration;
  }

  if (meteor.y > height) {
    meteor.ay = -meteor.acceleration;
  }
  if (meteor.y < 0) {
    meteor.ay = meteor.acceleration;
  }

  //meteor acceleration
  meteor.vx = meteor.vx + meteor.acceleration;
  meteor.vx = constrain(meteor.vx, -meteor.maxSpeed, meteor.maxSpeed);
  meteor.vy = meteor.vy + meteor.acceleration;
  meteor.vy = constrain(meteor.vy, -meteor.maxSpeed, meteor.maxSpeed);

  //display meteor circle
  fill(meteor.fill.r, meteor.fill.g, meteor.fill.b);
  meteor.fill.r = random(0, 255);
  meteor.fill.g = random(0, 60);
  ellipse(meteor.x, meteor.y, meteor.size);

  //meteor wing rotation
  push();
  fill(meteor.fill.r, meteor.fill.g, meteor.fill.b, 190);
  meteor.fill.r = random(0, 255);
  meteor.fill.g = random(0, 60);
  meteorWing.x = meteor.x;
  meteorWing.y = meteor.y;
  rectMode(CENTER);
  translate(meteorWing.x, meteorWing.y);
  rotate(angle);
  rect(0, 0, meteorWing.w, meteorWing.h);

  //display fire image
  imageMode(CENTER);
  image(meteorImg, 0, 0, meteor.size + 30, meteor.size + 30);

  imageMode(CENTER);
  image(meteorImg, 0 + 40, 0 + 40, meteor.size - 20, meteor.size - 70);
  pop();

  angle = angle + 15;

  //check and if two overlap make a flashy background
  let d = dist(earth.x, earth.y, meteor.x, meteor.y);
  if (d < meteor.size / 3 + earth.size / 3) {
    bgShade.r = random(0, 255);
    bgShade.g = random(0, 2);
    bgShade.b = random(0, 100);
    //if overlap increase the earth's size
    earth.size = earth.size + 10;
    //if overlap increase the meteor's size
    meteor.size = meteor.size + 10;
  }

  //stop the program when the explosion goes off the screen
  if (earth.size > width + 850 && meteor.size > width + 850) {
    noLoop();
  }
}
