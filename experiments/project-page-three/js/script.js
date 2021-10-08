
"use strict";

let fireImg;
let burnImg;
let currentInput = ``;

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
  background(0);


  imageMode(CENTER);
  tint(255, 255);
  image(fireImg, width/2+150, height/2, 500, 700);
  //tint(glitter);
  //image(burnImg, width/2, height+40, 600, 1017);


  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`What is it you wish to burn away?`, width/2, height/3+400);

  //Diplay Input
  stroke(184, 75, 48);
  fill(glitter, 100); //sets opacity at half
  rectMode(CENTER);
  rect(width/3, height/4, 500, 100)

  noStroke();
  textSize(40);
  fill(col, 75, 48);
  text(currentInput, width/3, height/4);
}

//add the typed key to the input string
function keyTyped(){

  let numKeys = 5;
// lomit the number of key input
  for (let i = 0; i < numKeys; i++);

  currentInput += key;


}

function keyPressed(){
  if (keyCode === BACKSPACE){
    currentInput = ``;
  }
}
