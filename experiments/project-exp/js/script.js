let roseImg;
let userImg;

// How many lines projecting from the center in a circle?
let lines = 140;
// A base time value we'll increase to make the lines wave
let baseT = 0;

let numLines = 200;
let length = 300;


function preload(){
  roseImg = loadImage("assets/images/focus.gif");
  //userImg =  loadImage("assets/images/user-pic.png");
}



function setup(){
  createCanvas(700, 850);
}




function draw(){
background(0);
imageMode(CENTER);
//image(roseImg, width/2, height/2);

for (let i = 0; i < numLines; i++) {

  numLines = numLines + 1;

  stroke(255);
  line(width/2, height/2, numLines, 0);
  }
