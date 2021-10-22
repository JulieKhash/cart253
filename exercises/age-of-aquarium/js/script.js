/**
Age of Aquarium - OUTSMART THE MEERKATS
Julie Khashimova

You are the beetle and the meerkats are fond of you. Lure them back to their hole
or simply become thier food right away! Choice is yours, show them how smart you are

- user controls beetle with their mouse and tries to avoid touching a meerkat.
if the user is caught the game is over, or if the user succeds to lure them all he wins
*/

"use strict";

let meerkatImg;
let beetleImg;
let backgroundImg;

let meerkats = [];
let meerkatNum = 5;
let meerkatsInHole = 0;

//user moving w mouse
let user = {
  x: undefined,
  y: undefined,
  w: 558,
  h: 567,
  eaten: false,
};

let hole = {
  x: 450,
  y: 70,
  w: 150,
  h: 50,
};

let state = `title`; // can be title, simulation, winner, gamer over

// all the visuals in the program
function preload() {
  meerkatImg = loadImage("assets/images/meerkat.png");
  beetleImg = loadImage("assets/images/bettle.png");
  backgroundImg = loadImage("assets/images/background2.jpg");
}

// inital setup
function setup() {
  createCanvas(1000, 700);
  noCursor();
  // create an array of meerkats
  for (let i = 0; i < meerkatNum; i++) {
    meerkats[i] = createMeerkat(random(0, width), random(0, height));
  }
}

// reset the game
function reset() {
  meerkats = [];
  meerkatsInHole = 0;
  user.eaten = false;

  for (let i = 0; i < meerkatNum; i++) {
    meerkats[i] = createMeerkat(random(0, width), random(0, height));
  }
}

// create meerkats
function createMeerkat(x, y) {
  let meerkat = {
    x: x,
    y: y,
    w: 392,
    h: 330,
    vx: 0,
    vy: 0,
    speed: 2,
    hidden: false,
  };
  return meerkat;
}

// execute everyting inside the program
function draw() {
  background(100);
  imageMode(CENTER);
  image(backgroundImg, width / 2, height / 2, 1492 - 200, 1074 - 200);

  displayHole();

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `winner`) {
    winner();
    reset();
  } else if (state === `gameover`) {
    gameover();
    reset();
  }
}

// simulation screen: shows user, beetles and game process
function simulation() {
  moveUser();
  displayUser(user);
  // for loop performs the same action for every meerkat in the array
  for (let i = 0; i < meerkats.length; i++) {
    insideHoleMeerkats(meerkats[i]);
    checkIfInsideHole(meerkats[i]);
    checkUserOverlap(meerkats[i]);
    controlMeerkat(meerkats[i]);
    moveMeerkat(meerkats[i]);
    displayMeerkat(meerkats[i]);
  }
}

// title screeen
function title() {
  fill(10, 100, 100, 100);
  rectMode(CENTER);
  rect(width / 2, height / 2, 800, 300);
  fill(50, 250, 200);
  textSize(35);
  textAlign(CENTER, CENTER);
  text(`OUTSMART THE MEERKATS`, width / 2, height / 2 - 50);
  text(`OR`, width / 2, height / 2);
  text(`BECOME THEIR FOOD!`, width / 2, height / 2 + 50);
  fill(250, 250, 20);
  textSize(17);
  text(`Click`, width / 2, height / 2 + 110);
}

//draws a hole
function displayHole(meerkat) {
  fill(random(0, 20));
  ellipse(hole.x, hole.y, hole.w, hole.h);
}

// count the number of meerkats inside the hole, if all of them get inside change the state
function insideHoleMeerkats(meerkat) {
  if (meerkat.hidden && meerkatsInHole === meerkats.length) {
    state = `winner`;
  }
}

// check if meerkat reaches the hole, make it dissappear if so count it as hidden
function checkIfInsideHole(meerkat) {
  let d = dist(hole.x, hole.y, meerkat.x, meerkat.y);
  if (!meerkat.hidden && d < hole.h / 2) {
    meerkat.hidden = true;
    meerkatsInHole += 1;
  }
}

// winner screen
function winner() {
  fill(10, 0, 100, 100);
  rectMode(CENTER);
  rect(width / 2, height / 2, 800, 150);
  fill(50, 180, 250);
  textSize(35);
  textAlign(CENTER, CENTER);
  text(`Good Joob, smart BEETL!`, width / 2, height / 2);
  fill(250, 250, 20);
  textSize(17);
  text(`Click`, width / 2, height / 2 + 50);
}

// control meerkats with mouse
function controlMeerkat(meerkat) {
  if (user.x > meerkat.x) {
    meerkat.vx = 2;
  } else if (user.x < meerkat.x) {
    meerkat.vx = -2;
  }
  if (user.y > meerkat.y) {
    meerkat.vy = 2;
  } else if (user.y < meerkat.y) {
    meerkat.vy = -2;
  }
}

//check if meerkats catch the user, if so game over
function checkUserOverlap(meerkat) {
  let d = dist(user.x, user.y, meerkat.x, meerkat.y);
  if (d < user.w / 30 + meerkat.w / 30) {
    user.eaten = true; //makes user dissappear
    state = `gameover`;
  }
}

// game over screen
function gameover() {
  fill(100, 0, 20, 100);
  rectMode(CENTER);
  rect(width / 2, height / 2, 800, 150);
  fill(250, 0, 50);
  textSize(35);
  textAlign(CENTER, CENTER);
  text(`Too bad you've become their SATISFACTION`, width / 2, height / 2);
  fill(250, 250, 20);
  textSize(17);
  text(`Click`, width / 2, height / 2 + 50);
}

// make meerkats move and constrain within a canvas
function moveMeerkat(meerkat) {
  meerkat.x += meerkat.vx;
  meerkat.y += meerkat.vy;

  meerkat.x = constrain(meerkat.x, 0, width);
  meerkat.y = constrain(meerkat.y, 0, height);
}

// if merkats aren't hidden, diplay
function displayMeerkat(meerkat) {
  if (!meerkat.hidden) {
    fill(0, 255, 0);
    image(meerkatImg, meerkat.x, meerkat.y, meerkat.w / 5, meerkat.h / 5);
  }
}

// user control with the mouse
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;

  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height);
}

// display user as a beetle
function displayUser(user) {
  if (!user.eaten) {
    fill(255, 0, 0);
    imageMode(CENTER);
    image(beetleImg, user.x, user.y, user.w / 5, user.h / 5);
  }
}

// change screens by clicking a mouse
function mousePressed() {
  if (state === `title`) {
    state = `simulation`; //if mouse is pressed move to a simulation page
  } else if (state === `winner`) {
    state = `title`;
  } else if (state === `gameover`) {
    state = `title`;
  }
}
