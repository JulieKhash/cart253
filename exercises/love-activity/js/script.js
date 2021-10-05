/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
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


"use strict";

/**
Description of preload
*/
function preload() {
chessboarImg = loadImage("assets/images/chessboard.png")
}



function setup() {
  createCanvas(700, 700);

  circle1.x = width-600;
  circle1.y = height-600;

  circle2.x = width -100;
  circle2.y = height-100;

}



function draw() {
  background(0);
  imageMode(CENTER);
  image(chessboarImg, width/2, height/2, 650, 650);


  fill(255, 0, 30);
  ellipse(circle1.x, circle1.y, circle1.size);
  fill(0, 255, 30);
  ellipse(circle2.x, circle2.y, circle2.size);

}
