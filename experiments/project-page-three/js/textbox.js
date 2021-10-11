"use strict";

let fireImg;
let burnImg;
let ashesImg;
let sunImg;
let darkPlanetImg;


let currentInput = ``;
let numAshes = 700
let numStars = 200;
let numKeysTyped = 0;

let button = {
  x: 1200,
  y: 600,
  size: 400
}

let ash = {
  sizeX: 10,
  sizeY: 100,
  speed: 0.00005,
  opacity: 150
}

let sun ={
  x: 1800,
  y: 100,
  vx: 0.7,
  vy: 0.3,
  size: 1100,
  angle: 6
}

let planet ={
  x: 200,
  y: 1000,
  vx: 0.9,
  vy: 0.6,
  size: 650,
  angle: 60
}




let substate  = `fireplace`
//let substate = `fireplace`
//let substate = `fireplace` //substate for page three


function preload() {
  fireImg = loadImage("assets/images/fire.gif");
  burnImg = loadImage("assets/images/fire-flames.gif");
  ashesImg = loadImage("assets/images/ashes-dust.gif");
  sunImg = loadImage("assets/images/sun.png");
  darkPlanetImg =  loadImage("assets/images/darkplanet.png");
}

function setup() {
  createCanvas(1900, 1300);
  createInput();
  angleMode(DEGREES);
}


function draw() {

  background(0);

  if (substate === `fireplace`){
    fireplace()
  }
  else if (substate === `ashes`){
    ashes();
  }
  else if (substate === `pageFive`){
    pageFive();
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
    checkOpacity();
  }

  // makes tiny red circles
  function makeAshes(){

  push()
  let glitchred = random(0, 250);
  for (let i = 0; i < numAshes; i++){
  let x = random(0, width);
  let y = random(0, height);
  ash.sizeX -= ash.speed;
  ash.sizeY -= ash.speed;
  ash.opacity -=0.0006;
  ash.opacity = constrain(ash.opacity, 0, 150);
  noStroke()

  fill(glitchred, 20, 0, ash.opacity)
  ellipse(x, y, ash.sizeX, ash.sizeY);

  pop();

  }
}
// moves to other state based on ash opacity
  function checkOpacity(){
    if (ash.opacity <= 1){
    pageFive();
  }
}

function text7(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(25);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`What is it you wish to burn away?`, width-500, height/2+380);
}


//displays fire image and burning man
function displayFireImage(){

push();
imageMode(CENTER);
image(ashesImg, width/2+250, height/2);
tint(255, 150);
image(fireImg, width/2+200, height/2, 500+100, 700+100);
pop();
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
    text(`burn`, button.x, button.y);

}
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
  if (isOnButton() && substate === `fireplace`){
    substate = `ashes`
  }
}

/////////////////////////////////////////////////////////////


//  PAGE FIVE
function pageFive() {

let glitter= random(0,30);
background(glitter);

checkPlanetSize();
moveSun();
movePlanet();
eclipseMode();
text8()
imageMode(CENTER);

}

// makes
function makeStars(){

let glitch = random(0, 250);
for (let i = 0; i < numStars; i++){
let x = random(0, width);
let y = random(0, height);
noStroke()
fill(glitch, 150);
strokeWeight(1);
ellipse(x, y, 2);
}
}


// moves sun down and to the left
function moveSun(){
sun.x -= sun.vx;
sun.y += sun.vy;
sun.size +=0.7;
//rotates sun
push();
translate (sun.x, sun.y);
rotate(sun.angle);
image(sunImg, 0, 0, sun.size, sun.size);
sun.angle+=0.2;
pop();
}

// moves promlanet up and to the right
function movePlanet(){
planet.x += planet.vx;
planet.y -= planet.vy;
planet.size -=0.3;
//rotates sun
push();
translate (planet.x, planet.y);
rotate(planet.angle);
image(darkPlanetImg, 0, 0, planet.size, planet.size);
planet.angle+=0.4;
pop();
}

//check the distance between the planent and the sun
function isOverlap(){
let d = dist(planet.x, planet.y, sun.x, sun.y);
if (d < planet.size/14){
  return true;
}
else {
  return false;
}
}

//
function eclipseMode(){
  if (isOverlap()){
  planet.vy = 0.01;
  planet.vx = 0.01;
  sun.vy = 0.01;
  sun.vx = 0.01;
  planet.size -=1;
  planet.size = constrain(planet.size,  200, 650);
  makeStars();
  tint(10, 200);
}
}

function text8(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  if (isOverlap()){
    fill(0,0);
  }
   else{
 text(`Wait for an Eclipse`, width/2+100, height/2+200);
}
}

function checkPlanetSize(){
  if(planet.size <= 330){
  return true;
  }
  else {
    return false;
  }
}
//move to other state



//if the sun size reaches ... move to other page
