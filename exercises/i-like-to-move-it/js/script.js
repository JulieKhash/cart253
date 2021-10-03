/***
Exercise 1 "I like to Move it!"
Julie Khashimova

An interactive program with moving shapes, changing colors and size.
***/

"use strict";

//backround color
let bg = {
  r: 0,
  g: 0,
  b: 0,
};
//color for shapes
let color = {
  r: 0,
  g: 0,
  b: 0,
};
//top left circle
let circle1 = {
  x: 1,
  y: 0,
  size: 200,
  fill: 100,
  alpha: 100,
};
//top right circle
let circle2 = {
  x: 600,
  y: 0,
  size: 50,
  fill: 150,
  alpha: 100,
};
//down left circle
let circle3 = {
  x: 0,
  y: 600,
  size: 50,
  fill: 200,
  alpha: 150,
};
//down right circle
let circle4 = {
  x: 600,
  y: 600,
  size: 200,
  fill: 255,
  alpha: 150,
};
//center circle
let circle5 = {
  x: 300,
  y: 300,
  size: 20,
  fill: 222,
  alpha: 100,
};
let square1 = {
  x: 200,
  y: 200,
  size: 50,
  fill: 100,
  alpha: 100,
};
//vertical line
let oval1 = {
  x: 300,
  y: 300,
  w: 5,
  h: 10,
  size: 10,
  speed: 0.5,
  fill: 255,
  alpha: 150,
};
//horizontal line
let oval2 = {
  x: 300,
  y: 300,
  w: 10,
  h: 5,
  size: 10,
  speed: 0.5,
  fill: 255,
  alpha: 150,
};

/**
creates canvas
*/
function setup() {
  createCanvas(600, 600);
}

/**
draws 4 kinds of shapes(circle, square, line, triangle), changes color, moves shapes.
*/
function draw() {
  bg = map(mouseX, 0, 600, 0, 255);
  background(bg);
  noStroke();
  //top left corner circle (going down)
  circle1.x += 1;
  circle1.x = constrain(circle1.x, 0, width / 2);
  circle1.y += 1;
  circle1.y = constrain(circle1.y, 0, height / 2);
  circle1.size += 1;
  circle1.size = constrain(circle1.size, 200, width);
  fill(mouseX, mouseY, color.r + 255, color.b + 40);
  ellipse(circle1.x, circle1.y, circle1.size);
  //top right corner circle (going down)
  circle2.x += -1;
  circle2.y += 1;
  circle2.x = constrain(circle2.x, width / 2, 600);
  circle2.y = constrain(circle2.y, 0, height / 2);
  circle2.size += 1;
  circle2.size = constrain(circle2.size, 50, width - 100);
  fill(mouseX, mouseY, color.r + 20, color.g + 30);
  ellipse(circle2.x, circle2.y, circle2.size);
  //down left corner circle (going up)
  circle3.x += 1;
  circle3.y += -1;
  circle3.x = constrain(circle3.x, 0, width / 2);
  circle3.y = constrain(circle3.y, height / 2, 600);
  circle3.size += 0.5;
  circle3.size = constrain(circle3.size, 300, width + 150);
  fill(mouseX, mouseY, color.b + 120, color.g + 70, circle3.alpha);
  ellipse(circle3.x, circle3.y, circle3.size);
  circle3.alpha += -0.5;
  //down right corner circle (going up)
  fill(circle4.fill, circle4.alpha);
  ellipse(circle4.x, circle4.y, circle4.size);
  circle4.x += -1;
  circle4.y += -1;
  circle4.x = constrain(circle4.x, width / 2, 600);
  circle4.y = constrain(circle4.y, height / 2, 600);
  circle4.size -= 0.4;
  circle4.alpha += -0.1;
  //center circle
  circle5.size = mouseX;
  fill(mouseX, mouseY, color.r + 120, color.g + 70, circle5.alpha);
  ellipse(circle5.x, circle5.y, circle5.size);
  //square
  square1.size += 1;
  square1.size = constrain(square1.size, 0, 200);
  fill(bg.r + 220, square1.alpha);
  square(square1.x, square1.y, square1.size);
  //horizontal line
  oval1.w = mouseX;
  fill(oval1.fill, oval1.alpha),
    ellipse(oval1.x, oval1.y, oval1.w, oval1.h, oval1.size);
  //vertical line
  oval2.h = mouseY;
  fill(oval2.fill, oval2.alpha),
    ellipse(oval2.x, oval2.y, oval2.w, oval2.h, oval2.size);
  //Draws the triangle
  let triangleScale = 1;
  push();
  fill(mouseX, 255, 255, circle5.alpha);
  noStroke();
  translate(width / 2, height / 2);
  scale(mouseX / 200);
  triangle(-50, -50, 50, -50, 0, 50);
  pop();
}
