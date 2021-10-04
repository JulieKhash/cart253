let chased = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}
let user = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}
let encounter = {
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
  user.x = width/3;
  user.y = height/3;

  chased.x = width/2;
  chased.y =  height/2;

  encounter.x = width/4;
  encounter.y = height/4

  // makes user's circle move accoring to its speed
  user.vx = user.vx + user.speed;
  user.vy = user.vy + user.speed;

}


function draw(){
  background(0);

  // control user's  horizontal movement with keyboard arrows
  if (keyIsDown (LEFT_ARROW)) {
    user.vx = -user.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    user.vx = user.speed;
  }
  else {
    user.vx = 0;
  }
// control user's vertical movement with keyboard arrows
  if (keyIsDown(UP_ARROW)){
    user.vy = -user.speed;
  }
  else if (keyIsDown(DOWN_ARROW)){
    user.vy = user.speed;
  }
  else {
    user.vy = 0;
  }


  // makes circle A jittery (tries to escape user)
  let change1 = random();
  if (change1 < 0.04) {
  chased.vx = random(-chased.speed, chased.speed);
  chased.vy = random(-chased.speed, chased.speed);
}

let change2 = random();
if (change2 < 0.1) {
encounter.vx = random(-encounter.speed, encounter.speed);
encounter.vy = random(-encounter.speed, encounter.speed);
}

  //moves the user's circle
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  //moves circle A
  chased.x = chased.x + chased.vx;
  chased.y = chased.y + chased.vy;

  // move circle C
  encounter.x = encounter.x + encounter.vx;
  encounter.y = encounter.y + encounter.vy;

  //display circles
  fill(255, 0, 0);
  ellipse(chased.x, chased.y, chased.size);
  fill(0, 255, 0);
  rect(user.x, user.y, user.size);
  fill(0, 0, 255);
  ellipse(encounter.x,  encounter.y, encounter.size);
}
