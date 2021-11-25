"use strict";

let images = [];
let displayImage;



function preload() {

  for (let i = 1; i < 10; i++){
    let loadedImage = loadImage(`assets/images/img${i}.jpg`);
    images.push(loadedImage);
    console.log(images)
  }
}

function setup() {
  createCanvas(900, 900);
  //noStroke();
}


function draw() {
  background(0, 40, 150);
  frameRate(10)
  //noLoop();
  displayImage = random(images);

  const columns = 5;
  const rows = 5;
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth + cellWidth / 2;
      const y = r * cellHeight + cellHeight / 2;
      imageMode(CENTER);
      image(displayImage, x, y, cellWidth, cellHeight);
    }
  }
}

function mousePressed(){
  displayImage = random(images);
}

// function drawFlower(x, y, size) {
//   const flowerSize = random(size * 0.5, size);
//   const petalSize = flowerSize / 2;
//   const spacing = petalSize / 2;
//
//   fill(random(25, 130), 0, random(0, 90));
//   circle(x - spacing, y - spacing, petalSize);
//   circle(x + spacing, y - spacing, petalSize);
//   circle(x - spacing, y + spacing, petalSize);
//   circle(x + spacing, y + spacing, petalSize);
//
//   fill(random(255), random(255), random(255));
//   circle(x, y, petalSize);
// }
