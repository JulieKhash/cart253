let circle1 ={
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}

let circle2 ={
  x: undefined,
  y: 250,
  size: 60,
  vx: 0,
  vy: 0,
  speed: 2
}


function setup(){
  createCanvas(500, 500);

  //moves circle in a random position
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);


}

function draw(){
  background(0);



  fill(255, 0, 0);
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);


}
