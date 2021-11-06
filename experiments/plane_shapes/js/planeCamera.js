let angel;
let fire

function preload() {
  angel = loadImage(`assets/images/man.png`);
  fire = loadImage('assets/images/jaly.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(random(25), random(40), random(60));

  // push()
  // imageMode(CENTER);
  // translate( width/2, height/2)
  // image(fire, -500, -500);
  // pop()
  //move the camera away from the plane by a sin wave
  stroke(random(255));
  strokeWeight(0.9);
  noFill();



  //camera(200, 200, 20 + sin(frameCount * 0.01) * 100, 0, 0, 0, 0, 1, 0);
  push();
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  texture(angel);
  plane(400);
  pop();

  push();
  noFill();
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  rotateZ(frameCount * -0.01);
  //texture(angel);
  plane(300);
  pop();

  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  //texture(angel);
  plane(400);
  pop();

  push();
  noFill();
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  rotateZ(frameCount * -0.01);
  texture(fire);
  //texture(angel);
  plane(500);
  pop();

  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  texture(fire);
  ellipse(-500, -500, 200);
  pop();

  push();
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  rotateZ(frameCount * -0.01);
  texture(fire);
  ellipse(-500, -500, 200);
  pop();

  translate(240, 0, 0);
push();
strokeWeight(0.5);
noFill();
rotateZ(frameCount * 0.01);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
torus(100, 10);
pop();



  // push();
  // noFill();
  // noStroke();
  // //strokeWeight(0.05);
  // rotateX(frameCount * -0.02);
  // rotateY(frameCount * -0.02);
  // rotateZ(frameCount * -0.02);
  // texture(fire);
  // sphere(10);
  // pop();


}