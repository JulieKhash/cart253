let dancer;
let angle = 0;

let energy = {
  x: 0,
  y: 0,
  size: 40,
  speed: 1,
  scale: 1
}



function preload () {
  dancer = loadImage("assets/images/dancer.png");
}

function setup() {
  createCanvas(dancer.width, dancer.height);
  //background(0);
  dancer.loadPixels();


    dancer.updatePixels();
    // imageMode(CENTER);
    // image(dancer, width/2, height/2);
}

function draw() {
  background(36);
  imageMode(CENTER);
  image(dancer, width/2, height/2, width/2, height/2);

  //top light
  push ()
  //fill(random(255), 0, 0, random(150));
  fill(255, 255, 255, random(150));
  noStroke();
  rectMode(CENTER);
  translate(400, 300);
  rotate(angle);
  scale(rect);
  rect(0, 0, 200, 200);
  angle += 100;
  pop();

  push ()
  fill( 0, random(220), random(255), 150);
  noStroke();
  rectMode(CENTER);
  translate(400, 300);
  rotate(-angle);
  rect(0, 0, 150, 150);
  angle += 50;
  pop();


  push ()
  fill( 0, random(220), random(255), 150);
  noStroke();
  rectMode(CENTER);
  translate(400, 300);
  rotate(angle);
  scale(energy.scale);
  angle += 50;
  energy.scale = energy.scale + 0.07;

  if (energy.size > width) {
      energy.size = -energy.size;
  }

  rect(energy.x, energy.y, energy.size);



  pop();


}
