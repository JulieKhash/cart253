let circleA = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 0
}
let circleB = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 0
}
let circleC = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 0
}



function setup(){
  createCanvas(windowWidth, windowHeight);


}


function draw(){
  background(0);

  fill(255, 0, 0);
  ellipse(circleA.x, circleA.y, circleA.size);
  fill(0, 255, 0);
  ellipse(mouseX, mouseY, circleB.size);
  fill(0, 0, 255);
  ellipse(circle.x, circle.y, circle.size);
}
