/**
Juggle Garden - Feed the Energy Ball
Julie Khashimova

The user controlled energy-ball is highly susceptible to both positive and negative thoughts.
if the positive thought (white ball) catches the user, the energy ball grows
if the negative (black ball), the energy ball diminishes.
*/

"use strict";

let energyBall;

let positiveThoughts = []; //an empty array for positive thoughts
let numPositive = 7; //the number of pos thoughts
let positive;
let positiveCaught = 0; //tracking the number of caught pos thoughts

let negativeThoughts = []; //an empty array for negative thoughts
let numNegative = 11; //the number of neg thoughts
let negative;

let state = `title`; //animation, instruction, simulation, win,  lose

// setup of the energy ball, pos and neg thoughts
function setup() {
  createCanvas(1000, 700);

  let size = 80;
  energyBall = new EnergyBall(width / 2, height / 2, size);

  // crete the pos thoughts up to numPositive
  for (let i = 0; i < numPositive; i++) {
    let x = random(0, width);
    let y = random(0, 100);
    let vx = random(-1, 5);
    let vy = random(-3, 8);
    let size = random(15, 40);
    positive = new Positive(x, y, vx, vy, size); // create a new pos thought
    positiveThoughts.push(positive); // push the pos thoughts into the array
  }
  // create the neg thoughts by the same principles
  for (let i = 0; i < numNegative; i++) {
    let x = random(0, width);
    let y = random(0, 100);
    let vx = random(-2, 5);
    let vy = random(-1, 6);
    let size = random(15, 40);
    negative = new Negative(x, y, vx, vy, size);
    negativeThoughts.push(negative);
  }
}
//changes states, calls methods
function draw() {
  background(0, 80, 100);

  if (state === `title`) {
    title();
  } else if (state === `instruction`) {
    instruction();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `winning`) {
    winning();
  } else if (state === `losing`) {
    losing();
  }
}
// simulation page
function simulation() {
  ourEnergyBall();
  ourPositiveThoughts();
  ourNegativeThoughts();
}
// title page
function title() {
  background(random(170, 200), random(170, 200), random(170, 200));
  push();
  fill(255);
  textSize(70);
  textAlign(CENTER, CENTER);
  text(`Feed Your Energy Ball`, width / 2, height / 2);
  textSize(20);
  text(`press any key`, width / 2, height / 2 + 60);
  pop();
}
// winning page
function winning() {
  background(random(230, 250), random(230, 250), random(230, 250));
  textWinning();
}

function textWinning() {
  push();
  textSize(20);
  textAlign(CENTER, CENTER);
  text(`Radiance!`, width / 2, height / 2);
  pop();
}
// losiing page
function losing() {
  background(random(0, 10));
  textLosing();
}

function textLosing() {
  push();
  textSize(20);
  textAlign(CENTER, CENTER);
  fill(90);
  text(`Darkness`, width / 2, height / 2);
  pop();
}
// instruction page
function instruction() {
  background(random(170, 200), random(170, 200), random(170, 200));
  push();
  fill(255);
  textSize(25);
  textAlign(CENTER, CENTER);
  text(`🔅 use arrow keys`, width / 2, height / 2 - 60);
  text(
    `⚪ catch positive thoughts to increase your energy`,
    width / 2,
    height / 2
  );
  text(`⚫ avoid negative thoughts or wither`, width / 2, height / 2 + 60);
  pop();
}
// energy ball functions
function ourEnergyBall() {
  if (energyBall.active) {
    energyBall.move();
    energyBall.display();
    energyBall.increaseEnergy(positive);

    energyBall.radianceEnd();
    energyBall.lose();
  }
}

// positive balls functions
function ourPositiveThoughts() {
  for (let i = 0; i < positiveThoughts.length; i++) {
    let positive = positiveThoughts[i];
    if (positive.active) {
      positive.move();
      positive.display();
      energyBall.increaseEnergy(positive);
    }
  }
}

// negative balls functions
function ourNegativeThoughts() {
  for (let i = 0; i < negativeThoughts.length; i++) {
    let negative = negativeThoughts[i];
    if (negative.active) {
      negative.move();
      negative.display();
      energyBall.fadeEnergy(negative);
    }
  }
}

// change the program state after key is pressed
function keyPressed() {
  if (state === `title`) {
    state = `instruction`;
  } else if (state === `instruction`) {
    state = `simulation`;
  }
}
