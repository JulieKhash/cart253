/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let bg = {
  r: 0,
  g: 0,
  b: 0

};
  let circle = {
  x: 200,
  y: 200,
  size: 70
};
  let triangle1 = {
  x1: 100,
  y1: 300,
  x2: 250,
  y2: 100,
  x3: 300,
  y3: 300,
};
/**
Description of setup
*/
// function setup() {
//   createCanvas(500, 500);
//
// }
//
//
// /**
// Description of draw()
// */
// function draw() {
//
//   bg = map(mouseX, 0, 500, 0, 255);
//   background(bg);
//   //background(bg.r, bg.g, bg.b);
//
//   fill(255, 200, 108);
//   ellipse(mouseX, 200, circle.size);
//   circle.size = constrain(circle.size, 0, 200);
//   circle.size = mouseX + 0.2;
//
//
//   fill(255, 200, 100);
//   triangle(triangle1.x1, triangle1.y1, triangle1.x2, triangle1.y2, triangle1.x3, triangle1.y3);


  let triangleScale = 1;


  function setup() {
    createCanvas(600, 600);
  }

  function draw() {
    background(220);

    push();
    fill(255,0,0);
    noStroke();
    translate(width/2,height/2); // Move origin to center of canvas
    //rotate(triangleScale);
    scale(triangleScale); // Scale the triangle
    triangleScale = map(mouseX, 200, 0, 0.5, 4);
    //triangleScale = map(mouseX, 0, width, 0, 100);
    //triangleScale = constrain(mouseX, 1, width);
    triangle(-50, -50, 50, -50, 0, 50); // Draw the triangle relative to the origin
    //triangle()
    pop();

    //triangleScale += 0.01; // Make the scale bigger
};
