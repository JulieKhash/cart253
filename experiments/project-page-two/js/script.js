let focusImg;
let offset = 0;
let easing = 0.05;

function preload(){
  focusImg = loadImage("assets/images/focus.gif");
}


function setup(){
  createCanvas(1900, 1300);
}



function draw(){
  let col = random(0, 220);
  let bg = random (200, 230);
  background(bg);

  imageMode(CENTER);
  tint(255, 255);
  image(focusImg, width/2, height/2,600, 450);
  let dx = mouseX - focusImg.width/2 - offset;
  offset += dx * easing;
  tint(255, 150);
  image(focusImg, mouseX, height/2,600, 450);



  textFont(`Verdana`);
  textSize(40);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Focus your Mind`, width/2+200, height/2+300);
}






// create 2 circles, one attached to mouse the other is a focus point\
//stop the program and make animation
//when both distances match make ripple animation then move to other page
