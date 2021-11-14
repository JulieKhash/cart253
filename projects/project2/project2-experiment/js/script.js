/**
Title of Project
Author Name

*/
"use strict";

let state  = `title`

let titlescreen;

let font;

//all the images
let lightImg;
let angelImg;
let firemanImg;
let fireballImg

//all the music
let musicXylophone;
let musicOneTwo;

//all the analyzers
let amp;


let numEllipses = 5;
let ellipses = []  //an empty array to store our ellipses


let angel;

let volume;
let mapVolume;

function preload() {
  font = loadFont('assets/fonts/KIMONOG.ttf');
  angelImg = loadImage(`assets/images/AngelMan.png`);
  angelImg = loadImage(`assets/images/FireMan.png`);
  fireballImg = loadImage(`assets/images/fireball.gif`);
  lightImg = loadImage(`assets/images/light.png`);
  musicXylophone = loadSound(`assets/sounds/dream.mp3`);
  musicOneTwo = loadSound(`assets/sounds/one-two.mp3`);
}


function setup() {
  createCanvas(1700, 1000, WEBGL);

  titlescreen = new Title();

  // musicXylophone.play();
  amp = new p5.Amplitude();
  amp.setInput(musicXylophone);
  amp.setInput(musicOneTwo);

  // makes a given number of ellipses
    for (let i = 0; i <  numEllipses; i++){
    let ellipse = new Ellipse1();
    ellipses.push(ellipse);
}
    angel  = new Angel(angelImg, lightImg);

  }


function draw() {

  orbitControl(6, 6, 0.2);
  translate(0, 0, 0);

  volume = amp.getLevel();
  mapVolume = map(volume, 0, 0.3, 10, 600);


  if (state === `title`){
    titleScreen();
  } else if (state === `danceAngel`){
    danceAngel();
  } else if (state === `danceFire`){
    danceAngel();
  }

}

function danceAngel(){
background(0, mapVolume / 7, mapVolume / 6);

// rotating ellipses
for (let i = 0; i < ellipses.length; i++){
 ellipses[i].rotate();
 ellipses[i].display();
 // ellipses[i].keyPressed();
}
angel.rotate();
angel.display();

}

// main screen
function titleScreen(){
  titlescreen.draw();
}

function keyPressed(){
  if (state === `title` && keyCode === ENTER) {
    state = `danceAngel`;
    musicXylophone.play();
  } else if (state === `danceAngel` && keyCode === ENTER) {
    musicXylophone.stop();
    //state = `danceFire`;
    //musicXylophone.stop();
    //musicOneTwo.play();
  }
}

  // push()
  // stroke(255);
  // strokeWeight(1);
  //
  // rotateX(frameCount * -this.minRotationSpeed*8);
  // rotateY(frameCount * -this.minRotationSpeed*8);
  // rotateZ(frameCount * -this.minRotationSpeed*8);
  //
  // if (mapVolume > 250) {
  //   texture(lightImg);
  // } else {
  //   texture(angelImg);
  // }
  // rectMode(CENTER)
  // ellipse(0, 0, size + mapVolume / 2);
  // pop();

// console.log(currentState);
// }
