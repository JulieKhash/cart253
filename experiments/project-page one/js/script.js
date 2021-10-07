
"use strict";

let handImg;
let handIndexImg;
let shadowImg;
let shadowShotImg;


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


function preload() {
  shadowImg = loadImage("assets/images/shadow.gif");
  handImg =  loadImage("assets/images/handgre.png");
  shadowShotImg =loadImage("assets/images/shadowGlow.png");
}



function setup() {
  createCanvas(1900, 1300);
  //hand postion point
  noStroke();
  fill(200, handPosition.alpha);
  ellipse(handPosition.x, handPosition.y, handPosition.place);

}

function draw() {
background(0);

imageMode(CENTER);
tint(100, 210, 210);
image(shadowImg, width/2, height/2, 800, 590);
tint(255, 100); // how to apply a tint to a single code?
image(handImg, mouseX, mouseY, 140, 190);

text2();
handAnimation();
isHandonHand();


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

// //checks if hand is on hand
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
   text(`Touch my hand`, width/2-220, height/2+10);
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
