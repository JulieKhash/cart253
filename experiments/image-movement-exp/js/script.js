let userImg;
let chasedImg;
let heartImg;
let brokenImg;
let ballroomImg;
let encounterImg;
let maskImg;

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
let state = `title`


function preload(){
  userImg = loadImage("assets/images/user.png");
  chasedImg = loadImage("assets/images/chased.png");
  encounterImg = loadImage("assets/images/encounter.png");
  heartImg = loadImage("assets/images/love.png");
  brokenImg = loadImage("assets/images/broken.png");
  ballroomImg = loadImage("assets/images/ballroom.png");
  maskImg = loadImage("assets/images/mask.png");

}


function setup(){
  createCanvas(windowWidth, windowHeight);

  // objects' positions on canvas
  user.x = width/3;
  user.y = height/3-200;

  chased.x = width/2 * 5;
  chased.y =  height/2 ;

  encounter.x = width/3-10;
  encounter.y = height/3*2;


}

function draw(){
  background(0);
  imageMode(CENTER);
  image(ballroomImg, width/2, height/2, 2600, 2600);


  if (state === `title`) {
    title();
  }
  else if (state === `simulation`){
    simulation();
  }
  else if (state === `romance`){
    romance();
  }
  // else if (state === `lost`){
  //   lost();
  // }
  // else if (state === `ballisOver`){
  //   ballisOver();
  // }

}

function title(){
  push();
  textSize(100);
  fill(255,0, 0);
  textFont(`Sansita Swashed`);
  textAlign(CENTER, CENTER);
  text("MASQUERADE AFFAIR", width/2, height/3);
  textSize(50);
  fill(0, 60, 60);
  text("Catch Your Romance", width/2, height/3+120);
  textSize(50);
  fill(200, 200, 200);
  text("press any key", width/2, height-100);
  image(maskImg, width/2+50, height/3-50, 400, 400);
  pop();
}


  function romance(){
    push();
    textSize(70);
    fill(255,0, 0);
    textFont(`Sansita Swashed`);
    text(`I’m not going far my love. I’ll always be here. Just an inch away. I promise`, user.x, user.y -200);
    pop();
  }


//   function lost(){
//   if ()
//   text(`Break my heart. Break it a thousand times if you like. It was only ever yours to break`)
//
// }
//
// function ballisOver(){
//   text(`You’re my dearest punishment`)
// }

  function simulation(){
    userControl();
    randomDirection();
    move();
    checkuserOVerlap();
    checkencounterOverlap();
    chasedOffscreen();
    display();
  }

  function userControl(){
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
}

  function randomDirection(){
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
}

  function move(){
// make the characters move
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  chased.x = chased.x + chased.vx;
  chased.y = chased.y + chased.vy;

  encounter.x = encounter.x + encounter.vx;
  encounter.y = encounter.y + encounter.vy;
}


  function isuserOverlap(){
    let d = dist(user.x, user.y, x, chased.y);
    if (d < user.sizeY/4 + chased.sizeY/4){
      return true;
  }
  else {
    return false;
  }
}

    function checkuserOVerlap(){
      let x = map(noise(xoff), 0, 1, 0, width);
      xoff += 0.0009;
    //check if overlap user overlaps with chased
    let d = dist(user.x, user.y, x, chased.y);
    if (d < user.sizeY/4 + chased.sizeY/4){
    state = `romance`;
    tint(0,30, 30);
    image(brokenImg, encounter.x, encounter.y-25);
    image(encounterImg, encounter.x, encounter.y, encounter.sizeX, encounter.sizeY);
    tint(255, 0, 0);
    image(userImg, user.x, user.y, user.sizeX, user.sizeY);
    image(heartImg, user.x, user.y +10);
    encounter.sizeX = 0.1;
    encounter.sizeY = 0.1;
    noLoop();
  }
}


  function checkencounterOverlap(){
    let x = map(noise(xoff), 0, 1, 0, width);
    xoff += 0.0009;
  let dis = dist(encounter.x, encounter.y, x, chased.y);
  if (dis < encounter.sizeY/4 + chased.sizeY/4){
    tint(0, 60, 60);
    image(heartImg, encounter.x, encounter.y+10);
    image(brokenImg, user.x, user.y-15);
    noLoop();
  }
}

  function chasedOffscreen(){
    let x = map(noise(xoff), 0, 1, 0, width);
    xoff += 0.0009;
  if (x > width+100 || x < 0, chased.y > height+100 || chased.y < 0){
    tint(0, 60, 60)
    image(brokenImg, user.x, user.y-15);
    image(brokenImg, encounter.x, encounter.y-25);
    image(ballroomImg, width/2, height/2, 2600, 2600);
    noLoop();
  }
}

  // displays images and x values of the chased
  function display() {
  let x = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.0009;
  image(chasedImg, x, chased.y,  chased.sizeX, chased.sizeY);
  image(userImg, user.x, user.y, user.sizeX, user.sizeY);
  image(encounterImg, encounter.x, encounter.y, encounter.sizeX, encounter.sizeY);
  }

  function keyPressed(){
    if (state === `title`) {
      state = `simulation`;
    }
  }
