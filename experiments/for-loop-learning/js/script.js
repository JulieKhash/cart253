let offset = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for (let x = 0; x <= width; x += 30) {
    for (let y = 0; y <= height; y += 30) {
      fill(random(240), 0, random(220));
      rect(x, y, 25, 25);
    }
  }
}



  // for (let y = 0; y <= height; y += 30) {
  //   fill(random(240), 0, random(220));
  //   rect(0, y, 25, 25);
  // }
