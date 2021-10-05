/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

///press a key to get started
let chessboarImg;

let circle1 ={
  x: undefined,
  y: undefined,
  size: 50,
  vx:0,
  vy:0,
  speed: 2
}

let circle2 ={
  x: undefined,
  y: undefined,
  size: 50,
  vx:0,
  vy:0,
  speed: 2
}

let state = `simulation`


"use strict";

/**
Description of preload
*/
function preload() {
chessboarImg = loadImage("assets/images/chessboard.png")
}



function setup() {
  createCanvas(700, 700);

  circle1.x = width-630;
  circle1.y = height-630;

  circle2.x = width -70;
  circle2.y = height-70;

  //start circles moving
  // circle1.vx = random(-circle1.speed, circle1.speed);
  // circle1.vy = random(-circle1.speed, circle1.speed);

  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);

}


function draw() {
  background(0);
  imageMode(CENTER);
  image(chessboarImg, width/2, height/2, 650, 650);

  if (state === `title`){
    title();
  }
  else if (state === `simulation`){
    simulation();
  }
  else if (state === `romance`){
    romance();
  }
  else if (state === `loss`){
  }
  
}


function simulation(){
  userControl();
  move();
  checkOffscreen()
  checkOverlap();
  display();
}

  function userControl(){
// control user's vertical movement with keyboard arrows
  if (keyIsDown (LEFT_ARROW)) {
    circle1.vx = -user.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    circle1.vx = circle1.speed;
  }
  else {
    circle1.vx = 0;
  }
// control circle1's vertical movement with keyboard arrows
  if (keyIsDown(UP_ARROW)){
    circle1.vy = -circle1.speed;
  }
  else if (keyIsDown(DOWN_ARROW)){
    circle1.vy = circle1.speed;
  }
  else {
    circle1.vy = 0;
  }
 }

  //check if the circles go off canvas
  function checkOffscreen(){
  if (circle2.x > width || circle2.x < 0 || circle2.y > height || circle2.y < 0) {
    return true;
  }
  else{
    return false;
  }  //Lost ending
}


  // check if circles overlap
  function checkOverlap(){
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size/3 + circle2.size/3){
    //Love ending
  }
}

//makes the circles move
  function move(){
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

  //display circles
  function display(){
  fill(255, 0, 30);
  ellipse(circle1.x, circle1.y, circle1.size);
  fill(0, 255, 30);
  ellipse(circle2.x, circle2.y, circle2.size);
}
