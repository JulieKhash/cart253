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


let handPosition ={
  x: 810,
  y: 665,
  place: 125,
  alpha:100
}

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
}

let mousePointer ={
  x: undefined,
  y: undefined,
  size: 100
}

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




let offset = 0; //for image control
let offset2 = 0;
let easing = 0.05;
let state = `title`

function preload() {
crescentImg = loadImage("assets/images/moon.gif");
backgroundImg = loadImage("assets/images/headshadow.gif");
shadowImg = loadImage("assets/images/shadow.gif");
handImg =  loadImage("assets/images/handgre.png");
shadowShotImg =loadImage("assets/images/shadowGlow.png");
focusImg = loadImage("assets/images/focus.gif");
}



function setup() {
createCanvas(1900, 1300);


}


function draw() {
  let col = random(0, 220);
  background(0);

  if (state === `title`){
    titlePage();
  }
  else if (state === `pageTwo`){
    pageTwo();
  }
  else if (state === `pageThree`){

  }


}
// PAGE ONE FUNCTIONS
//Dispays first page of the program
function titlePage(){
  text1();
  titleText()
  titleImages();
}

  function titleText(){
  let col = random(0, 220);
  textFont(`Verdana`);
  textSize(70);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`SECRET SIGNS`, width/2, height/4.5);
}

  function text1() {
  let col = random(0, 220);
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Press Enter`, width/2, height/3+400);

}

//displays title images
function titleImages(){
  let col = random(0, 220);

  imageMode(CENTER);
  tint(col, 200, 200, 150);

  image(backgroundImg, width/2, height/2);
  image(crescentImg, width/2, height/3+210, 500, 276);
}


//PAGE TWO FUNCTIONS
function pageTwo(){

  handposition();
  pageTwoImages();
  text2();
  handAnimation();
  isHandonHand();

}

function pageTwoImages(){
imageMode(CENTER);
tint(100, 210, 210);
image(shadowImg, width/2, height/2, 800, 590);
tint(255, 100);
image(handImg, mouseX, mouseY, 140, 190);
}

//hand position point
function handposition(){
noStroke();
fill(200, handPosition.alpha);
ellipse(handPosition.x, handPosition.y, handPosition.place);
}

  function handAnimation(){
  if (isHandonHand()) {

  let glitch = random(0, 255);
  tint(100, 210, 210, 255);
  image(shadowShotImg, width/2, height/2, 800, 590);

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

  circle6.size += 10;
  circle6.size = constrain(circle6.size, 10, 500);
  fill(glitch, circle6.alpha);
  circle6.alpha -= circle6.speed;
  ellipse(handPosition.x, handPosition.y, circle6.size)
  circle6.alpha += circle6.speed;

  text3();
  tint(glitch);
  image(handImg, mouseX, mouseY, 140, 190);

}
}


//check if it's not looping
function stopLoop(){
if (isHandonHand()) {
  noLoop();
}
}

//checks if hand is on hand
function isHandonHand(){
 let d = dist(mouseX, mouseY, handPosition.x, handPosition.y);
 if (d < handPosition.place/5){
   return true;
 }
else {
  return false;
}
}

function text2(){
 let glitch = random(0, 255);
 textFont(`Verdana`);
 textSize(25);
 fill(glitch);
 text(`Touch my hand`, width/2-150, height/2+10);
}

function text3(){
 let glitch = random(0, 255);
 if (circle6.size == 500){
 textFont(`Verdana`);
 textSize(20);
 fill(glitch);
 text(`Click on It`, handPosition.x-50, handPosition.y -150);
}
}

//PAGE THREE FUNCTIONS





































//change page if pressed ENTER
function keyPressed(){
  if (keyCode === ENTER && state === `title`){
    state = `pageTwo`
  }
}

// function mousePressed()
