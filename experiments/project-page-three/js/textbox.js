
"use strict";

let currentInput = ``;

let textfield = {
  x: 300,
  y: 300
}

function setup() {
  createCanvas(600, 600);
  createInput();
}

function draw() {
  let col = random(0, 100);
  background(col);

  //Diplay text field
  stroke(184, 75, 48);
  rectMode(CENTER);
  rect(textfield.x, textfield.y, 350, 100)

  //display text
  noStroke();
  textSize(30);
  textAlign(CENTER, CENTER);
  text(currentInput, width/2, height/2);
}

//checks if the text hits rect width
if (currentInput > textfield.x){
  noLoop();
}

//add the typed key to the input string
function keyTyped() {
  currentInput += key;
}
//add the key if typed
function keyPressed(){
  if (keyCode === BACKSPACE){
    currentInput = ``;
  }
}
