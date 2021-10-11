
"use strict";

let footStepImg;
let nightImg;

let road = {
  x: 950,
  y: 16
}


let footsteps = {
  x: 950,
  y: 1000,
  speed: 1
}

let userleg = {
  x: 950,
  y: 1200,
  speed: 2,
  vx: 0,
  vy: 0,
  w: 25,
  h: 70
}

function preload(){
  footStepImg = loadImage("assets/images/footprints.gif");
  nightImg = loadImage("assets/images/night.gif");
}


function setup(){
  createCanvas(1900, 1300);
}


function draw(){
  background(0);
  imageMode(CENTER);


  moveFootsteps();
  resetFootsteps();
  roadFooodsteps();

  islegOffscreen()
  isLegOnroad()
  moveUserleg()
  userFoot();

  //move footsteps upwards
  //display images


}
function moveFootsteps(){
footsteps.y -= footsteps.speed;
}

function resetFootsteps(){
if (footsteps.y <= height/3+40){
  footsteps.y = 1000;
}
}


function islegOffscreen(){
  if (userleg.x > width || userleg.x < 0 || userleg.y > height || userleg.y < 0){
  return text7();
}
else {
  return text6();
}
}


function isLegOnroad(){
  //let d = dist()
  if (userleg.y <= 300){
  background(100);
  // move to page four
}
}

function userFoot(){

  userleg.vx +=userleg.speed;
  userleg.vy +=userleg.speed;

  let glitch = random(50, 150);
  fill(glitch, 0, 0);
  ellipse (userleg.x+30, userleg.y, userleg.w, userleg.h);
  ellipse (userleg.x-20, userleg.y, userleg.w, userleg.h);
}

function moveUserleg(){
  if (keyIsDown (LEFT_ARROW)) {
    userleg.vx = -userleg.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
   userleg.vx = userleg.speed;
  }
  else {
    userleg.vx= 0;
  }
  // control user's horizontal movement
  if (keyIsDown(UP_ARROW)){
  userleg.vy = -userleg.speed;
  }
  else if (keyIsDown(DOWN_ARROW)){
  userleg.vy = userleg.speed;
  }
  else {
    userleg.vy = 0;
  }
  userleg.x += userleg.vx;
  userleg.y+=userleg.vy;
}

function roadFooodsteps(){
image(nightImg, road.x, road.y);
image(footStepImg, footsteps.x, footsteps.y, 286/2, 888/2);
}

function text6(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(25);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Follow the Footsteps`, width/5, height/2+200);
}

function text7(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(25);
  fill(col, 0, 0);
  textAlign(CENTER, CENTER);
  text(`Don't lose the track!`, width/5, height/2+200);

}
