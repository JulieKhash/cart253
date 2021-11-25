"use strict";

let images = [];
let displayImage;

let words = ["sun", "love", "dream", "idea", "planet"];
let chosenWord;

let nums = [100, 200, 244, 55, 198];

let bubbles = [];
let bubble;


function preload() {

  for (let i = 1; i < 10; i++) {
    let loadedImage = loadImage(`assets/images/img${i}.jpg`);
    images.push(loadedImage);
    console.log(images);
  }
}

function setup() {
  createCanvas(900, 900);


  for (let i = 0; i < 14; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(80, 120);
      bubble = new Bubble(x, y, r);
      bubbles.push(bubble);
  }
}

function mousePressed(){
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)){
      bubbles.splice(i, 1);
  }
}
}

// function mousePressed() {
//   for (let i = 0; i < bubbles.length; i++) {
//     bubbles[i].contains(mouseX, mouseY);
//   }
// }

function draw() {
  background(0, 40, 150);

  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)){
      bubbles[i].changeColor();
  }
  bubbles[i].move();
  bubbles[i].show();
}
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(){
    this.brightness = 250;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }


  show() {
    stroke(200);
    fill(this.brightness, 150)
    ellipse(this.x, this.y, this.r);
  }
}
