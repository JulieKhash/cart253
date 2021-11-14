/**
Title of Project
Author Name

*/
"use strict";

let state = `danceFire`

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

//all the sound analyzers
let amp;
let fft;
let scaleVolume;
let spectrum;
let bass;
let mid;
let treble;
let mapBass;
let mapMid;
let mapTreble;

//ellipses for the angel scene
let numEllipses1 = 5;
let ellipses1 = [] //an empty array to store our ellipses

//ellipses for the fire scene
let numEllipses2 = 6;
let ellipses2 = [] //an empty array to store our ellipses


let angel;
let fireball1;
let fireball2;
let numSmallFireballs = 5;
let fireballs = [];

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


  amp = new p5.Amplitude();
  amp.setInput(musicXylophone);
  amp.setInput(musicOneTwo);
  //musicOneTwo.setVolume(0.5); //reduction of volume by half

  fft = new p5.FFT(0.8, 512); //reduction of bins/samples down to 512 (by power of two)


  // makes a given number of ellipses for the angel scene
  for (let i = 0; i < numEllipses1; i++) {
    let ellipse1 = new Ellipse1(300 * i);
    ellipses1.push(ellipse1);
  }
  angel = new Angel(angelImg, lightImg);

  //ellipses for the fire scene
  for (let i = 0; i < numEllipses2; i++) {
    let ellipse2 = new Ellipse2(250 * i);
    ellipses2.push(ellipse2);
  }

  //fireballs for the fire scene
  fireball1 = new Fireball1();
  fireball2 = new Fireball2();
}


function draw() {
  orbitControl(6, 6, 0.2);
  translate(0, 0, 0);  //postion the scene in the center

  //let radius = width / 6;

  //get the sound level to detect the beats
  volume = amp.getLevel();
  //map the volume number to a bigger size
  mapVolume = map(volume, 0, 0.3, 10, 100);
  //scale volume to a "good" number
  scaleVolume = map(volume, 0, 0.3, 0.5, 5);

  // gets an array of frequency bands
  spectrum = fft.analyze();
  // amplitude of specific frequency bands
  bass = fft.getEnergy(`bass`); //bass for low frequency bands
  mid = fft.getEnergy(`mid`); // mid for mid frequency bands
  treble = fft.getEnergy(`treble`); //treble for high bands(sometimes mid and treble are mixed up)

  // map frequency value to a "good" amount
  mapBass = map(bass, 0, 255, 5, 300);
  mapMid = map(mid, 0, 255, 5, 600);
  mapTreble = map(treble, 0, 255, 5, 3000);

  console.log(mapMid)

  if (state === `title`) {
    titleScreen();
  } else if (state === `danceAngel`) {
    danceAngel();
  } else if (state === `danceFire`) {
    danceFire();
  }
}


function danceFire() {
  background(0, 0, mapVolume);


  //rotating orbits
  push();
  for (let i = 0; i < ellipses2.length; i++) {
    ellipses2[i].rotate();
    ellipses2[i].display();
  }
  pop();

  //fireball in the center
  push();
  fireball1.rotate();
  fireball1.display();
  pop();

  //fireballs rotating around the orbits
  push();
  // let radius = width / 6;
  // let x = radius * cos(i);
  // let y = radius * sin(i);
  // for (let j = 0; j < fireballs.length; j++) {
   //translate(200, 100, 200);
    fireball2.rotate();
    fireball2.display();
  // }
  pop()

}






// dancing angel screen
function danceAngel() {
  background(0, mapVolume - 15, mapVolume);

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
    state = `danceFire`;

    musicOneTwo.play();
  }
}
