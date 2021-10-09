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

let circle1 = {
  x: 950,
  y: 650,

  size: 50,
  speed: 9,
  strokeSize: 10
}
let circle2 = {
  x: 950,
  y: 650,
  size: 40,
  speed: 8,
 strokeSize: 10
}
let circle3 = {
  x: 950,
  y: 650,

  size: 30,
  speed: 7,
 strokeSize: 10
}
let circle4 = {
  x: 950,
  y: 650,

  size: 20,
  speed: 6,
 strokeSize: 10
}
let circle5 = {
  x: 950,
  y: 650,

  size: 10,
  speed: 4,
 strokeSize: 10
}
let circle6 = {
  x: 950,
  y: 650,

  size: 5,
  speed: 3,
  strokeSize: 10
}




function preload(){
  focusImg = loadImage("assets/images/focus.gif");
}


function setup(){
  createCanvas(1900, 1300);


}



function draw(){
  let col = random(0, 220);
  let bg = random (0, 23);
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
  //loopAnimation()

  //pointer
  stroke(255, 0);
  line(offset-30, offset2, offset+30, offset2);
  line(offset, offset2+30, offset, offset2-30);
  stroke(255,0);
  ellipse(offset, offset2, mousePointer.size); //mouse pointer

  //check the distances
  let d = dist(offset, offset2, aimPosition.x, aimPosition.y);
  if (d < aimPosition.place/20){
  loopAnimation();

  }

  //red aim pos
  stroke(255, 0, 0);
  strokeWeight(2);
  line(aimPosition.x-30, aimPosition.y, aimPosition.x+30,aimPosition.y);
  line(aimPosition.x, aimPosition.y+30, aimPosition.x, aimPosition.y-30);

  noStroke();
  textFont(`Verdana`);
  textSize(40);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Focus your Mind`, width/2+200, height/2+300);


}

function loopAnimation(){
  strokeGlitch = random(0,255);
 //1
 circle1.size += circle1.speed;
 circle1.size = constrain(circle1.size, 50, width+150);
 circle1.strokeSize -= 0.05;
 circle1.strokeSize = constrain(circle1.strokeSize, 0.03, 10);

 stroke(strokeGlitch);
 strokeWeight(circle1.strokeSize);
 noFill();
 ellipse(circle1.x, circle1.y, circle1.size);

 //2
 circle2.size += circle2.speed;
 circle2.size = constrain(circle2.size, 20, width+100);
 circle2.strokeSize -= 0.05;
 circle2.strokeSize = constrain(circle2.strokeSize, 0.04, 10);

 stroke(strokeGlitch);
 strokeWeight(circle2.strokeSize);
 noFill();
 ellipse(circle2.x, circle2.y, circle2.size);
 //3
 circle3.size += circle3.speed;
 circle3.size = constrain(circle3.size, 10, width);
 circle3.strokeSize -= 0.04;
 circle3.strokeSize = constrain(circle3.strokeSize, 0.05, 10);

 stroke(strokeGlitch);
 strokeWeight(circle3.strokeSize);
 noFill();
 ellipse(circle3.x, circle3.y, circle3.size);
 //4
 circle4.size += circle4.speed;
 circle4.size = constrain(circle4.size, 10, width-50);
 circle4.strokeSize -= 0.03;
 circle4.strokeSize = constrain(circle4.strokeSize, 0.03, 10);

 stroke(strokeGlitch);
 strokeWeight(circle4.strokeSize);
 noFill();
 ellipse(circle4.x, circle4.y, circle4.size);
//5
 circle5.size += circle5.speed;
 circle5.size = constrain(circle5.size, 5, 600);
 circle5.strokeSize -= 0.02;
 circle5.strokeSize = constrain(circle5.strokeSize, 2, 10);

 stroke(strokeGlitch);
 strokeWeight(circle5.strokeSize);
 noFill();
 ellipse(circle5.x, circle5.y, circle5.size);

 //5
  circle6.size += circle6.speed;
  circle6.size = constrain(circle5.size, 5, 300);
  //circle6.strokeSize -= 0.01;
  circle6.strokeSize = constrain(circle6.strokeSize, 0.03, 9);

  stroke(strokeGlitch);
  strokeWeight(circle6.strokeSize);
  noFill();
  ellipse(circle6.x, circle6.y, circle6.size);


}

//
//if (circle6.size === 300){
//mouseClick text





// create 2 circles, one attached to mouse the other is a focus point\
//stop the program and make animation
//when both distances match make ripple animation then move to other page
