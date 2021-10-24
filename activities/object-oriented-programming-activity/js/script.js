
"use strict";

let paddle;


function setup() {
  createCanvas(800, 800);
  paddle = new Paddle(200, 40);

}


function draw() {
  background(0);

  paddle.move();
  paddle.display();

}
