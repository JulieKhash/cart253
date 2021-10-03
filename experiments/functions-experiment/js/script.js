let recta = {
  x: 10,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
};

let state = `title`;

function setup() {
  createCanvas(500, 500);
  recta.vx = recta.speed;
  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0, 100, 150);

  if (state === `title`) {
    title();
  } else if (state === "animation") {
    //Animation
    animation();
  } else if (state === `ending`) {
    ending();
  }
}

//Title
function title() {
  noStroke();
  fill(255, 0, 0);
  text("Life", width / 2, height / 2);
}

//Animation
function animation() {
  recta.x = recta.x + recta.vx;
  recta.y = recta.y + recta.vy;

  if (recta.x > width) {
    state = `ending`;
  }
  noFill();
  stroke(255);
  strokeWeight(5);
  rectMode(CENTER);
  rect(recta.x, recta.y, recta.size);
}

//Ending
function ending() {
  noStroke();
  fill(0);
  text(`Death`, width / 2, height / 2);
}

function keyPressed() {
  if (state === `title`) {
    state = `animation`;
  }
}
