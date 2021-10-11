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

function preload(){
  focusImg = loadImage("assets/images/focus.gif");
}

function setup(){
  createCanvas(1900, 1300);

}


function draw(){
  let bg = random (0, 23);
  background(bg);

  aimposition();
  eyeImage();
  controlImage();
  showFocus();
  displayAim();
  text4()
  showClicktext()
}


//aim position
function aimposition(){
stroke(0);
noFill();
ellipse(aimPosition.x, aimPosition.y, aimPosition.place);
}

  //displays eye image at the center
  function eyeImage(){
  imageMode(CENTER);
  //tint(255, 255);
  image(focusImg, width/2, height/2,600, 450);
  //pointer
  stroke(255, 0);
  line(offset-30, offset2, offset+30, offset2);
  line(offset, offset2+30, offset, offset2-30);
  stroke(255,0);
  ellipse(offset, offset2, mousePointer.size); //mouse pointer
}

  //controls second image with mouse

  function controlImage(){

  let dx = mouseX - focusImg.width/2 - offset;
  let dy = mouseY - focusImg.height/2 - offset2;
  offset += dx * easing;
  offset2 += dy * easing;
  push();
  tint(255, 150); //
  image(focusImg, offset, offset2, 600, 450);
  pop();
}


  //shows focus animation if the aimed
  function showFocus(){
    if (checkAim()){
        focusAnimation();
    }
  }

  //checks the distances between aim and image positioning
  function checkAim(){
  let d = dist(offset, offset2, aimPosition.x, aimPosition.y);
  if (d < aimPosition.place/20){
    return true;
  }
  else {
    return false
  }
}

  //red aim position
  function displayAim(){
  stroke(255, 0, 0);
  strokeWeight(2);
  line(aimPosition.x-30, aimPosition.y, aimPosition.x+30,aimPosition.y);
  line(aimPosition.x, aimPosition.y+30, aimPosition.x, aimPosition.y-30);
}

function text4(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(40);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`Focus your Mind`, width/2+200, height/2+300);
}

function focusAnimation(){
  strokeGlitch = random(0,255);
 //1
 ellipse1.size += ellipse1.speed;
 ellipse1.size = constrain(ellipse1.size, 50, width+150);
 ellipse1.strokeSize -= 0.05;
 ellipse1.strokeSize = constrain(ellipse1.strokeSize, 0.03, 10);
 stroke(strokeGlitch);
 strokeWeight(ellipse1.strokeSize);
 noFill();
 ellipse(ellipse1.x, ellipse1.y, ellipse1.size);
 //2
 ellipse2.size += ellipse2.speed;
 ellipse2.size = constrain(ellipse2.size, 20, width+100);
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
 ellipse4.size = constrain(ellipse4.size, 10, width-50);
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

function text5(){
  let col = random(0, 220);
  noStroke();
  textFont(`Verdana`);
  textSize(25);
  fill(col);
  textAlign(CENTER, CENTER);
  text(`click`, ellipse6.x, ellipse6.y-60);
}


//
//if (circle6.size === 300){
//mouseClick text
