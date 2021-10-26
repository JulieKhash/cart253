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

let negativeThoughts = [];
let numNegative = 12;
let negative;

function preload() {

}


function setup() {
  createCanvas(1000, 700);

  let size = 80;
  energyBall = new EnergyBall(width/2, height/2, size);

  for(let i = 0; i < numPositive; i++){
  let x = random(0, width);
  let y = random(0, 100);
  let vx = random(-1, 5);
  let vy = random(-3, 8);
  let size = random(15, 40);
  positive = new Positive(x, y, vx, vy, size);
  positiveThoughts.push(positive);
}

  for(let i = 0; i < numNegative; i++){
  let x = random(0, width);
  let y = random(0, 100);
  let vx = random(-2, 5);
  let vy = random(-1, 6);
  let size = random(15, 40);
  negative = new Negative(x, y, vx, vy, size);
  negativeThoughts.push(negative);
  }
}


function draw() {
  background(50);

  if(energyBall.active){
  energyBall.move();
  energyBall.display();
  energyBall.increaseEnergy(positive);

//   for (let i = 0; i < positiveThoughts.length; i++){
//     let positive = positiveThoughts[i];
//     if(positive.active){
//         energyBall.increaseEnergy(positive);
// }
// }
}


// positive balls
for (let i = 0; i < positiveThoughts.length; i++){
  let positive = positiveThoughts[i];
  if(positive.active){
  positive.move();
  positive.display();
  energyBall.increaseEnergy(positive);
}
}

// negative balls
for (let i = 0; i < negativeThoughts.length; i++){
  let negative = negativeThoughts[i];
  if(negative.active){
  negative.move();
  negative.display();
  energyBall.fadeEnergy(negative);
}
}
}
