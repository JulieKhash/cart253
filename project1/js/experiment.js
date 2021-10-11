/**
Project 1 - Secret Signs
Julie Khashimova

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let backgroundImg;
let crescentImg;
let handImg;
let shadowImg;
let shadowShotImg;
let focusImg;
let fireImg;
let burnImg;
let ashesImg;
let sunImg;
let darkPlanetImg;


let handPosition = {
  x: 810,
  y: 665,
  place: 125,
  alpha: 100,
};

let circle1 = {
  x: undefined,
  y: undefined,
  size: 90,
  speed: 2,
  alpha: 200,
};

let circle2 = {
  x: undefined,
  y: undefined,
  size: 40,
  speed: 1.5,
  alpha: 200,
};

let circle3 = {
  x: undefined,
  y: undefined,
  size: 110,
  speed: 2,
  alpha: 190,
};
let circle4 = {
  x: undefined,
  y: undefined,
  size: 140,
  speed: 2,
  alpha: 190,
};
let circle5 = {
  x: undefined,
  y: undefined,
  size: 160,
  speed: 2,
  alpha: 190,
};
let circle6 = {
  x: undefined,
  y: undefined,
  size: 10,
  speed: 50,
  alpha: 100,
};

let aimPosition = {
  x: 950,
  y: 650,
  place: 100,
};

let mousePointer = {
  x: undefined,
  y: undefined,
  size: 100,
};

// Focus Animation ellipses
let ellipse1 = {
  x: 950,
  y: 650,
  size: 50,
  speed: 9,
  strokeSize: 10,
};
let ellipse2 = {
  x: 950,
  y: 650,
  size: 40,
  speed: 8,
  strokeSize: 10,
};
let ellipse3 = {
  x: 950,
  y: 650,
  size: 30,
  speed: 7,
  strokeSize: 10,
};
let ellipse4 = {
  x: 950,
  y: 650,

  size: 20,
  speed: 6,
  strokeSize: 10,
};
let ellipse5 = {
  x: 950,
  y: 650,
  size: 10,
  speed: 4,
  strokeSize: 10,
};
let ellipse6 = {
  x: 950,
  y: 650,
  size: 5,
  speed: 3,
  strokeSize: 10,
};

let sun ={
  x: 1800,
  y: 100,
  vx: 0.7,
  vy: 0.3,
  size: 1100,
  angle: 6
};

let planet ={
  x: 200,
  y: 1000,
  vx: 0.9,
  vy: 0.6,
  size: 650,
  angle: 60
};

let offset = 0; //for image control
let offset2 = 0;
let easing = 0.05;

let numAshes = 700;
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

let currentInput = ``;
let state = `title`;
let substate = `fireplace` //sub-state for page three
//let stateEclipse = `pageFive`;



function preload() {
  crescentImg = loadImage("assets/images/moon.gif");
  backgroundImg = loadImage("assets/images/headshadow.gif");
  shadowImg = loadImage("assets/images/shadow.gif");
  handImg = loadImage("assets/images/handgre.png");
  shadowShotImg = loadImage("assets/images/shadowGlow.png");
  focusImg = loadImage("assets/images/focus.gif");
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
  //let col = random(0, 220);
  let bg1 = random(0, 23);
  background(0);

  if (state === `title`) {
    titlePage();
  } else if (state === `pageTwo`) {
    pageTwo();
  } else if (state === `pageThree`) {
    pageThree();
  } else if (state ===`pageFour`) {
    pageFour();
  }
  else if (state ===`pageFour` && substate === `fireplace`) {
    fireplace();
  }
  else if (substate === `ashes`) {
    ashes();
  }
  else if (state ===`pageFive`){
    pageFive();
  }
    }

/////////////////////////////////////////////////////////////////////////////
// PAGE ONE FUNCTIONS
//Dispays first page of the program
function titlePage() {
  text1();
  titleText();
  titleImages();
}

function titleText() {
  let col = random(0, 220);
  textFont(`Verdana`);
  textSize(70);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`SECRET SIGNS`, width / 2, height / 4.5);
}

function text1() {
  let col = random(0, 220);
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Press Enter`, width / 2, height / 3 + 400);
}

//displays title images
function titleImages() {
  let col = random(0, 220);
  push();
  imageMode(CENTER);
  // tint(col, 200, 200, 150);

  image(backgroundImg, width / 2, height / 2);
  image(crescentImg, width / 2, height / 3 + 210, 500, 276);
  pop();
}

//PAGE TWO FUNCTIONS
function pageTwo() {
  handposition();
  pageTwoImages();
  text2();
  handAnimation();
  isHandonHand();
}

function pageTwoImages() {
  imageMode(CENTER);
  //tint(100, 210, 210);
  image(shadowImg, width / 2, height / 2, 800, 590);
  //tint(255, 100);
  image(handImg, mouseX, mouseY, 140, 190);
}

//hand position point
function handposition() {
  noStroke();
  fill(200, handPosition.alpha);
  ellipse(handPosition.x, handPosition.y, handPosition.place);
}

function handAnimation() {
  if (isHandonHand()) {
    push();
    let glitch = random(0, 255);
    //tint(100, 210, 210, 255);
    image(shadowShotImg, width / 2, height / 2, 800, 590);

    noStroke();
    circle1.size += 1;
    circle1.size = constrain(circle1.size, 20, 210);
    fill(glitch, circle1.alpha);
    circle1.alpha -= circle1.speed;
    ellipse(handPosition.x, handPosition.y, circle1.size);

    circle2.size += 0.9;
    circle2.size = constrain(circle2.size, 30, 220);
    fill(glitch, circle2.alpha);
    circle2.alpha -= circle2.speed;
    ellipse(handPosition.x, handPosition.y, circle2.size);

    circle3.size += 1.2;
    circle3.size = constrain(circle3.size, 30, 220);
    fill(glitch, circle3.alpha);
    circle3.alpha -= circle3.speed;
    ellipse(handPosition.x, handPosition.y, circle3.size);

    circle4.size += 1.2;
    circle4.size = constrain(circle4.size, 80, 300);
    fill(glitch, circle4.alpha);
    circle4.alpha -= circle4.speed;
    ellipse(handPosition.x, handPosition.y, circle4.size);

    circle5.size += 1.2;
    circle5.size = constrain(circle5.size, 80, 350);
    fill(glitch, circle5.alpha);
    circle5.alpha -= circle5.speed;
    ellipse(handPosition.x, handPosition.y, circle5.size);

    circle6.size += 10;
    circle6.size = constrain(circle6.size, 10, 500);
    fill(glitch, circle6.alpha);
    circle6.alpha -= circle6.speed;
    ellipse(handPosition.x, handPosition.y, circle6.size);
    circle6.alpha += circle6.speed;

    text3();
    //tint(glitch);
    image(handImg, mouseX, mouseY, 140, 190);
    pop();
  }
}

//checks if users hand is on shadow's hand
function isHandonHand() {
  let d = dist(mouseX, mouseY, handPosition.x, handPosition.y);
  if (d < handPosition.place / 5) {
    return true;
  } else {
    return false;
  }
}

function text2() {
  let glitch = random(0, 255);
  textFont(`Verdana`);
  textSize(25);
  fill(glitch);
  text(`Touch my hand`, width / 2 - 150, height / 2 + 10);
}

function text3() {
  let glitch = random(0, 255);
  if (checkCircleSize()) {
    textFont(`Verdana`);
    textSize(20);
    fill(glitch);
    text(`Click on It`, handPosition.x - 50, handPosition.y - 150);
  }
}
//checks if the main circle reaches its given size
function checkCircleSize() {
  if (circle6.size == 500) {
    return true;
  } else {
    return false;
  }
}

/////////////////////////////////////////////////////////////////////////
//PAGE THREE FUNCTIONS
function pageThree() {
  let bg = random(0, 23);
  background(bg);

  aimposition();
  eyeImage();
  controlImage();
  showFocus();
  displayAim();
  text4();
  showClicktext();
}

//aim position
function aimposition() {
  stroke(0);
  noFill();
  ellipse(aimPosition.x, aimPosition.y, aimPosition.place);
}

//displays eye image at the center
function eyeImage() {
  push();
  imageMode(CENTER);
  tint(255, 255);
  image(focusImg, width / 2, height / 2, 600, 450);
  //pointer
  stroke(255, 0);
  line(offset - 30, offset2, offset + 30, offset2);
  line(offset, offset2 + 30, offset, offset2 - 30);
  stroke(255, 0);
  ellipse(offset, offset2, mousePointer.size); //mouse pointer
  pop();
}

//controls second image with mouse
function controlImage() {
  let dx = mouseX - focusImg.width / 2 - offset;
  let dy = mouseY - focusImg.height / 2 - offset2;
  offset += dx * easing;
  offset2 += dy * easing;
  push();
  tint(255, 150); //
  image(focusImg, offset, offset2, 600, 450);
  pop();
}

//shows focus animation if the aimed
function showFocus() {
  if (checkAim()) {
    focusAnimation();
  }
}

//checks the distances between aim and image positioning
function checkAim() {
  let d = dist(offset, offset2, aimPosition.x, aimPosition.y);
  if (d < aimPosition.place / 20) {
    return true;
  } else {
    return false;
  }
}

//red aim position
function displayAim() {
  stroke(255, 0, 0);
  strokeWeight(2);
  line(aimPosition.x - 30, aimPosition.y, aimPosition.x + 30, aimPosition.y);
  line(aimPosition.x, aimPosition.y + 30, aimPosition.x, aimPosition.y - 30);
}

function text4() {
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(40);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Focus your Mind`, width / 2 + 200, height / 2 + 300);
}

function focusAnimation() {
  let strokeGlitch = random(0, 255);
  //1
  ellipse1.size += ellipse1.speed;
  ellipse1.size = constrain(ellipse1.size, 50, width + 150);
  ellipse1.strokeSize -= 0.05;
  ellipse1.strokeSize = constrain(ellipse1.strokeSize, 0.03, 10);
  stroke(strokeGlitch);
  strokeWeight(ellipse1.strokeSize);
  noFill();
  ellipse(ellipse1.x, ellipse1.y, ellipse1.size);
  //2
  ellipse2.size += ellipse2.speed;
  ellipse2.size = constrain(ellipse2.size, 20, width + 100);
  ellipse2.strokeSize -= 0.05;
  ellipse2.strokeSize = constrain(ellipse2.strokeSize, 0.04, 10);
  stroke(strokeGlitch);
  strokeWeight(ellipse2.strokeSize);
  noFill();
  ellipse(ellipse2.x, ellipse2.y, ellipse2.size);
  //3
  ellipse3.size += ellipse3.speed;
  ellipse3.size = constrain(ellipse3.size, 10, width);
  ellipse3.strokeSize -= 0.04;
  ellipse3.strokeSize = constrain(ellipse3.strokeSize, 0.05, 10);
  stroke(strokeGlitch);
  strokeWeight(ellipse3.strokeSize);
  noFill();
  ellipse(ellipse3.x, ellipse3.y, ellipse3.size);
  //4
  ellipse4.size += ellipse4.speed;
  ellipse4.size = constrain(ellipse4.size, 10, width - 50);
  ellipse4.strokeSize -= 0.03;
  ellipse4.strokeSize = constrain(ellipse4.strokeSize, 0.03, 10);
  stroke(strokeGlitch);
  strokeWeight(ellipse4.strokeSize);
  noFill();
  ellipse(ellipse4.x, ellipse4.y, ellipse4.size);
  //5
  ellipse5.size += ellipse5.speed;
  ellipse5.size = constrain(ellipse5.size, 5, 600);
  ellipse5.strokeSize -= 0.02;
  ellipse5.strokeSize = constrain(ellipse5.strokeSize, 2, 10);
  stroke(strokeGlitch);
  strokeWeight(ellipse5.strokeSize);
  noFill();
  ellipse(ellipse5.x, ellipse5.y, ellipse5.size);
  //6
  ellipse6.size += ellipse6.speed;
  ellipse6.size = constrain(ellipse6.size, 5, 300);
  //ellipse6.strokeSize -= 0.01;
  ellipse6.strokeSize = constrain(ellipse6.strokeSize, 0.03, 9);
  stroke(strokeGlitch);
  strokeWeight(ellipse6.strokeSize);
  noFill();
  ellipse(ellipse6.x, ellipse6.y, ellipse6.size);
}

function showClicktext() {
  if (checkAimSize() && checkAim()) {
    text5();
  }
}

function checkAimSize(){
  if (ellipse6.size === 300){
    return true;
  }
  else{
    return false;
  }
}

function text5() {
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(25);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`click`, ellipse6.x, ellipse6.y - 60);
}

///////////////////////////////////////////////////////////////////
//PAGE FOUR FUNCTIONS
function pageFour() {

  background(0);

  if (substate === `fireplace`){
    fireplace()
  }
  else if (substate === `ashes`){
    ashes();
  }
  else if (state === `pageFive`){
    pageFive();
}
}

  function fireplace(){
    displayFireImage();
    text7();
    text6();
    blockWord();
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

// moves to eclipse state based on ash opacity
  function checkOpacity(){
    if (ash.opacity <= 1){
    pageFive();
  }
}


// displays the text
function text7(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(25);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`What is it you wish to burn away?`, width-500, height/2+380);
}


//displays first fire image
function displayFireImage(){
push();
imageMode(CENTER);
image(ashesImg, width/2+250, height/2);
//tint(255, 150);
image(fireImg, width/2+200, height/2, 500+100, 700+100);
pop();
}

//displays a textfield text and removes it when user starts typing
  function text6(){
  let col = random(0, 220);
  if (numKeysTyped === 0)
  noStroke();
  textSize(30);
  fill(col);
  if (numKeysTyped >= 1){
  fill(0,0);
}
  text(`write here`, width/3+ 30, height/4);

}
// blocks the word enter that appears in the text box by default :(
function blockWord(){
  if (currentInput === `Enter`){
     currentInput = ``;
  }
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



//PAGE FIVE FUNCTIONS
function pageFive() {

let glitter = random(0,30);
background(glitter);

checkPlanetSize();
moveSun();
movePlanet();
eclipseMode();
text8()
imageMode(CENTER);

}

//makes stars
function makeStars(){
let glitch = random(0, 250);
for (let i = 0; i < numStars; i++){
let x = random(0, width);
let y = random(0, height);
noStroke();
fill(glitch, 150);
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

//chanhes planet/sun paramentres after eclipse
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

//displays a text
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

//checks planet size for reference
function checkPlanetSize(){
  if(planet.size <= 330){
  return true;
  }
  else {
    return false;
  }
}

//move to other state










////////////////////////////////////////////////////////////////////////////

//if (circle6.size === 300){
//mouseClick text

//change page if pressed ENTER
function keyPressed() {
  if (keyCode === ENTER && state === `title`) {
    state = `pageTwo`;
  }
  else if(keyCode === BACKSPACE){
    currentInput = ``;
  }
  else if(keyCode === ENTER && `fireplace`){
    return false;
  }
}




function mousePressed() {
  if (state === `pageTwo` && isHandonHand() && checkCircleSize()) {
    state = `pageThree`;
  }
  else if (state ===`pageThree` && checkAim() && checkAimSize()){
    state = `pageFive`;
  }

  else if (state === `pageFour` && substate ===`fireplace` && isOnButton()){
     substate = `ashes`;
}
  else if (isOnButton() && substate === `fireplace`){
  substate = `ashes`
}
}
