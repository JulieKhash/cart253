"use strict";

let user = {
  x: undefined,
  y: undefined,
  size: 90,
  ballsCaught: [],
};

let balls = [];
let ballNums = 1;

function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < ballNums; i++) {
    balls[i] = createBall(random(0, width), random(0, height));
  }

  for (let i = 0; i < ballNums; i++) {
    user.ballsCaught[i] = createBall(user.x, user.y);
  }
}

function createBall(x, y) {
  let ball = {
    x: x,
    y: y,
    size: 10,
    speed: 2,
    vx: 0,
    vy: 0,
    caught: false,
  };
  return ball;
}

function draw() {
  background(0);

  moveUser();
  displayUser(user);

  for (let i = 0; i < balls.length; i++){
  checkBall(balls[i]);
  }

  for (let i = 0; i < balls.length; i++) {
    moveBall(balls[i]);
  }

  for (let i = 0; i < balls.length; i++) {
    displayBall(balls[i]);
  }

  //functions for the caught balls
  for (let i = 0; i < balls.length; i++)
  moveCaught(user.ballsCaught[i]);

  for (let i = 0; i < balls.length; i++)
  displayCaught(user.ballsCaught[i]);
}


function moveCaught(ball) {
  // let change = random(0, 1);
  // if (change < 0.5){

  ball.vx = random(-ball.speed, ball.speed);
  ball.vy = random(-ball.speed, ball.speed);

  ball.x += ball.vx;
  ball.y += ball.vy;

  ball.x = constrain(ball.x, user.x - 25, user.x + 25);
  ball.y = constrain(ball.y, user.y - 25, user.y + 25);
  // }
}

//displays caught balls inside the user's circle
function displayCaught(ball) {
  // if (!ball.caught){
  fill(200, 200, 100);
  ellipse(ball.x, ball.y, ball.size);
  user.ballsCaught.push(ball);
  // }
}

function checkBall(ball){
  if(!ball.caught){
    let d = dist(user.x, user.y, ball.x, ball.y);
    if(d < user.size/2 + ball.size/2){
    //ball.caught = true;

    ball.vx = random(-ball.speed, ball.speed);
    ball.vy = random(-ball.speed, ball.speed);

    ball.x += ball.vx;
    ball.y += ball.vy;

    ball.x = constrain(ball.x, user.x - 25, user.x + 25);
    ball.y = constrain(ball.y, user.y - 25, user.y + 25);

    // ball.x = user.x - 10;
    // ball.y = user.y - 10;

  //  user.ballsCaught.push(ball);
}
}
}


function moveBall(ball) {
  let change = random(0, 1);
  if (change < 0.02) {
    ball.vx = random(-ball.speed, ball.speed);
    ball.vy = random(-ball.speed, ball.speed);
  }
  ball.x += ball.vx;
  ball.y += ball.vy;

  ball.x = constrain(ball.x, 0, width);
  ball.y = constrain(ball.y, 0, height);
}

function displayBall(ball) {
  if (!ball.caught) {
    fill(200, 200, 100);
    ellipse(ball.x, ball.y, ball.size);
  }
}

function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function displayUser(user) {
  fill(255, 30, 10, 100);
  ellipse(user.x, user.y, user.size);
}
