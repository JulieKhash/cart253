let userImg;
let chasedImg;
let heartImg;
let ballroomImg;
let encounterImg;

let chased = {
  x: undefined,
  y: undefined,
  sizeX: 250,
  sizeY: 230,
  vx: 0,
  vy: 0,
  speed: 3,
  threshold: 100,
}
let user = {
  x: undefined,
  y: undefined,
  sizeX: 200,
  sizeY: 200,
  vx: 0,
  vy: 0,
  speed: 2
}
let encounter = {
  x: undefined,
  y: undefined,
  sizeX: 200,
  sizeY: 250,
  vx: 0,
  vy: 0,
  speed: 4
}

let xoff = 0;


function preload(){
  userImg = loadImage("assets/images/user.png");
  chasedImg = loadImage("assets/images/chased.png");
  encounterImg = loadImage("assets/images/encounter.png");
  heartImg = loadImage("assets/images/love.png");
  ballroomImg = loadImage("assets/images/ballroom.png");

}


function setup(){
  createCanvas(windowWidth, windowHeight);

  // objects' positions on canvas
  user.x = width/3;
  user.y = height/3;

  chased.x = width/2 * 5;
  chased.y =  height/2 ;

  encounter.x = width/3;
  encounter.y = height/3
}

function draw(){
  background(0);
  imageMode(CENTER);
  image(ballroomImg, width/2, height/2, 2600, 2600);


// control user's vertical movement with keyboard arrows
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

//make the chased move to random directions
  let change1 = random();
  if (change1 < 0.04) {
  chased.vx = random(-chased.speed, chased.speed);
  chased.vy = random(-chased.speed, chased.speed);
}
//make the encounter move to random directions
let change2 = random();
if (change2 < 0.07) {
encounter.vx = random(-encounter.speed, encounter.speed);
encounter.vy = random(-encounter.speed, encounter.speed);
  }

// make the characters move
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  chased.x = chased.x + chased.vx;
  chased.y = chased.y + chased.vy;

  encounter.x = encounter.x + encounter.vx;
  encounter.y = encounter.y + encounter.vy;





  let x = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.009;

  //check if overlap
  let d = dist(user.x, user.y, x, chased.y);
  if (d < user.sizeY/4 + chased.sizeY/4){
    image(heartImg, user.x, user.y +10);
    noLoop();
  }


  //Display images


  image(chasedImg, x, chased.y,  chased.sizeX, chased.sizeY);
  image(userImg, user.x, user.y, user.sizeX, user.sizeY);
  image(encounterImg, encounter.x, encounter.y, encounter.sizeX, encounter.sizeY);
}
