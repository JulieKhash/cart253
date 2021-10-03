let circle = {
  // position
  x: 250,
  y: 250,

  // size
  currentSize: 50,
  minSize: 0,
  maxSize: 400,

  // speed
  growthSpeed: 4,
  resetSpeed: 4, // resets to this speed once max size is reached
  // circle's growth decelerates as circle grows bigger (thus negative value)
  growthAcceleration: -0.02,

  // color info
  fill: 0,
  stroke: 255,
  // opacity of stroke
  currentStrokeAlpha: 50,
  minStrokeAlpha: 0,
  maxStrokeAlpha: 255,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // make the circle grow with speed and acceleration
  circle.currentSize += circle.growthSpeed;
  circle.growthSpeed += circle.growthAcceleration;

  // if circle surpasses its max size:
  if (circle.currentSize >= circle.maxSize) {
    // reset its size
    circle.currentSize = circle.minSize;
    // reset its growth speed
    circle.growthSpeed = circle.resetSpeed;
  }

  // map stroke's opacity to circle's size
  circle.currentStrokeAlpha = map(
    circle.currentSize,
    circle.minSize,
    circle.maxSize,
    circle.maxStrokeAlpha,
    circle.minStrokeAlpha
  );

  // draw circle
  fill(circle.fill);
  stroke(circle.stroke, circle.currentStrokeAlpha);
  ellipse(circle.x, circle.y, circle.currentSize);
}
