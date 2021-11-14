/**
Title of Project
Author Name

*/
"use strict";

let state = `title`

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
let fft;
let scaleVolume;
let spectrum;


let numEllipses1 = 5;
let ellipses1 = [] //an empty array to store our ellipses


let angel;

let volume;
let mapVolume;

function preload() {
  font = loadFont('assets/fonts/KIMONOG.ttf');
  angelImg = loadImage(`assets/images/AngelMan.png`);
  firemanImg = loadImage(`assets/images/FireMan.png`);
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
  musicOneTwo.setVolume(0.5); //reduction of volume by half

  fft = new p5.FFT(0.8, 512); //reduction of bins/samples down to 512 (by power of two)


  // makes a given number of ellipses for the angel scene
  for (let i = 0; i < numEllipses1; i++) {
    let ellipse1 = new Ellipse1();
    ellipses1.push(ellipse1);
  }
    angel = new Angel(angelImg, lightImg);

    //makes a given number of ellipses for the angel scene


}


function draw() {

  orbitControl(6, 6, 0.2);
  translate(0, 0, 0);

  let radius = width / 6;

  //get the sound level to detect the beats
  volume = amp.getLevel();
  //map the volume number to a bigger size
  mapVolume = map(volume, 0, 0.3, 10, 600);
  //scale volume to a "good" number
  scaleVolume = map(volume, 0, 0.3, 0.5, 20);

  // gets an array of frequency bands
  spectrum = fft.analyze();
  // amplitude of specific frequency bands
  let bass = fft.getEnergy(`bass`); //bass for low frequency bands
  let mid = fft.getEnergy(`mid`);   // mid for mid frequency bands
  let treble = fft.getEnergy(`treble`);  //treble for high bands(sometimes mid and treble are mixed up)

  // map frequency value to a "good" number
  let mapBass = map(bass, 0, 255, 5, radius);
  let mapMid = map(mid, 0, 255, 5, radius * 2);
  let mapTreble = map(treble, 0, 255, 5, radius * 10);





  if (state === `title`) {
    titleScreen();
  } else if (state === `danceAngel`) {
    danceAngel();
  } else if (state === `danceFire`) {
    danceAngel();
  }

}

function danceAngel() {
  background(0, mapVolume / 7, mapVolume / 6);

  // rotating ellipses
  for (let i = 0; i < ellipses1.length; i++) {
    ellipses1[i].rotate();
    ellipses1[i].display();
    // ellipses[i].keyPressed();
  }
  angel.rotate();
  angel.display();

}

// main screen
function titleScreen() {
  titlescreen.draw();
}

function keyPressed() {
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
