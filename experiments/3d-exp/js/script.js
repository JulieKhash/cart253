
let flow;
//let cam;
let backgroundImg;
let birdModel;

function preload(){
  flow = loadImage(`assets/images/eyee.gif`);
  backgroundImg = loadImage(`assets/images/forest1.jpg`);
  birdModel = loadModel(`assets/images/eagle-stl.stl`, true)
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
//  cam = createCapture()
}

function draw() {
  background(250);
  imageMode(CENTER)
//  image(backgroundImg, width/10, height/10);

  //camera(0, 0, (height/2) / tan(PI/6), 0, 0, 0, 1, 0, 0);
  //translate(0, 0, mouseX)
  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  let v = createVector(dx, dy, 0);
  v.normalize();

  directionalLight(0, 250, 250, v);
  ambientLight(10, 150, 250)


  //ambientMaterial(100, 30, 10);
  //translate(mouseX - width/2 , mouseY - height/2);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.02);
  noStroke();
  texture(flow);
  //specularMaterial(255);
//  box(200);
  scale(5)
  model(birdModel);

}
