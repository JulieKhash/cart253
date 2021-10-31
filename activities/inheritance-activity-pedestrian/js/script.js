"use strict";


let state = `title` // can be simulation, success, dead

function setup() {
  createCanvas(800, 800);

}



function draw() {
  background(0);

  function displayText(){
    fontSize(50);
    fill(200);
    text(`Pedestrian Life`, width/2, height/2);
  }

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
