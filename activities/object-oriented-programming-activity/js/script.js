
"use strict";

let paddle;
let gravityForce = 0.0025;
let balls = [];    //empty array for balls
let numBalls = 3 // number of balls


function setup() {
  createCanvas(800, 800);

  paddle = new Paddle(200, 40);

  //create a new ball up to numBall, add the ball into the array
  for(let i = 0; i < numBalls; i++){
  let x = random(0, width);
  let y = random(-400, -150);
  let ball = new Ball(x, y);
  balls.push(ball);    // adds the ball into the array

}
}


function draw() {
  background(0);

  paddle.move();
  paddle.display();

  for(let i = 0; i < balls.length; i++){
    let ball = balls[i];
    ball.gravity(gravityForce);
    ball.move();
    ball.bounce();
    ball.display();
  }

}
