
"use strict";

let handImg;
let shadowImg;

let handPosition ={
  x: 810,
  y: 665,
  place: 90,
  alpha:100
}

let circle1 = {
  x: undefined,
  y: undefined,
  size:90,
  speed:2,
  vx:0,
  vy:0,
  alpha: 200,
}

let circle2 = {
  x: undefined,
  y: undefined,
  size: 40,
  speed:1.5,
  vx:0,
  vy:0,
  alpha: 200,
}

let circle3 = {
  x: undefined,
  y: undefined,
  size:110,
  speed:2,
  vx:0,
  vy:0,
  alpha: 190,
}




function preload() {
  shadowImg = loadImage("assets/images/shadow.gif");
  handImg =  loadImage("assets/images/handgre.png");
}



function setup() {
  createCanvas(1900, 1300);



}

function draw() {

//isNoloop();
//CallAnimation();
//handAnimation();
//isHandonHand();

background(0);
imageMode(CENTER);
tint(100, 210, 210);
image(shadowImg, width/2, height/2, 800, 590);
tint(255, 100); // how to apply a tint to a single code?
image(handImg, mouseX, mouseY, 140, 190);

//hand postion point
noStroke();
fill(200, handPosition.alpha);
ellipse(handPosition.x, handPosition.y, handPosition.place);
}
//touch animation
// function CallAnimation(){
//   if (isHandonHand()){
//   handAnimation();
//   }
// }

    //function handAnimation(){
     // let d = dist(mouseX, mouseY, handPosition.x, handPosition.y);
     // if (d < handPosition.place/5){
     //if (mouseX > handPosition.place/5){
    noStroke();
    circle1.size += 1;
    circle1.size = constrain(circle1.size, 20, 210);
    fill(39, 169, 179, circle1.alpha);
    circle1.alpha -= circle1.speed;
    ellipse(handPosition.x, handPosition.y, circle1.size)

    circle2.size += 0.9;
    circle2.size = constrain(circle2.size, 30, 220);
    fill(39, 180, 179, circle2.alpha);
    circle2.alpha -= circle2.speed;
    ellipse(handPosition.x, handPosition.y, circle2.size);

    circle3.size += 1.2;
    circle3.size = constrain(circle3.size, 30, 220);
    fill(39, 169, 179, circle3.alpha);
    circle3.alpha -= circle3.speed;
    ellipse(handPosition.x, handPosition.y, circle3.size);
  



//check if it's not looping
// function isNoloop(){
//   if (isHandonHand()) {
//     noLoop();
//   }
// }

//checks if hand is on hand
 // function isHandonHand(){
 //   let d = dist(mouseX, mouseY, handPosition.x, handPosition.y);
 //   if (d < handPosition.place/5){
 //     return true;
 //   }
 //  else {
 //    return false;
 //  }
 // }
