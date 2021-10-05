/**
Love Actually - Chess L/Over
Julie Khashimova

The player must catch the other checker to win, if it escapes the game is over
*/

"use strict";

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
  speed: 4
}

let xoff = 0;
let state = `title`


function preload() {
chessboarImg = loadImage("assets/images/chessboard.png")
}


function setup() {
  createCanvas(700, 700);

  // sets up the position of the circles
  circle1.x = width-550;
  circle1.y = height-550;

  circle2.x = width -150;
  circle2.y = height-150;

  //makes a circle to move in random directions
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);


}

function draw() {
  background(0);
  imageMode(CENTER);
  image(chessboarImg, width/2, height/2, 650, 650);

  //checks the state of the program
  if (state === `title`){
    title();
  }
  else if (state === `instruction`){
    instruction();
  }
  else if (state === `simulation`){
    simulation();
  }
  else if (state === `romance`){
    romance();
  }
  else if (state === `loss`){
    loss();
  }
}

// draws a title
function title(){
  push();
  fill(0, 0, 0, 100);
  rectMode(CENTER);
  rect(width/2, height/2, 300, 150);
  textAlign(CENTER, CENTER);
  textFont(`Georgia`);
  textSize(40);
  fill(210, 0, 30);
  text(`CHESS L/OVER`, width/2, height/2);
  textSize(20);
  fill(200, 200, 200);
  text(`Press a key`, width/2, height-150);
  pop();
}

// shows instruction
function instruction(){
  push();
  fill(0, 0, 0, 100);
  rectMode(CENTER);
  rect(width/2, height/2, 450, 100);
  textAlign(CENTER, CENTER);
  textFont(`Georgia`);
  textSize(30);
  fill(200, 200, 200);
  text(`Use arrow keys to control`, width/2, height/2);
  pop()
}

//shows love text
function romance(){
  push();
  textAlign(CENTER, CENTER);
  textFont(`Georgia`);
  textSize(40);
  fill(255, 0, 0);
  text(`LOVER`, circle1.x, circle1.y+ 50);
  fill(200, 0, 0, 100);
  rectMode(CENTER);
  rect(circle1.x, circle1.y+ 50, 300, 150);
  pop()
}

// shows the over text
function loss(){
  push();
  textAlign(CENTER, CENTER);
  textFont(`Georgia`);
  textSize(40);
  fill(0, 100, 100);
  text(`IT'S OVER`, circle1.x, circle1.y+ 50);
  fill(0, 30, 100, 100);
  rectMode(CENTER);
  rect(circle1.x, circle1.y+ 50, 300, 150);
  pop()
}

//calls all the simulation part of the program
function simulation(){
  userControl();
  move();
  checkOffscreen()
  checkOverlap();
  display();
}

 //user keyboard control function
  function userControl(){
// control user's vertical movement with keyboard arrows
  if (keyIsDown (LEFT_ARROW)) {
    circle1.vx = -circle1.speed;
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
    state = `loss`;
  }
}

  // check if circles overlap
  function checkOverlap(){
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size/3 + circle2.size/3){
    state = `romance`;
  }
}

//makes the circles move
  function move(){
  let x = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.009;

  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

  //display circles
  function display(){

  fill(255, 0, 30);
  ellipse(circle1.x, circle1.y, circle1.size);
  fill(0, 255, 30);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function keyPressed(){
  if (state === `instruction`){
    state = `simulation`;
  }
  else if (state === `title`){
    state = `instruction`;
  }
}
