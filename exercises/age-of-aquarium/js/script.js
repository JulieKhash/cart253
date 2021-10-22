/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let meerkatImg;
let flowerImg;

let meerkats = [];
let meerkatNum = 5;

// let meerkat = {
//   x: 200,
//   y: 200,
//   size: 50,
//   vx: 0,
//   vy: 0,
//   speed: 2,
//   hidden: false
// }

let user = {
  x: undefined,
  y: undefined,
  size: 90,
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
  meerkatImg = loadImage("assets/images/meerkat.png");
 // flowerImg = loadImage("assets/images/flower.png")
}


/**
Description of setup
*/
function setup() {
  createCanvas(900, 700);

  for (let i = 0; i < meerkatNum; i++){
    meerkats[i] = createMeerkat(random(0, width), random(0, height));
    //meerkats.push(meerkats);
  }
}

function createMeerkat(x,y){
let meerkat = {
  x: x,
  y: y,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2,
  hidden: false
}
return meerkat
}


/**
Description of draw()
*/
function draw() {
  background(100);



  displayHole();

  for (let i = 0; i < meerkats.length; i++)
  checkOverlap(meerkats[i]);

  moveUser();
  displayUser(user);

  for (let i = 0; i < meerkats.length; i++){
  controlMeerkat(meerkats[i]);
  moveMeerkat(meerkats[i]);
  displayMeerkat(meerkats[i]);
}
}


function displayHole(){
  fill(0);
  ellipse(hole.x, hole.y, hole.w, hole.h);
}

function checkOverlap(meerkat){
  let d = dist(hole.x, hole.y, meerkat.x, meerkat.y);
  if(d < hole.h/2){
     meerkat.hidden = true;
     // noLoop();
}
}

  function controlMeerkat(meerkat){
  //for (let i = 0; i < meerkatNum; i++){
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
  // }


function  moveMeerkat(meerkat){

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

function displayMeerkat(meerkat) {
  if(!meerkat.hidden){
  fill(0, 255, 0);
  image(meerkatImg, meerkat.x, meerkat.y, 392/4, 330/4);
  ellipse(meerkat.x, meerkat.y, meerkat.size);
}
}


function moveUser(){
  user.x = mouseX;
  user.y = mouseY;
}

function displayUser(user){
  fill(255, 0, 0);
  imageMode(CENTER);
  // image(flowerImg, user.x, user.y, 512/4, 512/4);
  ellipse(user.x, user.y, user.size);
}


// function mousePressed(meerkat){
//   for (let i = 0; i < meerkats.length; i++){
//
//   if (user.x > meerkat.x){
//     meerkat.vx = 2.5;
//   }
//   else if (user.x < meerkat.x){
//     meerkat.vx = -2.5;
//   }
//   if (user.y > meerkat.y){
//     meerkat.vy = 2.5;
//   }
//   else if (user.y < meerkat.y){
//     meerkat.vy = -2.5;
//   }
// }
// }
