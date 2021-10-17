

"use strict";

let jarImg;
let forestImg;

let firefly = [];
let fireflyNum = 100;

let jar = {
  x: 0,
  y: 0,
  sizeW: 155/2,
  sizeH: 240/2,
}

// let firefly1;
// let firefly2;


function preload() {
  jarImg = loadImage("assets/images/jar4.png");
  forestImg = loadImage("assets/images/forest.jpg");
}


function setup() {
  createCanvas(1100, 733);

  for (let i = 0; i < fireflyNum; i++) {
  firefly[i] = createFood(random(0, width), random(0, height));
  }

  // firefly[0] = createFood(random(0, width), random(0, height));
  // firefly[1] = createFood(random(0, width), random(0, height));

}

function createFood(x, y, size){
  let firefly = {
    x: x,
    y: y,
    size: 10,
    alpha: 100,
    speed: 2,
    vx: 0,
    vy: 0,
    caught: false
  };
  return firefly
}



function draw() {
  background(0);
  imageMode(CENTER);
  image(forestImg, width/2, height/2, 1100, 733);

  for (let i = 0; i < firefly.length; i++) {
  moveFirefly(firefly[i]);
}

  for (let i = 0; i < firefly.length; i++){
  checkFirefly(firefly[i]);
}

 for (let i = 0; i < firefly.length; i++){
  displayFirefly(firefly[i]);
}
  moveJar();
  displayJar();

}


  function moveFirefly(firefly){
    let change = random(0,1);
    if (change < 0.02) {
    firefly.vx = random(-firefly.speed, firefly.speed);
    firefly.vy = random(-firefly.speed, firefly.speed);
};
    firefly.x += firefly.vx;
    firefly.y += firefly.vy;

    firefly.x = constrain(firefly.x, 0, width);
    firefly.y = constrain(firefly.y, 0, height);
  }



function checkFirefly(firefly){
  if (!firefly.caught){

    let d = dist(jar.x, jar.y, firefly.x, firefly.y)
    if(d < jar.sizeH/2 + firefly.size/2){
    firefly.caught = true;
    }
  }
}


function displayFirefly(firefly){
  if(!firefly.caught){
  fill(255, 255, 166, random(0, 200));
  ellipse(firefly.x, firefly.y, firefly.size);
}
}


  function moveJar(){
    jar.x = mouseX;
    jar.y = mouseY;
  }

  function displayJar(){
  imageMode(CENTER);
  image(jarImg, jar.x, jar.y, jar.sizeW, jar.sizeH);
}

function mousePressed(){
firefly.caught = !firefly.caught;
}
