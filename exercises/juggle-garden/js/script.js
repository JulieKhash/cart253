/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let energyBall;

let positiveThoughts = [];
let numPositive = 1;
let positive;
let positiveCaught = 0;

let negativeThoughts = [];
let numNegative = 20;
let negative;

let state = `title` //animation, instruction, simulation, win,  lose

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

  if (state ===`title`){
   title();
 } else if (state === `simulation`){
   simulation();
 } else if (state === `instruction`){
   instruction();
 } else if (state === `winning`){
   win;
 } else if (state === `losing`){
   lose;
 }


}

function simulation(){
  ourEnergyBall()
  ourPositiveThoughts()
  ourNegativeThoughts()
}

// function win(){
//   win;
//   //negative.active = false;
// //
// }




function title(){
  background(random(170, 200), random(170, 200), random(170, 200));
  push();
  fill(255)
  textSize(70);
  textAlign(CENTER, CENTER);
  text(`Feed Your Energy Ball`, width/2, height/2);
  textSize(20);
  text(`press any key`, width/2, height/2+60);
  pop();
}

function instruction(){
  background(random(170, 200), random(170, 200), random(170, 200));
  push();
  fill(255)
  textSize(25);
  textAlign(CENTER, CENTER);
  text(`🔅 use arrow keys`, width/2, height/2-60);
  text(`⚪ catch positive thoughts to increase your energy`, width/2, height/2);
  text(`⚫ avoid negative thoughts or wither`, width/2, height/2+60);
  pop();
}

  function ourEnergyBall(){
  if(energyBall.active){
  energyBall.move();
  energyBall.display();
  energyBall.increaseEnergy(positive);
  let win = energyBall.win();
  let lose = energyBall.lose();

//   for (let i = 0; i < positiveThoughts.length; i++){
//     let positive = positiveThoughts[i];
//     if(positive.active){
//         energyBall.increaseEnergy(positive);
// }
// }
}
}

// positive balls
function ourPositiveThoughts(){
for (let i = 0; i < positiveThoughts.length; i++){
  let positive = positiveThoughts[i];
  if(positive.active){
  positive.move();
  positive.display();
  energyBall.increaseEnergy(positive);
}
}
}

// negative balls
function ourNegativeThoughts(){
for (let i = 0; i < negativeThoughts.length; i++){
  let negative = negativeThoughts[i];
  if(negative.active){
  negative.move();
  negative.display();
  energyBall.fadeEnergy(negative);
}

}
}

function keyPressed(){
  if (state === `title`){
  state = `instruction`;
  }
 else if (state ===`instruction`){
  state = `simulation`;
}
}
