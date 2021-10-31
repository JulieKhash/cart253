"use strict";

let music;
let amp;

let button;

let volhistory = [];

function toggleMusic() {
  if (music.isPlaying()) {
    music.pause();
  } else {
    music.play();
  }
}

function preload() {
  music = loadSound(`assets/sounds/funnel.mp3`);
}

function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);

  button = createButton(`toggle`);
  button.mousePressed(toggleMusic);

  music.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);

  let vol = amp.getLevel();
  let alpha = map(vol, 0, 0.5, 30, 255);
  volhistory.push(vol);

  push();
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let r = map(volhistory[i], 0, 1, height / 2, 0);
    let x = r * cos(i);
    let y = r * sin(i);

    // let y = map(volhistory[i], 0, 1, height / 2, 0);
    stroke(0, 70, 90);
    strokeWeight(4);
    vertex(x, y);
  }
  endShape();
  pop();

  if (volhistory.length > width) {
    volhistory.splice(0, 1);
  }

  // stroke(0, 70, 90);
  // line(volhistory.length, 0, volhistory.length, height);

  stroke(alpha * 3, 0, 0);
  noFill();
  ellipse(200, 200, 200, vol * 200);
  ellipse(200, 200, vol * 200, 200);

  rectMode(CENTER);
  rect(200, 200, vol * 300, vol * 300);

  // box(100);
}
