/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let energyBall;

let positiveThoughts = [];
let numPositive = 3;
let positive;

function preload() {

}


function setup() {
  createCanvas(1000, 700);

  let size = 80;
  energyBall = new EnergyBall(width/2, height/2, size);

  for(let i = 0; i < numPositive; i++){
  positive = new Positive(random(0, width), random(0, height));
  positiveThoughts.push(positive);
}
}


function draw() {
  background(100);

  if(energyBall.active){
  energyBall.move();
  energyBall.display();
}

for (let i = 0; i < positiveThoughts.length; i++){
  let positive = positiveThoughts[i];
  positive.display();
}
}
