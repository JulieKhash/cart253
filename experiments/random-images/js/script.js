
"use strict";

// let image1;
// let image2;
// let image3;
// let image4;
// let image5;
// let image6;

let images = [];
let displayImage;

let horizontal;
let vertical;


function preload() {
  images[0] = loadImage(`assets/images/img1.jpg`);
  images[1] = loadImage(`assets/images/img2.jpg`);
  images[2] = loadImage(`assets/images/img3.jpg`);
  images[3] = loadImage(`assets/images/img4.jpg`);
  images[4] = loadImage(`assets/images/img5.jpg`);
  images[5] = loadImage(`assets/images/img6.jpg`);

  displayImage = images[0];

  horizontal = images[0, 1, 2];
  vertical = images[3, 4, 5];
}



function setup() {
  createCanvas(900, 900);
}


function draw() {
  background(0, 0, 50);



  for(let x = 0; x < 4; x++){
    for(let y = 0; y < 4; y++){
      rectMode(CENTER);
      stroke(200);
      noFill();
      rect(150*x, 150*y, 100);
    }
  }
  // image(displayImage, width/2, height/2, 500, 700);

}

function mousePressed(){
  displayImage = random(images);
}
