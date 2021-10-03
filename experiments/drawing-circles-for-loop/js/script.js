let circle = {
  x: 0,
  y: 250,
  size: 50,
  alpha: 0
};

let numCircles = 1;
let circlesDrawn = 0;

function setup() {
  createCanvas(500, 500);
  background(0);
  frameRate(10);
}

function draw() {
  // background(0);
  stroke(255, 0, 0, circle.alpha);
  strokeWeight(2);
  noFill();

  let x = circle.x;
  let y = circle.y;
  let size = circle.size;
  let alpha = circle.alpha;

  for (let circlesDrawn = 0; circlesDrawn < numCircles; circlesDrawn++) {
    x = x + 20; //spacing

    ellipse(x, y, size);
  }
  circle.alpha = constrain(circle.alpha + 1, 0, 200); //changes and constrains opacity from 0 to 200
  numCircles = constrain(numCircles + 1, 0, 20); //adds one circle each frame from 0 to 20;

}
