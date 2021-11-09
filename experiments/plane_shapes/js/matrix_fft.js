"use strict";

let diam = 20;
let numCircles = 20;
let numStars = 50;

let music;
let amp;
let fft;

let lightImg;
let sunImg;
let angelImg;

let numEllipses = 5;
let size = 300;

function preload() {
  lightImg = loadImage(`assets/images/blue.png`);
  sunImg = loadImage(`assets/images/thunder.png`);
  music = loadSound(`assets/sounds/rock.mp3`);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  perspective(PI / 3, width / height, 80, 1000);

  fft = new p5.FFT(0.8, 512);
  music.loop();
}

function draw() {
  background(0);

  //orbitControl();
  let spectrum = fft.analyze();

  let lowFrequency = map(fft.getEnergy(`bass`), 0, 255, 5, 200);
  let midFrequency = map(fft.getEnergy(`mid`), 0, 255, 5, 300);
  let highFrequency = map(fft.getEnergy(`treble`), 0, 255, 5, 500);


  push();
  for (let i = 0; i < numCircles; i++) {
    noFill();
    noStroke();
    //translate(width/20, height/20);
    rotate(i / 2 + frameCount / 40);

    //rotateX(frameCount * -0.001);
    // rotateY(frameCount * -0.001);
    rotateZ(frameCount * -0.002);

    rectMode(CENTER);
    texture(lightImg);
    translate(-15, 0, sin(frameCount / 30) * 95); //first value is rotation
    box(100 + highFrequency / 3);
  }
  pop();

  // push();
  // translate(-15, 0, sin(frameCount / 30) * 95);
  // for (let i = 0; i < numStars; i++) {
  //   let x = random(0, width);
  //   let y = random(0, height);
  //   stroke(random(highFrequency + 60, highFrequency));
  //   strokeWeight(10);
  //   point(x, y, 100);
  //   pop();
  // }
}

function mousePressed(){
  if(music.isPlaying()===true){
    music.pause();
  } else {
    music.play();
  }
}
