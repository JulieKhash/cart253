"use strict";

let images = [];
let loadedImage
let displayImage1;

let words = ["sun", "love", "dream", "idea", "planet"];
let chosenWord;

let nums = [100, 200, 244, 55, 198];

let bubbles = [];
let bubble;


function preload() {

  displayImage1 = loadImage(`assets/images/img1.jpg`)

  for (let i = 1; i < 10; i++) {
    let loadedImage = loadImage(`assets/images/img${i}.jpg`);
    images.push(loadedImage);
    console.log(images);
  }
}

function setup() {
  createCanvas(900, 900);

  for (let i = 0; i < 11; i++) {
    for(let j = 0; j < 11; j++){
      let x = 150 * i;
      let y = 150 * j;
      let r = 150;
      let randomImages = random(images);

      bubble = new Bubble(x, y, r, randomImages);
      bubbles.push(bubble);
  }
}
}

// function mousePressed() {
//   for (let i = 0; i < bubbles.length; i++) {
//     bubbles[i].clicked(mouseX, mouseY);
//   }
// }

function draw() {
  background(0, 40, 150);

  for (let i = 0; i < bubbles.length; i++) {
    //bubbles[i].move();
    bubbles[i].show();
    bubbles[i].clicked(mouseX, mouseY);
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = img;
  }

  clicked(px, py) {
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.image = random(images);
    }
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    image(this.image, this.x, this.y, this.r, this.r)
    // stroke(200);
    // fill(this.brightness, 150)
    // ellipse(this.x, this.y, this.r);
  }
}
