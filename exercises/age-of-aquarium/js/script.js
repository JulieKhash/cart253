/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let jarImg;
let flowerImg;

let meerkat = {
  x: 200,
  y: 200,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2,
  hidden: false
}

let user = {
  x: undefined,
  y: undefined,
  size: 90,
  flower: false
}

let hole = {
  x: 450,
  y: 60,
  w: 150,
  h: 50,
}

let beetle ={
  x: undefined,
  y: undefined,
  w: 50,
  h: 50,
}



/**
Description of preload
*/
function preload() {
 // jarImg = loadImage("assets/images/jar4.png");
 // flowerImg = loadImage("assets/images/flower.png")
}


/**
Description of setup
*/
function setup() {
  createCanvas(900, 700);
}


/**
Description of draw()
*/
function draw() {
  background(100);


  displayHole();


  checkUserOverlap()

  moveUser();
  displayUser();


  moveBall();
  displayBall();

}


function displayHole(){
  fill(0);
  ellipse(hole.x, hole.y, hole.w, hole.h);
}

function checkUserOverlap(){
  let d = dist(hole.x, hole.y, meerkat.x, meerkat.y);
  if(d < hole.h/2){
     meerkat.hidden = true;
     // noLoop();
}
}



function moveBall(){

  let change = random(0,1);
  if (change <= 0.02){
  meerkat.vx = random(-meerkat.speed, meerkat.speed);
  meerkat.vy = random(-meerkat.speed, meerkat.speed);
}
  meerkat.x += meerkat.vx;
  meerkat.y += meerkat.vy;

  meerkat.x = constrain(meerkat.x, 0, width);
  meerkat.y = constrain(meerkat.y, 0, height);
  // meerkat.x = constrain(meerkat.x, user.x-100, user.x+100);
  // meerkat.y = constrain(meerkat.y, user.y-100, user.y+100);

}

function displayBall() {
  if(!meerkat.hidden){
  fill(0, 255, 0);
  ellipse(meerkat.x, meerkat.y, meerkat.size);
}
}


function moveUser(){
  user.x = mouseX;
  user.y = mouseY;
}

function displayUser(){
  fill(255, 0, 0);
  imageMode(CENTER);
  // image(flowerImg, user.x, user.y, 512/4, 512/4);
  ellipse(user.x, user.y, user.size);
}



function mousePressed(){

  if (user.x > meerkat.x){
    meerkat.vx = 2.5;
  }
  else if (user.x < meerkat.x){
    meerkat.vx = -2.5;
  }
  if (user.y > meerkat.y){
    meerkat.vy = 2.5;
  }
  else if (user.y < meerkat.y){
    meerkat.vy = -2.5;
  }
}
