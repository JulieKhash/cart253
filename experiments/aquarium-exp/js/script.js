

"use strict";

let jarImg;
let forestImg;
let flyImg;

let fireflies = [];
let fireflyNum = 100;


let jar = {
  x: 0,
  y: 0,
  sizeW: 155/2,
  sizeH: 240/2,
  caught: [],
}

function preload() {
  jarImg = loadImage("assets/images/jar4.png");
  forestImg = loadImage("assets/images/forest.jpg");
  flyImg = loadImage("assets/images/fly1.png");
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
    size: 9,
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



  for (let i = 0; i > fireflies.length; i++) {
  addFirefly(fireflies[i]);
}

  for (let i = 0; i < fireflies.length; i++) {
  moveFirefly(fireflies[i]);
}

  for (let i = 0; i < fireflies.length; i++){
  checkFirefly(fireflies[i]);
}

 for (let i = 0; i < fireflies.length; i++){
  displayFirefly(fireflies[i]);
}
  moveJar();
  displayJar();

  for (let i = 0; i < jar.caught.length; i++){
  moveCaught(jar.caught[i]);
  }

for (let i = 0; i < jar.caught.length; i++){
  displayCaught(jar.caught[i]);
}

}

function moveCaught(firefly){
 firefly.vx = random(-firefly.speed, firefly.speed);
 firefly.vy = random(-firefly.speed, firefly. speed);

 firefly.x += firefly.vx;
 firefly.y += firefly.vy;

 firefly.x = constrain(firefly.x, jar.x -30, jar.x +30)
 firefly.y = constrain(firefly.y, jar.y -30, jar.y +40)
}


function displayCaught(firefly){
  if (!firefly.caught) {
    firefly.caught = false;
  }
  else {
  let glitter = random(0, 255);
  let glitterb = random(0, 90);
  image(flyImg, firefly.x, firefly.y, 1181/40, 1181/40);
  fill(glitter, glitter, glitterb, firefly.opacity);
  firefly.opacity -= 0.2;
  noStroke();
  ellipse(firefly.x, firefly.y, firefly.size);
}
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
    //firefly.caught = true;
    moveCaught(firefly)
    displayCaught(firefly)

    }
  }
}

function displayFirefly(firefly){
  if(!firefly.caught){
  let glitter = random(0, 255);
  let glitterb = random(0, 90);
  glitter = glitter - 10;
  image(flyImg, firefly.x, firefly.y, 1181/40, 1181/40);
  fill(glitter, glitter, glitterb, firefly.opacity);
  firefly.opacity -= 0.005;
  noStroke();
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

// if firefly num is === 100 then winner
// if time is over


//state: title, simulation, endings: disappearance of flies, collection of flies inside the bottle




// --> catch flies when mouse is clicked
// --> fill/collect flies inside the bottle
// --> timer when all flies disappear with millis?
//
