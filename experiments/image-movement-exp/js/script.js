let userImg;
let chasedImg;
let heartImg;


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

let xoff = 0;


function preload(){
  userImg = loadImage("assets/images/user.png");
  chasedImg = loadImage("assets/images/chased.png");
  heartImg = loadImage("assets/images/love.png");

}


function setup(){
  createCanvas(windowWidth, windowHeight);

  // objects' positions on canvas
  user.x = width/3;
  user.y = height/3;

  chased.x = width/2 * 5;
  chased.y =  height/2 ;
}

function draw(){
  background(0);


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


  let change1 = random();
  if (change1 < 0.04) {
  chased.vx = random(-chased.speed, chased.speed);
  chased.vy = random(-chased.speed, chased.speed);
}


  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  chased.x = chased.x + chased.vx;
  chased.y = chased.y + chased.vy;


  let x = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.009;

  //check if overlap
  let d = dist(user.x, user.y, x, chased.y);
  if (d < user.sizeY/4 + chased.sizeY/4){
    image(heartImg, user.x, user.y +10);
    noLoop();
  }




  //fill(255, 0, 0);
  image(chasedImg, x, chased.y,  chased.sizeX, chased.sizeY);
  //fill(0, 255, 0);
  image(userImg, user.x, user.y, user.sizeX, user.sizeY);
}
