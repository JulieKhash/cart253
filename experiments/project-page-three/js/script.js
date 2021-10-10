
"use strict";

let fireImg;
let burnImg;
let fireeImg

let currentInput = ``;
let numStars = 700

function preload() {
  fireImg = loadImage("assets/images/fire.gif");
  fireeImg = loadImage("assets/images/burn.gif");
  burnImg = loadImage("assets/images/ashes-dust.gif");
}


function setup() {
  createCanvas(1900, 1300);
  createInput();

}


function draw() {
  background(0);
  let glitchred = random(0, 250);
  let glitter = random(0, 40); // make bg orangy color



  imageMode(CENTER);
  tint(255, 255);
  image(fireImg, width/2+150, height/2, 500*2, 700*2);
  // tint(255,50);
  // image(fireeImg, width/2+200, height/2, 600*2, 1017*2);
  // tint(220, 30, 0, 50);



  for (let i = 0; i < numStars; i++){
  let x = random(0, width);
  let y = random(0, height);
  let ashSize = 3
  // ashSize += 10;
  noStroke()
  fill(glitchred, 50, 0)
  strokeWeight(2);
  ellipse(x, y, ashSize);
  }


  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`What is it you wish to burn away?`, width/2, height/3+400);

  //Diplay Input Field
  //stroke(184, 75, 48);
  fill(glitter, 100); //sets opacity at half
  rectMode(CENTER);
  rect(width/3, height/4, 600, 200)

  // noStroke();
  // textSize(20);
  // fill(col);
  // text(`What is it you wish to burn away?`, width/3, height/4);

  noStroke();
  textSize(30);
  fill(col);
  text(`write here`, width/3, height/4);

  //noStroke();
  textSize(40);
  fill(col, 75, 48);
  text(currentInput, width/3, height/4);
}




function keyTyped() {
  currentInput += key;
}


function keyPressed(){
  if (keyCode === BACKSPACE){
    currentInput = ``;
  }
  else if (keyCode === ENTER){
    keyCode === SPACEBAR;

  }
}
