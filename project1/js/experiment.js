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
let footStepImg;
let nightImg;


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
  size:90,
  speed:2,
  alpha: 200,
}

let circle2 = {
  x: undefined,
  y: undefined,
  size: 40,
  speed:1.5,
  alpha: 200,
}

let circle3 = {
  x: undefined,
  y: undefined,
  size:110,
  speed:2,
  alpha: 190,
}
let circle4 = {
  x: undefined,
  y: undefined,
  size:140,
  speed:2,
  alpha: 190,
}
let circle5 = {
  x: undefined,
  y: undefined,
  size:160,
  speed:2,
  alpha: 190,
}
let circle6 = {
  x: undefined,
  y: undefined,
  size:10,
  speed:50,
  alpha: 100,
}


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
  strokeSize: 10
}
let ellipse2 = {
  x: 950,
  y: 650,
  size: 40,
  speed: 8,
 strokeSize: 10
}
let ellipse3 = {
  x: 950,
  y: 650,
  size: 30,
  speed: 7,
 strokeSize: 10
}
let ellipse4 = {
  x: 950,
  y: 650,

  size: 20,
  speed: 6,
 strokeSize: 10
}
let ellipse5 = {
  x: 950,
  y: 650,
  size: 10,
  speed: 4,
 strokeSize: 10
}
let ellipse6 = {
  x: 950,
  y: 650,
  size: 5,
  speed: 3,
  strokeSize: 10
}

let road = {
  x: 950,
  y: 16
}


let footsteps = {
  x: 950,
  y: 1000,
  speed: 1
}

let userleg = {
  x: 950,
  y: 1200,
  speed: 2,
  vx: 0,
  vy: 0,
  w: 25,
  h: 70
}

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
let state = `pageTwo`;
let substate = `fireplace` //sub-state for page three
//let stateEclipse = `pageFive`;



function preload() {

  backgroundImg = loadImage("assets/images/signs.gif");
  shadowImg = loadImage("assets/images/shadow.gif");
  handImg = loadImage("assets/images/handgre.png");
  shadowShotImg = loadImage("assets/images/shadowGlow.png");
  focusImg = loadImage("assets/images/focus.gif");
  footStepImg = loadImage("assets/images/footprints.gif");
  nightImg = loadImage("assets/images/night.gif");

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

  if (state === `title`) {    //main
    titlePage();
  } else if (state === `pageTwo`) {   //shadow man
    pageTwo();
  } else if (state === `pageThree`) {   //focus mind
    pageThree();
  } else if (state ===`pageFour`) {    //follow footsteps
    pageFour();
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

//displays the title
function titleText() {
  let col = random(0, 220);
  textFont(`Verdana`);
  textSize(75);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`SECRET SIGNS`, width / 2, height / 4.5);
}

// displays text
function text1() {
  let col = random(0, 220);
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Press Enter`, width / 2, height / 3 + 400);
}

//displays cerscent moon and the head sillouhete
function titleImages() {
  imageMode(CENTER);
  image(backgroundImg, width / 2, height / 2-50);

}

//PAGE TWO FUNCTIONS
function pageTwo() {
  handposition();
  pageTwoImages();
  text2();
  handAnimation();
  isHandonHand();
}

// dipslays moving shadow figure and user's hands
function pageTwoImages() {
  imageMode(CENTER);

  push();
  tint(100, 210, 210);
  image(shadowImg, width / 2, height / 2, 800, 590);
  pop();
  push();
  tint(255, 100);
  image(handImg, mouseX, mouseY, 140, 190);
  pop();
}

//hand position point
function handposition() {
  noStroke();
  fill(200, handPosition.alpha);
  ellipse(handPosition.x, handPosition.y, handPosition.place);
}

// displays ellectric ripplic animation within the hand position
function handAnimation() {
  if (isHandonHand()) {
    let glitch = random(0, 255);

    image(shadowShotImg, width/2, height/2, 800, 590); //displays the frozen shot of the figure

    noStroke();
    circle1.size += 1;
    circle1.size = constrain(circle1.size, 20, 210);
    fill(glitch, circle1.alpha);
    circle1.alpha -= circle1.speed;
    ellipse(handPosition.x, handPosition.y, circle1.size)

    circle2.size += 0.9;
    circle2.size = constrain(circle2.size, 30, 220);
    fill(glitch , circle2.alpha);
    circle2.alpha -= circle2.speed;
    ellipse(handPosition.x, handPosition.y, circle2.size);

    circle3.size += 1.2;
    circle3.size = constrain(circle3.size, 30, 220);
    fill(glitch, circle3.alpha);
    circle3.alpha -= circle3.speed;
    ellipse(handPosition.x, handPosition.y, circle3.size);

    circle4.size += 1.2;
    circle4.size = constrain(circle4.size, 80, 300);
    fill(glitch , circle4.alpha);
    circle4.alpha -= circle4.speed;
    ellipse(handPosition.x, handPosition.y, circle4.size);

    circle5.size += 1.2;
    circle5.size = constrain(circle5.size, 80, 350);
    fill(glitch, circle5.alpha);
    circle5.alpha -= circle5.speed;
    ellipse(handPosition.x, handPosition.y, circle5.size);

    circle6.size += 2;
    circle6.size = constrain(circle6.size, 10, 500);
    fill(glitch, circle6.alpha);
    circle6.alpha -= circle6.speed;
    ellipse(handPosition.x, handPosition.y, circle6.size)
    circle6.alpha += circle6.speed;

    text3();
    image(handImg, mouseX, mouseY, 140, 190);
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
  text(`Touch my hand`, handPosition.x-80, handPosition.y );
}

function text3() {
  let glitch = random(0, 255);
  if (checkCircleSize()) {
    textFont(`Verdana`);
    textSize(20);
    fill(glitch);
    text(`Click on It`, handPosition.x-40, handPosition.y - 150);
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
  //push();
  imageMode(CENTER);
  //tint(255, 255);
  image(focusImg, width / 2, height / 2, 600, 450);
  //pointer
  stroke(255, 0);
  line(offset - 30, offset2, offset + 30, offset2);
  line(offset, offset2 + 30, offset, offset2 - 30);
  stroke(255, 0);
  ellipse(offset, offset2, mousePointer.size); //mouse pointer
  //pop();
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
    imageMode(CENTER);


    moveFootsteps();
    resetFootsteps();
    roadFooodsteps();
    islegOffscreen()
    moveUserleg()
    userFoot();

    movetoPage5()  //Moves to Page 5!

    //move footsteps upwards
    //display images

  }
  function moveFootsteps(){
  footsteps.y -= footsteps.speed;
  }

  function resetFootsteps(){
  if (footsteps.y <= height/3+40){
    footsteps.y = 1000;
  }
  }


  function islegOffscreen(){
    if (userleg.x > width/2+30 || userleg.x < width/2-30 || userleg.y > height || userleg.y < 0){
    return text7();
  }
  else {
    return text6();
  }
  }


  function isLegOnroad(){
    if (userleg.y <= 300){
    return true;
  }
  else {
    return false;
  }
  }

function movetoPage5(){
  if(isLegOnroad()){
    pageFive();
  }
}

  function userFoot(){

    userleg.vx +=userleg.speed;
    userleg.vy +=userleg.speed;

    let glitch = random(50, 150);
    fill(glitch, 0, 0);
    ellipse (userleg.x+30, userleg.y, userleg.w, userleg.h);
    ellipse (userleg.x-20, userleg.y, userleg.w, userleg.h);
  }

  function moveUserleg(){
    if (keyIsDown (LEFT_ARROW)) {
      userleg.vx = -userleg.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
     userleg.vx = userleg.speed;
    }
    else {
      userleg.vx= 0;
    }
    // control user's horizontal movement
    if (keyIsDown(UP_ARROW)){
    userleg.vy = -userleg.speed;
    }
    else if (keyIsDown(DOWN_ARROW)){
    userleg.vy = userleg.speed;
    }
    else {
      userleg.vy = 0;
    }
    userleg.x += userleg.vx;
    userleg.y+=userleg.vy;
  }

  function roadFooodsteps(){
  image(nightImg, road.x, road.y);
  image(footStepImg, footsteps.x, footsteps.y, 286/2, 888/2);
  }

  function text6(){
    let col = random(0, 220);
    noStroke();
    textFont(`Verdana`);
    textSize(25);
    fill(col);
    textAlign(CENTER, CENTER);
    text(`Follow the Footsteps`, width/5, height/2+200);
  }

  function text7(){
    let col = random(0, 220);
    noStroke();
    textFont(`Verdana`);
    textSize(25);
    fill(col, 0, 0);
    textAlign(CENTER, CENTER);
    text(`Don't lose the track!`, width/5, height/2+200);

  }



//PAGE FIVE FUNCTIONS
function pageFive() {

let glitter = random(0,30);
background(glitter);
imageMode(CENTER);

checkPlanetSize();
moveSun();
movePlanet();
eclipseMode();
displayClick()

}

//makes stars
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
sun.size = constrain(sun.size, 1000,  1800);
//rotates sun
push();
translate (sun.x, sun.y);
rotate(sun.angle);
image(sunImg, 0, 0, sun.size, sun.size);
sun.angle+=0.2;
pop();
}

// moves planet up and to the right
function movePlanet(){
planet.x += planet.vx;
planet.y -= planet.vy;
planet.size -=0.3;
planet.size = constrain(planet.size,  340, 650);
//rotates sun
push();
translate (planet.x, planet.y);
rotate(planet.angle);
image(darkPlanetImg, 0, 0, planet.size, planet.size);
planet.angle+=0.7;
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

// planet and the sun stops after and shows starsoverlap
function eclipseMode(){
  if (isOverlap()){
  //push();
  planet.vy = 0;
  planet.vx = 0;
  sun.vy = 0;
  sun.vx = 0;

  makeStars();
  tint(10, 200);
  //pop();
}
}
 function displayClick(){
   if (checkPlanetSize()){
     text9();
   }
   else {
     text8();
   }
 }

// displays a text before eclipse
function text8(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  if (isOverlap() && planet.vx === 0){
    fill(0, 0);
  }
    else {
  text(`Wait for an Eclipse`, width/2+100, height/2+200);
}
}

// displays a text
function text9(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(25);
  fill(col);
  textAlign(CENTER, CENTER);

  text(`Click`, planet.x, planet.y);
}

// checks the planet's size
function checkPlanetSize(){
  if(planet.size === 340){
  return true;
  }
  else {
    return false;
  }
}


function isOnPlanet(){
  let d = dist(mouseX, mouseY, planet.x, planet.y);
  if (d < planet.x/2){
  return true;
}
 else {
return false;
}
}


// if mouse clicked move to other state

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
    state = `pageFour`;
  }
}
