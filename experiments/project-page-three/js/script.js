
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
  size: 3,
  speed: 0.0002,
  opacity: 250
}

//ellipse(width/2, height/2-180, 100);

let textfield = {
  x: 550,
  y: 360,
  w: 600,
  h: 200
}

let substate = `fireplace` //another is after mouse clicked


function preload() {
  fireImg = loadImage("assets/images/fire.gif");
  burnImg = loadImage("assets/images/fire-flames.gif");
  ashesImg = loadImage("assets/images/ashes-dust.gif");
}


function setup() {
  createCanvas(1900, 1300);
  textfield = createInput();

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


  function makeAshes(){

  let glitchred = random(0, 250);
  for (let i = 0; i < numAshes; i++){
  let x = random(0, width);
  let y = random(0, height);
  ash.size += ash.speed;
  ash.size = constrain(ash.size, 3, 50);
  noStroke()
  fill(glitchred, 50, 0, ash.opacity)
  strokeWeight(1);
  ellipse(x, y, ash.size);
  tint(100,70);
  }
}

  function checkAshsize(){
    if (ash.size === 50){
     ash.speed = 0;
    //move to exclipse
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
  text(`What is it you wish to burn away?`, width-500, height/2+400);
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
image(fireImg, width/2+200, height/2, 500+100, 700+100);
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


    imageMode(CENTER);
    tint(random(0, 50), 100);
    image(ashesImg, width/2+100, height/2, 800, 480);
    tint(100,70);
    image(burnImg, width/2+100, height/2, 800, 480);
    tint(0,0);
    image(fireImg, width/2+200, height/2, 500*2-200, 700*2-200);

  }
}


//calculate the distance between the mouse and the face
function isOnButton(){
let d = dist(mouseX, mouseY, button.x, button.y);
if (d < button.size/2){
  return true;
}
else {
  return false
}
}


function keyPressed(){
  if (keyCode === BACKSPACE){
    currentInput = ``;
  }
  else if (keyCode === ENTER){

  }
}

function mousePressed(){
  if (substate === `fireplace` && isOnButton()){
      substate = `ashes`;
   }
}
    ///noLoop();
    // rectMode(CENTER);
    // fill(255, 0, 0);
    // rect(400, 400, 400, 400);
    //image(burnImg, width/2+100, height/2, 800*2, 480*2);
    // fill(255, 0, 0, glitter);
    // ellipse(button.x, button.y, button.size);
