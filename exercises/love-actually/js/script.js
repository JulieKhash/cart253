let circleA = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}
let circleB = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}
let circleC = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 1
}



function setup(){
  createCanvas(windowWidth, windowHeight);

  // Cicrles' positions on canvas
  circleB.x = width/3;
  circleB.y = height/3;

  circleA.x = width/2;
  circleA.y =  height/2;

  circleC.x = width/4;
  circleC.y = height/4

  // makes user's circle move accoring to its speed
  circleB.vx = circleB.vx + circleB.speed;
  circleB.vy = circleB.vy + circleB.speed;

}


function draw(){
  background(0);

  // control user's circle with mouseX and mouseY
  if (mouseX < circleB.x) {
    circleB.vx = -circleB.speed;
  }
  else {
    circleB.vx = circleB.speed;
  }

  if (mouseY < circleB.y) {
    circleB.vy = -circleB.speed;
  }
  else {
    circleB.vy = circleB.speed;
  }

  // makes circle A jittery (tries to escape user)
  let change = random();
  if (change < 0.03) {
  circleA.vx = random(-circleA.speed, circleA.speed);
  circleA.vy = random(-circleA.speed, circleA.speed);
}

  circleC.vx = circleB.vx + -circleC.speed;
  circleC.vy = circleB.vy + -circleC.speed;



  //moves the user's circle
  circleB.x = circleB.x + circleB.vx;
  circleB.y = circleB.y + circleB.vy;

  //moves circle A
  circleA.x = circleA.x + circleA.vx;
  circleA.y = circleA.y + circleA.vy;

  // move circle C
  circleC.x = circleC.x + circleC.vx;
  circleC.y = circleC.y + circleC.vy;



  //display circles
  fill(255, 0, 0);
  ellipse(circleA.x, circleA.y, circleA.size);
  fill(0, 255, 0);
  ellipse(circleB.x, circleB.y, circleB.size);
  fill(0, 0, 255);
  ellipse(circleC.x, circleC.y, circleC.size);
}
