
"use strict";

let lightImg;
let handCatcherImg;
let faceImg;
let birdsImg;

let light = {
  x: 1000,
  y: 350,
  size: 300,
  vx: 0,
  vy: 0,
  speed: 15
}

let handCatcher ={
  x: 650,
  y: 1100,
  sizeX: 170,
  sizeY: 231,
  vx: 0,
  vy: 0,
  speed: 3
}

let xoff = 0;
let yoff = 0;

function preload() {
  lightImg = loadImage("assets/images/light.png");
  handCatcherImg =  loadImage("assets/images/handtransparent.png");
  faceImg = loadImage("assets/images/face.png");
  birdsImg = loadImage("assets/images/fly.gif");
}

function setup() {
  createCanvas(1900, 1300);

}


function draw() {
  let glitter= random(0,25);
  background(glitter);
  imageMode(CENTER);


  showFace();
  displayHand();
  text10();
  moveLight();
  displayLight();

  controlHand();
  bird();

}

 function controlHand(){
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
  handCatcher.x += handCatcher.vx;
  handCatcher.y += handCatcher.vy;
}


 function isCaught(){
  let d = dist(handCatcher.x, handCatcher.y, light.x, light.y);
  if (d < handCatcher.sizeY/5 + light.size/5){
    return true;
  }
  else {
    return false;
  }
}


  function showFace(){
  if (isCaught()){
    light.size +=light.speed;
    light.size = constrain(light.size, 300, 6000);
    fill(0, 0, 0, 100);
    image(faceImg, light.x, light.y);
}
  }



   function moveLight(){
   light.vx =  random(-light.speed, light.speed);
   light.vy =  random(-light.speed, light.speed);
   //
   light.x = light.x + light.vx;
   light.y = light.y + light.vy;

   light.x = constrain(light.x, 200, width-200);
   light.y = constrain(light.y, 200, height);
  }



  function displayLight(){
  image(lightImg, light.x, light.y, light.size, light.size);
}


 function displayHand(){

  handCatcher.vx += handCatcher.speed;
  handCatcher.vy += handCatcher.speed;

  image(handCatcherImg, handCatcher.x, handCatcher.y, handCatcher.sizeX, handCatcher.sizeY);
};


// displasy bird and the farewell text;
 function bird(){
  if (light.size === 6000){
    image(birdsImg, light.x, light.y);
    text11()
  }
}

function text10(){
let glitch = random(0, 255);
textFont(`Verdana`);
textSize(25);
fill(glitch);
if (isCaught()){
  fill(0,0);
}
text(`Catch the Light`, width/2+100, height/2+10);
}



  //
  function text11(){
  let glitch = random(0, 255);
  textFont(`Verdana`);
  textSize(25);
  fill(glitch);
  text(`We will meet again`, width/2-220, height/2+10);
}


  // check if user catcher the light
