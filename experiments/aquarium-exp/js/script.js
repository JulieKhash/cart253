

"use strict";

let jarImg;

let firefly = [];

let jar = {
  x: 0,
  y: 0,
  sizeW: 155,
  sizeH: 240,
}


let firefly1;
let firefly2;


function preload() {
  jarImg = loadImage("assets/images/jar4.png")
}



function setup() {
  createCanvas(800, 800);

  firefly1 = createFirefly(random(0, width), random(0, height), 20);
  //firefly2 = createFirefly(random(0, width), random(0, height));

}

  function createFirefly(x, y, size){
  let firefly1 ={
    x: 200,
    y: 300,
    size: 10,
    alpha: 100,
    speed: 2,
    vx: 0,
    vy: 0,
    active: false
  };
    return firefly;
}



function draw() {
  background(0);


  checkFirefly(firefly1)
  moveFirefly()
  displayFirefly(firefly1);

  moveJar();
  displayJar();

}

  function moveFirefly(){


    let change = random(0,1);
    if (change < 0.05){
    firefly1.vx = random(-firefly1.speed, firefly1.speed);
    firefly1.vy = random(-firefly1.speed, firefly1.speed);
}
    // move firefly
   firefly1.x += firefly1.vx;
   firefly1.y += firefly1.vy;

   // firefly2.x += firefly1.vx;
   // firefly2.y += firefly1.vy;

   //constrain the firefly to canvas
   firefly1.x = constrain(firefly1.x, 0, width);
   firefly1.y = constrain(firefly1.y, 0, height);

   // firefly2.x = constrain(firefly1.x, 0, width);
   // firefly2.y = constrain(firefly1.y, 0, height);

  }

  function checkFirefly(firefly){
    if (!firefly.active){
    let d = dist(jar.x, jar.y, firefly.x, firefly.y);
    if(d < jar.sizeW/2 + firefly.size/2){
      firefly.active = true;
    }
    }
  }


  function displayFirefly(firefly){
  let glitter = random(0, 200);
  if(!firefly1.active){
  fill(255, 252, 191, glitter);
  ellipse(firefly1.x, firefly1.y, firefly1.size);
  //ellipse(firefly2.x, firefly2.y, firefly2.size);
  }
}

  function moveJar(){
    jar.x = mouseX,
    jar.y = mouseY
  }

  function displayJar(){
  imageMode(CENTER);
  image(jarImg, jar.x, jar.y, jar.sizeW, jar.sizeH);
}
