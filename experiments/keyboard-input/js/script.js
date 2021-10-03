let bg = 0;

let circle = {
  x: 250,
  y: 250,
  size: 90,
  vx: 0,
  vy: 0,
  speed: 5
}


function setup(){
  createCanvas(500, 500);
}
  //Template: control a circle by pressing the arrow key
function draw(){
  background(bg);

  handleInput();
  move();
  display();

function handleInput(){
  if (keyIsDown(LEFT_ARROW)) {
    circle.vx = -circle.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    circle.vx = circle.speed;
  }
  else {
    circle.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    circle.vy = -circle.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    circle.vy = circle.speed;
  }
  else {
    circle.vy = 0;
  }
}

function move(){
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;
}

function display(){
  fill(255);
  ellipse(circle.x, circle.y, circle.size);
}




// changing colors by pressing up and down arrow keys
//   textAlign(CENTER);
//   textSize(50);
//   fill(255, 0, 0);
//   text(keyCode, width/2, height/2);
// }
//
// function keyPressed(){
//   if (keyCode === 38) {  // 38 is an UP ARROW key
//     bg = bg + 10;
//     bg = constrain(bg, 0, 255);
//   }
//   else if (keyCode === 40) { // 40 inspect an DOWN ARROW key
//     bg = bg - 10;
//     bg = constrain(bg, 0, 255);
//   }
}
