
"use strict";

let fireImg;
let burnImg;

function preload() {
  fireImg = loadImage("assets/images/fire.gif");
  burnImg = loadImage("assets/images/burn.gif");
}


function setup() {
  createCanvas(1900, 1300);
  createInput();

}


function draw() {
  let glitter = random(0, 40); // make bg orangy color
  background(100);


  imageMode(CENTER);
  tint(255, 255);
  image(fireImg, width/2+150, height/2, 500, 700);
  //tint(glitter);
  //image(burnImg, width/2, height+40, 600, 1017);


  let col = random(0, 220);
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`What is it you wish to burn away?`, width/2, height/3+400);
}
