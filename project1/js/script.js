/**
Project 1 - Secret Signs
Julie Khashimova

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let backgroundImg;
let crescentImg;

let state = `title`

function preload() {
crescentImg = loadImage("assets/images/moon.gif");
backgroundImg = loadImage("assets/images/headshadow.gif");
}



function setup() {
createCanvas(1900, 1300);
}


function draw() {
  let col = random(0, 220);
  background(0);

  titlePage();



}
//Dispays first page of the program
function titlePage(){
  text2();
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

  function text2() {
  let col = random(0, 220);
  textFont(`Verdana`);
  textSize(20);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Press any key`, width/2, height/3+400);

}

//displays title images
function titleImages(){
  let col = random(0, 220);

  imageMode(CENTER);
  tint(col, 200, 200, 150);

  image(backgroundImg, width/2, height/2);
  image(crescentImg, width/2, height/3+210, 500, 276);
}
