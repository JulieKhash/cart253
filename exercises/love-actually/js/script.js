let userImg;
let encounterImg;


let chased = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
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
  speed: 4
}

let xoff = 0;

function preload(){
  userImg = loadImage("assets/images/user-pic.png")
  encounterImg = loadImage("assets/images/encounter.png")
}



function setup(){
  createCanvas(windowWidth, windowHeight);

  // objects' positions on canvas
  user.x = width/3;
  user.y = height/3;

  chased.x = width/2 * 5;
  chased.y =  height/2 ;

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


  // makes the chased jittery (tries to escape user and encounter)
  let change1 = random();
  if (change1 < 0.04) {
  chased.vx = random(-chased.speed, chased.speed);
  chased.vy = random(-chased.speed, chased.speed);
}
// makes the chased move smoother horizontally
  let x = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.009;

// makes the encounter jittery (trying to follow the chased)
let change2 = random();
if (change2 < 0.1) {
encounter.vx = random(-encounter.speed, encounter.speed);
encounter.vy = random(-encounter.speed, encounter.speed);
}
// let y = map(noise(xoff2), 0, 1, 0, width);
// xoff2 += 0.01;

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
  ellipse(x, chased.y, chased.size);
  fill(0, 255, 0);
  image(userImg, user.x, user.y, 300, 300);
  fill(0, 0, 255);
  image(encounterImg,  encounter.y, encounter.size, 300, 350);
}
