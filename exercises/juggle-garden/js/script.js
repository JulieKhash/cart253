/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let energyBall;

function preload() {

}


function setup() {
  createCanvas(1000, 700);

  let size = 80;
  energyBall = new EnergyBall(width/2, height/2, size);
}


function draw() {
  background(100);

  energyBall.move();
  energyBall.display();
}
