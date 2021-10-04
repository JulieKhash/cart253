let circleA = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}
let userB = {
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
  speed: 2
}



function setup(){
  createCanvas(windowWidth, windowHeight);

  // Cicrles' positions on canvas
  userB.x = width/3;
  userB.y = height/3;

  circleA.x = width/2;
  circleA.y =  height/2;

  circleC.x = width/4;
  circleC.y = height/4

  // makes user's circle move accoring to its speed
  userB.vx = userB.vx + userB.speed;
  userB.vy = userB.vy + userB.speed;

}


function draw(){
  background(0);

  // control user's circle with mouseX and mouseY
  if (mouseX < userB.x) {
    userB.vx = -userB.speed;
  }
  else {
    userB.vx = userB.speed;
  }

  if (mouseY < userB.y) {
    userB.vy = -userB.speed;
  }
  else {
    userB.vy = userB.speed;
  }

  // makes circle A jittery (tries to escape user)
  let change1 = random();
  if (change1 < 0.03) {
  circleA.vx = random(-circleA.speed, circleA.speed);
  circleA.vy = random(-circleA.speed, circleA.speed);
}

let change2 = random();
if (change2 < 0.03) {
circleC.vx = random(-circleC.speed, circleC.speed);
circleC.vy = random(-circleC.speed, circleC.speed);
}

  //moves the user's circle
  userB.x = userB.x + userB.vx;
  userB.y = userB.y + userB.vy;

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
  rect(userB.x, userB.y, userB.size);
  fill(0, 0, 255);
  ellipse(circleC.x, circleC.y, circleC.size);
}
