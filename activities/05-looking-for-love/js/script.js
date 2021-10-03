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
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}

let state = `title`;


function setup(){
  createCanvas(500, 500);

  // x postion of 2 circles
  circle1.x = width/3;
  circle2.x = width/3 * 2;

  //moves circles in a random position when the simulation starts
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

function draw(){
  background(0);


  if (state === `title`){
    title();
  }
  else if (state === `simulation`){
    simulation();
  }
  else if (state === `love`){
    love();
  }
  else if (state === `sadness`){
    sadness();
  }
}

  function title(){
    push();
    textSize(70);
    fill(255, 200, 0);
    textFont(`Sansita Swashed`);
    textAlign(CENTER, CENTER);
    text(`IS IT LOVE?`, width/2, height/2);
    pop();
  }

  function simulation(){
    move();
    checkOffscreen();
    checkOverlap();
    display();
  }

  function love(){
    push();
    textSize(80);
    fill(255, 0, 0);
    textFont(`Sansita Swashed`);
    textAlign(CENTER, CENTER);
    text(`LOVE!`, width/2, height/2);
    pop();
  }

  function sadness(){
    push();
    textSize(80);
    fill(10, 200, 200);
    textFont(`Sansita Swashed`);
    textAlign(CENTER, CENTER);
    text(`SADNESS!`, width/2, height/2);
    pop();
  }

  // moves circles
  function move(){
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

  //checks if circles go off screen
  function checkOffscreen(){
  if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height){
    state = `sadness`
  }
}

  // check if circles overlap
  function checkOverlap(){
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = `love`;
  }
}

function mousePressed(){
  if (state === `title`){
    state = `simulation`;
  }
}

  function display(){
  fill(255);
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}
