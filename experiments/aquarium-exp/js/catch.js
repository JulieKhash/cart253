

"use strict";

let jarImg;
let forestImg;
// let flyImg;

let fireflies = [];
let fireflyNum = 2;


let jar = {
  x: undefined,
  y: undefined,
  sizeW: 155/2,
  sizeH: 240/2,
  caught: [],
}

function preload() {
  jarImg = loadImage("assets/images/jar4.png");
  forestImg = loadImage("assets/images/forest.jpg");
  // flyImg = loadImage("assets/images/fly1.png");
}


function setup() {
  createCanvas(1100, 733);

  for (let i = 0; i < fireflyNum; i++) {
  fireflies[i] = createFirefly(random(0, width), random(0, height));
  }

  for (let i = 0; i < fireflyNum; i++) {
  jar.caught[i] = createFirefly(jar.x, jar.y);
  }


}
function createFirefly(x, y){
  let firefly = {
    x: x,
    y: y,
    size: 20,
    alpha: 100,
    speed: 2,
    vx: 0,
    vy: 0,
   caught: false,
    opacity: 200
  };
  return firefly
}



function draw() {
  background(0);
  imageMode(CENTER);
  image(forestImg, width/2, height/2, 1100, 733);


 moveJar();
 displayJar(jar);

 //for (let i = 0; i < fireflyNum; i++){
 displayFirefly(firefly);
}
// }


  function moveJar(){
    jar.x = mouseX;
    jar.y = mouseY;
  }

  function displayJar(jar){
  imageMode(CENTER);
  image(jarImg, jar.x, jar.y, jar.sizeW, jar.sizeH);
}

function displayFirefly(firefly){
 fill(255, 255, 0);
 ellipse(firefly.x, firefly.y, firefly.size);
}
