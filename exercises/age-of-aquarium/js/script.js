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
let meerkatNum = 3;
let meerkatsInHole = 0;

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

let beetle = {
  x: undefined,
  y: undefined,
  w: 50,
  h: 50,
};

let state = `simulation`; // can be title, simulation, winner, gamer over

/**
Description of preload
*/
function preload() {
  meerkatImg = loadImage("assets/images/meerkat.png");
  beetleImg = loadImage("assets/images/bettle.png");
  backgroundImg = loadImage("assets/images/background2.jpg");
}

/**
Description of setup
*/
function setup() {
  createCanvas(1000, 700);
  noCursor();

  for (let i = 0; i < meerkatNum; i++) {
    meerkats[i] = createMeerkat(random(0, width), random(0, height));
  }
}

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

/**
Description of draw()
*/
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
  } else if (state === `gameover`) {
    gameover();
  }
}

function simulation() {
  moveUser();
  displayUser(user);

  for (let i = 0; i < meerkats.length; i++) {
    insideHoleMeerkats(meerkats[i]);
    checkIfInsideHole(meerkats[i]);
    checkUserOverlap(meerkats[i]);
    controlMeerkat(meerkats[i]);
    moveMeerkat(meerkats[i]);
    displayMeerkat(meerkats[i]);
  }
}

function title() {
  fill(10, 100, 100, 100);
  rectMode(CENTER);
  rect(width / 2, height / 2, 800, 300);
  fill(50, 250, 200);
  textSize(35);
  textAlign(CENTER, CENTER);
  text(`OUTSMART MEERKATS`, width / 2, height / 2 - 50);
  text(`OR`, width / 2, height / 2);
  text(`BECOME THEIR FOOD!`, width / 2, height / 2 + 50);
  fill(250, 250, 20);
  textSize(17);
  text(`Click`, width / 2, height / 2 + 110);
}

function displayHole(meerkat) {
  fill(0);
  ellipse(hole.x, hole.y, hole.w, hole.h);
}

// count the number of meerkats inside the hole
function insideHoleMeerkats(meerkat) {
  meerkatsInHole += 1;
  if (meerkatsInHole === meerkats.length) {
    return true;
  } else {
    return false;
  }
}

// check if meerkat reaches the hole, make it dissappear if so
function checkIfInsideHole(meerkat) {
  let d = dist(hole.x, hole.y, meerkat.x, meerkat.y);
  if (d < hole.h / 2) {
    meerkat.hidden = true;
  }
}

function winner() {
  if (insideHoleMeerkats(meerkat)) {
    fill(10, 0, 100, 100);
    rectMode(CENTER);
    rect(width / 2, height / 2, 800, 100);
    fill(50, 180, 250);
    textSize(35);
    textAlign(CENTER, CENTER);
    text(`Good Joob, smart BEET!`, width / 2, height / 2);
  }
}

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

function checkUserOverlap(meerkat) {
  let d = dist(user.x, user.y, meerkat.x, meerkat.y);
  if (d < user.w / 30 + meerkat.w / 30) {
    user.eaten = true;
    state = `gameover`;
  }
}

function gameover() {
  fill(100, 0, 20, 100);
  rectMode(CENTER);
  rect(width / 2, height / 2, 800, 100);
  fill(250, 0, 50);
  textSize(35);
  textAlign(CENTER, CENTER);
  text(`Too bad you've became their SATISFACTION`, width / 2, height / 2);
}

function moveMeerkat(meerkat) {
  let change = random(0, 1);
  if (change <= 0.02) {
    meerkat.vx = random(-meerkat.speed, meerkat.speed);
    meerkat.vy = random(-meerkat.speed, meerkat.speed);
  }
  meerkat.x += meerkat.vx;
  meerkat.y += meerkat.vy;

  meerkat.x = constrain(meerkat.x, 0, width);
  meerkat.y = constrain(meerkat.y, 0, height);
}

function displayMeerkat(meerkat) {
  if (!meerkat.hidden) {
    fill(0, 255, 0);
    image(meerkatImg, meerkat.x, meerkat.y, meerkat.w / 5, meerkat.h / 5);
    //ellipse(meerkat.x, meerkat.y, meerkat.size);
  }
}

function moveUser() {
  user.x = mouseX;
  user.y = mouseY;

  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height);
}

function displayUser(user) {
  if (!user.eaten) {
    fill(255, 0, 0);
    imageMode(CENTER);
    //ellipse(user.x, user.ry, user.size);
    image(beetleImg, user.x, user.y, user.w / 5, user.h / 5);
  }
}

function reset() {
  if (keyCode === 82 && state === `winner`) {
    state = `title`;
  } else if (keyCode === 82 && state === `gameover`) {
    state = `title`;
  }
}

function keyPressed() {
  reset();
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
