let angel;
let fire

function preload() {
  angel = loadImage(`assets/images/batman12.png`);
  fire = loadImage('assets/images/fireball.gif');
  fire2 = loadImage('assets/images/firegif.gif');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(random(25), random(40), random(60));
  orbitControl();

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
  //texture(fire2);
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  //ambientLight(50);
  //directionalLight(255, 0, 0, 0.25, 0.25, 0);
  //pointLight(0, 0, 255, locX, locY, 250);

  texture(fire);
  noStroke();
  // fill(100, 20, 20, 100)
  sphere(100);
  pop();

  push();
  noFill();
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  rotateZ(frameCount * -0.01);

  plane(700);
  pop();

  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);

  plane(800);
  pop();

  push();
  noFill();
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  rotateZ(frameCount * -0.01);
  plane(900);
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


  push();
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  rotateZ(frameCount * -0.01);
  texture(fire);
  ellipse(500, 500, 200);
  pop();


  push();
  imageMode(CENTER);
  //rotateZ(frameCount * -0.05);
  rotate(frameCount * 0.01);


    image(angel, 0, 0, 3000/2, 4000/2);
    //image(fire2, 100, 0, 300,400);


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
