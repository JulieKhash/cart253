
"use strict";

let lightImg;
let handCatcherImg;
let faceImg;

let light = {
  x: 1000,
  y: 350,
  size: 300,
  vx: 0,
  vy: 0,
  speed: 15
}

let handCatcher ={
  x: 950,
  y: 1000,
  sizeX: 200,
  sizeY: 272,
  vx: 0,
  vy: 0,
  speed: 2.5
}

let xoff = 0;
let yoff = 0;

function preload() {
  lightImg = loadImage("assets/images/light.png");
  handCatcherImg =  loadImage("assets/images/handbrighter.png");
  faceImg = loadImage("assets/images/face.png");
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


  handCatcher.vx += handCatcher.speed;
  handCatcher.vy += handCatcher.speed;



  //control user's vertical movement
  if (keyIsDown (LEFT_ARROW)) {
    handCatcher.vx = -handCatcher.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
   handCatcher.vx = handCatcher.speed;
  }
  else {
    handCatcher.vx= 0;
  }
  // control user's horizontal movement
  if (keyIsDown(UP_ARROW)){
  handCatcher.vy = -handCatcher.speed;
  }
  else if (keyIsDown(DOWN_ARROW)){
  handCatcher.vy = handCatcher.speed;
  }
  else {
    handCatcher.vy = 0;
  }

  let d = dist(handCatcher.x, handCatcher.y, light.x, light.y);
  if (d < handCatcher.sizeY/5 + light.size/5){
    light.size +=light.speed;
    light.size = constrain(light.size, 300, 6000);
    fill(0, 0, 0, 100);
    image(faceImg, light.x, light.y);
  }


  handCatcher.x += handCatcher.vx;
  handCatcher.y += handCatcher.vy;




  imageMode(CENTER);
  image(lightImg, light.x, light.y, light.size, light.size);


  image(handCatcherImg, handCatcher.x, handCatcher.y, handCatcher.sizeX, handCatcher.sizeY);




}
  // check if user catcher the light
