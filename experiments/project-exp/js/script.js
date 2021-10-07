let roseImg;
let userImg;
let fireImg;


let userHand = {
  x: undefined,
  y: undefined,
  sizeX: 140,
  sizeY: 190
}

let handPosition ={
  x: undefined,
  y: undefined,
  size: 100,
  alpha:100
}
circle1 = {
  x: undefined,
  y: undefined,
  size:90,
  speed:2,
  vx:0,
  vy:0,
  alpha: 200,
}

circle2 = {
  x: undefined,
  y: undefined,
  size: 40,
  speed:1.5,
  vx:0,
  vy:0,
  alpha: 200,
}

circle3 = {
  x: undefined,
  y: undefined,
  size:110,
  speed:2,
  vx:0,
  vy:0,
  alpha: 190,
}






function preload(){
  roseImg = loadImage("assets/images/shadow.gif");
  userImg =  loadImage("assets/images/handgre.png");
  //fireImg = loadImage("assets/images/fire.gif");
}



function setup(){
  createCanvas(1900, 1300);

  x = width/3+190;
  y = height/2;

}


function draw(){
background(0);
//isNoloop();
// isHandonHand();
// handAnimation();
//handPositionDisplay();
//display();



imageMode(CENTER);
//image(fireImg, width/5, height/5, 500, 640);
// tint(100, 210, 210);
// image(roseImg, width/2, height/2, 800, 590);
// tint(255, 100); // how to apply a tint to a single code?
// image(userImg, mouseX, mouseY, 140, 190);


let col = random(0, 220);


textFont(`Verdana`);
textSize(50);
fill(col);
textAlign(CENTER, CENTER);
text(`SECRET SIGNS`, width/2, height/5);

textFont(`Verdana`);
textSize(30);
fill(col);
text(`Touch my hand`, width-400, height-400);

}

// x = width/3+190;
// y = height/2;
//noStroke();
fill(255, handPosition.alpha);
ellipse(x, y, handPosition.size);

let d = dist(mouseX, mouseY, x, y);
if (d < handPosition.size/5){
    noLoop();

    noStroke();
    circle1.size += 1;
    circle1.size = constrain(circle1.size, 20, 210);
    fill(39, 169, 179, circle1.alpha);
    circle1.alpha -= circle1.speed;
    ellipse(x, y, circle1.size)

    circle2.size += 0.9;
    circle2.size = constrain(circle2.size, 30, 220);
    fill(39, 180, 179, circle2.alpha);
    circle2.alpha -= circle2.speed;
    ellipse(x, y, circle2.size);

    circle3.size += 1.2;
    circle3.size = constrain(circle3.size, 30, 220);
    fill(39, 169, 179, circle3.alpha);
    circle3.alpha -= circle3.speed;
    ellipse(x, y, circle3.size);
  }



//check if it's not looping
// function isNoloop(){
//   if (isHandonHand()) {
//     noLoop();
//   }
// }


//checks if hand is on hand
//  function isHandonHand(){
//    x = width/3+190;
//    y = height/2;
//    let d = dist(mouseX, mouseY, x, y);
//    if (d < handPosition.size/5){
//      return true;
//    }
//   else {
//     return false;
//   }
//  }
// //touch animation
// function handAnimation(){
//   x = width/3+190;
//   y = height/2;
//
//   if (isHandonHand()){
//     noStroke();
//     circle1.size += 1;
//     circle1.size = constrain(circle1.size, 20, 210);
//     fill(39, 169, 179, circle1.alpha);
//     circle1.alpha -= circle1.speed;
//     ellipse(x, y, circle1.size)
//
//     circle2.size += 0.9;
//     circle2.size = constrain(circle2.size, 30, 220);
//     fill(39, 180, 179, circle2.alpha);
//     circle2.alpha -= circle2.speed;
//     ellipse(x, y, circle2.size);
//
//     circle3.size += 1.2;
//     circle3.size = constrain(circle3.size, 30, 220);
//     fill(39, 169, 179, circle3.alpha);
//     circle3.alpha -= circle3.speed;
//     ellipse(x, y, circle3.size);
//   }
// }




// function handPositionDisplay(){
// x = width/3+190;
// y = height/2;
// noStroke();
// fill(255, handPosition.alpha);
// ellipse(x, y, handPosition.size);
// }
