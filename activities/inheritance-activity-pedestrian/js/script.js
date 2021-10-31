"use strict";

let pedestrian;

let state = `simulation` // can be simulation, success, dead

function setup() {
  createCanvas(800, 800);

  let x = width/2;
  let y = height;
  pedestrian = new Pedestrian(x, y);

}



function draw() {
  background(0);

  if (state === `title`){
    title();
  } else if (state === `simulation`){
    simulation();
  } else if (state === `success`){
    success();
  } else if (state === `dead`){
    dead();
  }
}

function title(){
displayText(`Pedestrian Life`);
}

function simulation(){
  pedestrian.handInput();
  pedestrian.move();
  pedestrian.display();
}

function success(){
displayText(`You crossed the road!`);
}

function dead(){
displayText(`You died`);
}


function displayText(string){
  push();
  textSize(50);
  textAlign(CENTER, CENTER)
  fill(200);
  text(string, width/2, height/2);
  pop();
}

function keyPressed(){
  if (state === `title` && keyCode === ENTER){
    state = `simulation`
  }
}
