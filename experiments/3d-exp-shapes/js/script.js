
let flow;
//let cam;
let backgroundImg;
let birdModel;

let numCubes = 2;
let cubes = [];

function preload(){
  flow = loadImage(`assets/images/circlone2.gif`);
  backgroundImg = loadImage(`assets/images/forest1.jpg`);
  birdModel = loadModel(`assets/images/eagle-stl.stl`, true)
}


function setup() {
  createCanvas(900, 900, WEBGL);

  for (let i = 0; i < numCubes; i++){
    let cube = cubes[i];
    cubes.push(cube);
}
}

function draw() {
  background(200);

  let size = mouseX;

  texture(flow);

  //noFill();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  for (let x = -20; x <= 20; x+= 20){
    for (let y = -20; y <= 20; y+= 20){
      for (let z = -20; z <= 20; z+= 20){
  push();
  translate(x, y, z);
  box(size);
  pop();
}
}
}
}
