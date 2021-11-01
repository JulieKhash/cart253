

"use strict";
let song;
let amplitude;

let clownImg;

var circles = [];
var lastTouchX;
var lastTouchY;

function preload() {
  song = loadSound('assets/sounds/funnel.mp3');
  clownImg = loadImage(`assets/images/light.png`)
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  amplitude = new p5.Amplitude();
  song.play();

  lastTouchX = width / 2;
  lastTouchY = height / 2;
}

function draw() {

  fill(0, 10);
  rect(0, 0, windowWidth, windowHeight);

  for (var i = 0; i < circles.length; i++) {
    circles[i].display();
  }

}

//change to touchEnded()
function mousePressed() {
  lastTouchX = mouseX;
  lastTouchY = mouseY;
  circles.push(new Circle());
}

function Circle() {
  this.x = lastTouchX;
  this.y = lastTouchY;

  this.display = function() {
    var level = amplitude.getLevel();
    var size = map(level, 0, 1, 10, 200);
    noStroke();
    //if statement to change fill
    fill(0, 166, 160);
    //if statement to change fill
    imageMode(CENTER);
    image(clownImg, this.x, this.y, size, size);

  }
}
