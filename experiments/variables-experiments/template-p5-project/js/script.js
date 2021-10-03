/**
Moving Images
Julie K

Interactive work
*/
let bgShade =  0;
// let circleX =  0;
// let circleY = 250;
// let circleSize = 100;
// let circleSpeed = 2;
// let circleAcceleration = 0.25;

let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 2,
  fill: 0
};

/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

}

/**
Description of draw()
*/
function draw() {
    //bgShade = bgShade + 1;
    background(bgShade);


    circle.speed = random(-6, 9);
    circle.x += circle.speed;
    circle.x = constrain(circle.x, 0, width);

    // circle.size = random(10, 50);
    // circle.fill = random(0, 255);

    circle.fill = map(mouseX, 0, width,0, 255);
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);


}
