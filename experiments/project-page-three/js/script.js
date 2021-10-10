
"use strict";

let fireImg;
let burnImg;
let ashesImg;

let currentInput = ``;
let numAshes = 700
let numKeysTyped = 0;

let button = {
  size: 100
}

let textfield = {
  x: 550,
  y: 360,
  w: 600,
  h: 200
}



function preload() {
  fireImg = loadImage("assets/images/fire.gif");
  burnImg = loadImage("assets/images/burn.gif");
  ashesImg = loadImage("assets/images/ashes-dust.gif");
}


function setup() {
  createCanvas(1900, 1300);
  textfield = createInput();

}


function draw() {
  background(0);
  let glitchred = random(0, 250);
  let glitter = random(0, 40); // make bg orangy color



  //textbox();
  displayFireImage1()
  text7()
  text6();
  userTextinput();
  makeButton();

  for (let i = 0; i < numAshes; i++){
  let x = random(0, width);
  let y = random(0, height);
  let ashSize = 3
  // ashSize += 10;
  noStroke()
  fill(glitchred, 50, 0)
  strokeWeight(2);
  ellipse(x, y, ashSize);
  }
}

function text7(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  // if (userTextinput()){
  // fill(0,0);
  // }
  textAlign(CENTER, CENTER);
  text(`What is it you wish to burn away?`, width/2, height/3+400);
}



function textbox(){
  //Diplay Input Field
  let glitter = random(0, 40); // make bg orangy color
  fill(glitter, 100); //sets opacity at half
  rectMode(CENTER);
  rect(width/3-150, height/4, 650, 250);
}

//displays first fire image
function displayFireImage1(){
imageMode(CENTER);
image(fireImg, width/2+200, height/2, 500*2-200, 700*2-200);
}

//displays textfield text
  function text6(){
  let col = random(0, 220);
  noStroke();
  textSize(30);
  fill(col);
  if (numKeysTyped >= 1){
  fill(0,0);
}
  text(`write here`, width/3+ 30, height/4);
}

//displays user input text
  function userTextinput(){
  let col = random(0, 220);
  textSize(90);
  fill(col, 75, 48);
  text(currentInput, width/3+70, height/4);
}

//checks and limits the number of character input
function keyTyped() {
  numKeysTyped = numKeysTyped + 1;
  if (numKeysTyped < 30){
  currentInput += key;
}
}

//displays a button
function makeButton(){
  if (numKeysTyped > 3){
    let glitter = random(0, 30);
    fill(255, 0, 0, glitter);
    ellipse(width/2, height/2-200, 100);
    fill(150, 0, 0);
    textSize(25);
    text(`burn`, width/2, height/2-200)

    //tint(200, 100, 0, 50);
    tint(255, 50);
    image(ashesImg, width/2+200, height/2, 500*5, 300*5);
    //tint(100,50);
    //image(burnImg, width/2+200, height-300, 190*5, 355*5);
    tint(0,0);
    image(fireImg, width/2+200, height/2, 500*2-200, 700*2-200);

  }
}


function keyPressed(){
  if (keyCode === BACKSPACE){
    currentInput = ``;
  }
  else if (keyCode === ENTER){

  }
}

// function mousePressed(){
//   if()
// }
