let focusImg;
let offset = 0;
let offset2 = 0;
let easing = 0.05;


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

function preload(){
  focusImg = loadImage("assets/images/focus.gif");
}


function setup(){
  createCanvas(1900, 1300);
  //
  // x = width/2;
  // y = height/2
  // ellipse(x, y, aimPosition.place);



}



function draw(){
  let col = random(0, 220);
  let bg = random (150, 230);
  background(bg);




  //circle aim position
  stroke(0);
  noFill();
  ellipse(aimPosition.x, aimPosition.y, aimPosition.place);



  imageMode(CENTER);
  tint(255, 255);
  image(focusImg, width/2, height/2,600, 450);
  let dx = mouseX - focusImg.width/2 - offset;
  let dy = mouseY - focusImg.height/2 - offset2;
  offset += dx * easing;
  offset2 += dy * easing;
  tint(255, 150);
  image(focusImg, offset, offset2, 600, 450);

  //pointer
  stroke(255, 0);
  line(offset-30, offset2, offset+30, offset2);
  line(offset, offset2+30, offset, offset2-30);
  stroke(255,0);
  ellipse(offset, offset2, mousePointer.size); //mouse pointer

  //check the distances
  let d = dist(offset, offset2, aimPosition.x, aimPosition.y);
  if (d < aimPosition.place/20){
    noLoop();
  }

  //red aim pos
  stroke(255, 0, 0);
  line(aimPosition.x-30, aimPosition.y, aimPosition.x+30,aimPosition.y);
  line(aimPosition.x, aimPosition.y+30, aimPosition.x, aimPosition.y-30);

  noStroke();
  textFont(`Verdana`);
  textSize(40);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Focus your Mind`, width/2+200, height/2+300);
}






// create 2 circles, one attached to mouse the other is a focus point\
//stop the program and make animation
//when both distances match make ripple animation then move to other page
