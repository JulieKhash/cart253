
"use strict";

let fireImg;
let burnImg;
let ashesImg;

let currentInput = ``;
let numAshes = 700
let numKeysTyped = 0;

let button = {
  x: 950,
  y: 470,
  size: 100
}

let ash = {
  size: 10,
  speed: 0.00005,
  opacity: 250
}

let substate = `fireplace` //substate for page three


function preload() {
  fireImg = loadImage("assets/images/fire.gif");
  burnImg = loadImage("assets/images/fire-flames.gif");
  ashesImg = loadImage("assets/images/ashes-dust.gif");
}


function setup() {
  createCanvas(1900, 1300);
  createInput();

}


function draw() {

  background(0);

  if (substate === `fireplace`){
    fireplace()
  }
  else if (substate === `ashes`){
    makeAshes();
  }
}

  function fireplace(){
    displayFireImage1()
    text7()
    text6();
    userTextinput();
    makeButton();
  }

  function ashes(){
    makeAshes();
    checkAshsize()
  }

  // makes tiny red circles
  function makeAshes(){

  let glitchred = random(0, 250);
  for (let i = 0; i < numAshes; i++){
  let x = random(0, width);
  let y = random(0, height);
  ash.size -= ash.speed;
  ash.size = constrain(ash.size, 1, 10);
  noStroke()
  fill(glitchred, 30, 0, ash.opacity)
  strokeWeight(1);
  ellipse(x, y, ash.size);
  tint(100,70);
  }
}

  function checkAshsize(){
    if (ash.size === 10){
     randomSeed();
    //move to eclipse
  }
}

function text7(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`What is it you wish to burn away?`, width-500, height/2+400);
}


//displays first fire image
function displayFireImage1(){
imageMode(CENTER);
image(fireImg, width/2+200, height/2, 500+100, 700+100);
}

//displays textfield text and removes when user starts typing
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
  fill(col, 30, 0);
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
    let glitter = random(0, 90);
    fill(255, 0, 0, glitter);
    ellipse(button.x, button.y, button.size);
    fill(random(50, 190), 0, 0);
    textSize(25);
    text(`burn`, width/2, height/2-180)
    displayFireImage2()
}
}
//displays another image after first image
function displayFireImage2(){
    imageMode(CENTER);
    tint(random(0, 50), 100);
    image(ashesImg, width/2+100, height/2, 800, 480);
    tint(100,70);
    image(burnImg, width/2+100, height/2, 800, 480);
    tint(0,0);
    image(fireImg, width/2+200, height/2, 500*2-200, 700*2-200);
}


//calculates the distance between the mouse and the red button
function isOnButton(){
let d = dist(mouseX, mouseY, button.x, button.y);
if (d < button.size/2){
  return true;
}
else {
  return false
}
}

// controls what user can do when typed
function keyPressed(){
  if (keyCode === BACKSPACE){
    currentInput = ``;
  }
  else if (keyCode === ENTER){

  }
}

// changes to another sunstate after button is pressed
function mousePressed(){
  if (substate === `fireplace` && isOnButton()){
      substate = `ashes`;
   }
}
