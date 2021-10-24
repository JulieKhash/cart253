"use strict";

let paddle;

let gravityForce = 0.0025;
let balls = []; //empty array for balls
let numBalls = 33; // number of balls

function setup() {
  createCanvas(900, 900);

  paddle = new Paddle(350, 30);

  //create a new ball up to numBall, add the ball into the array
  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -150);
    let size = random(10, 50);
    let ball = new Ball(x, y, size);
    balls.push(ball); // adds the ball into the array
  }
}

function draw() {
  background(10);

  paddle.move();
  paddle.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }
}
