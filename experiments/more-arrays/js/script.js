

 "use strict";
//
// let fortunes = [
//   `To be or not to be?`,
//   `The end is near wake up`,
//   `Shades of mother's lies`,
//   `This chimera is real`,
//   `Lethal submission `,
// ];
//
// let  currentIndex = 1;
//
// function setup() {
//   createCanvas(600, 600);
//   textAlign(CENTER, CENTER);
//   textSize(30);
//   fill(255);
//
// }
//
//
// function draw() {
//   background(0);
//   text(fortunes[currentIndex], width/2, height/2);
// }
//
// function mousePressed() {
//   currentIndex = currentIndex + 1;
//
//   if (currentIndex === fortunes.length){
//     currentIndex = 0;
//   }
//
// }
///////////////////////////////////////////////////////////
let circle = {
  x: 0,
  y: 0,
  size: 100,
  trail: [],
  trailSize: 20,
}


function setup(){
  createCanvas(600, 600);
}



function draw(){
  background(random(0, 40));

  circle.x = mouseX;
  circle.y = mouseY;

  for(let i = 0; i < circle.trail.length; i++){
    let position = circle.trail[i];
    ellipse(position.x, position.y, circle.size);
  }

  ellipse(circle.x, circle.y, circle.size);

  let newTrailPosition ={
    x: circle.x,
    y: circle.y,
  };

  circle.trail.push(newTrailPosition);
  if (circle.trail.length > circle.trailSize){
     circle.trail.shift();
  }
}
