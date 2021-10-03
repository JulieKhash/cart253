/**
Experiment
JK

*/

"use strict";

let bg = {
  r: 10,
  g: 0,
  b: 0,
};
let circle1 = {
  x: 10,
  y: 10,
  size: 10,
  speed: 0.50,
  fill: 250,
  alpha: 200
};
let circle2 = {
  x: 490,
  y: 10,
  size: 20,
  speed: 0.50,
  fill: 100,
  alpha: 100
};
let circle3 = {
  x: 10,
  y: 490,
  size: 400,
  speed: 0.50,
  fill: 255,
  alpha: 80
};
let circle4 = {
  x: 490,
  y: 490,
  size: 400 ,
  speed: 0.50,
  fill: 255,
  alpha: 30
};
let circle5 = {
  x: 250,
  y: 250,
  size: 5 ,
  speed: 0.50,
  fill: 255,
  alpha: 255
};
let circle6 = {
  x: 250,
  y: 250,
  width: 100,
  height: 20,
  size: 5 ,
  speed: 0.50,
  fill: 255,
  alpha: 150
};
let circle7 = {
  x: 250,
  y: 250,
  width: 20,
  height: 100,
  size: 5 ,
  speed: 0.50,
  fill: 255,
  alpha: 150
};
//center circle 2
let circle8 = {
  x: 250,
  y: 250,
  size: 5 ,
  speed: 0.50,
  fill: 255,
  alpha: 255
};
//center circle 3
let circle9 = {
  x: 250,
  y: 250,
  size: 3 ,
  speed: 0.30,
  fill: 255,
  alpha: 255
};
//center circle 4
let circle10 = {
  x: 250,
  y: 250,
  size: 3 ,
  speed: 0.40,
  fill: 255,
  alpha: 255
};
/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);
  background(bg.r, bg.g, bg.b);
  noStroke();
}
/**
Description of draw()
*/
function draw() {
  background(bg.r, bg.g, bg.b);
  //bg.r = bg.r + 0.34;
  bg.g = bg.g + 0.30;
  bg.b = bg.b + 0.76;

  //left top circle (going down)
  circle1.x = circle1.x + 1;
  circle1.x = constrain(circle1.x, 0, width/2);
  circle1.y = circle1.x + 1;
  circle1.size = circle1.size + 1;
  circle1.size = constrain(circle1.size, 0, width-50);
  fill(mouseX, mouseY,bg.r + 80, bg.b + 0.74, circle1.alpha);
  ellipse(circle1.x, circle1.y, circle1.size);

  // //right up circle (going down)
  circle2.x = circle2.x + - 1;
  circle2.x = constrain(circle2.x,  width/2, 500);
  circle2.y = circle2.y + 1;
  circle2.y = constrain(circle2.y, 0, height/2);
  circle2.size = circle2.size + 1
  circle2.size = constrain(circle2.size, 0, height/2);
  fill(mouseX, mouseY,bg.r + 200, bg.b + 45, circle2.alpha);
  ellipse(circle2.x, circle2.y, circle2.size);

  //left down circle (going uo)
  circle3.x = circle3.x + 1;
  circle3.x = constrain(circle3.x, 0, width/2);
  circle3.y = circle3.y - 1;
  circle3.y = constrain(circle3.y,  height/2, 500);
  circle3.size = circle3.size -1
  circle3.size = constrain(circle3.size, 30, 300);
  fill(mouseX, mouseY,circle3.fill, circle3.alpha);
  ellipse(circle3.x, circle3.y, circle3.size);

  //right down circle (goign up)
  circle4.x = circle4.x - 1;
  circle4.x = constrain(circle4.x, width/2, 500);
  circle4.y = circle4.y - 1;
  circle4.y = constrain(circle4.y, height/2, 500);
  circle4.size = circle4.size - 0.55;
  circle4.size = constrain(circle4.size, 0, 400);
  circle4.size = mouseX, mouseY;
  fill(mouseX, mouseY, bg.b + 30, bg.g + 0.74, circle4.alpha);
  ellipse(circle4.x, circle4.y, circle4.size);

  //center circle
  fill(mouseX, mouseY,bg.b + -80, circle5.alpha);
  ellipse(circle5.x, circle5.y, circle5.size);
  circle5.size += 1;
  circle5.size = constrain(circle5.size, 0, width+10);
  circle5.alpha -= 0.60;

  // //center circle 2
  fill(mouseX, mouseY,bg.r + -80, circle8.alpha);
  ellipse(circle8.x, circle8.y, circle8.size);
  circle8.size += circle8.speed;
  circle8.size = constrain(circle8.size, 0, width);
  circle8.alpha -= 0.20;

  //center circle 3
  fill(mouseX, mouseY,bg.b + -20, circle9.alpha);
  ellipse(circle9.x, circle9.y, circle9.size);
  circle9.size += circle9.speed;
  circle9.size = constrain(circle9.size, 0, width-30);
  circle9.alpha -= 0.40;

  //center circle 4
  fill(mouseX, mouseY,bg.b + -90, circle10.alpha);
  ellipse(circle10.x, circle10.y, circle10.size);
  circle10.size += circle10.speed;
  circle10.size = constrain(circle10.size, 0, width);
  circle10.alpha -= 0.20;

  //center line horiszontal
  fill(mouseX, mouseY, 255, circle6.alpha);
  circle6.alpha -= 0.05;
  circle6.width = mouseX, mouseY;
  ellipse(circle6.x, circle6.y, circle6.width, circle6.height, circle6.size);

  //center line vertical
  fill(mouseX, mouseY,255, circle7.alpha);
  circle7.alpha -= 0.05;
  circle7.height = mouseX, mouseY;
  ellipse(circle7.x, circle7.y, circle7.width, circle7.height, circle7.size);


}
