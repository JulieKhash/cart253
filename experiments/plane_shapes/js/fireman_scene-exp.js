"use strict";

let fireman;
let fire;
let eyeImg;

let music;
let amp;
let fft;

let numRects = 4;
let rectSize = 400;
let numEllipses = 15;

function preload() {
  fireman = loadImage(`assets/images/circusMan.png`);
  fire = loadImage('assets/images/fireball.gif');
  eyeImg = loadImage('assets/images/redlight.png');
  music = loadSound(`assets/sounds/distortion.mp3`);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  amp = new p5.Amplitude();
  music.setVolume(0.4);
  fft = new p5.FFT(0.8, 512);
  music.play();
}

function draw() {
  orbitControl(6, 6, 0.2);

  translate(0, 0, 0);


  let radius = width/6;

  let volume = amp.getLevel();
  let mapVolume = map(volume, 0, 0.3, 10, 200);
  let scaleVolume = map(volume, 0, 0.3, 0.5, 20);

  let spectrum = fft.analyze(); //gets an array of frequency bands

  let bass = fft.getEnergy(`bass`);
  let mid = fft.getEnergy(`mid`);
  let treble = fft.getEnergy(`treble`);

  let mapBass = map(bass, 0, 255, 5, radius);
  let scaleBass = map(bass, 0, 255, 1, 10);

  let mapMid = map(mid, 0, 255, 5, radius * 2);
  let scaleMid = map(mid, 0, 255, 1, 5);

  let mapTreble = map(treble, 0, 255, 5, radius * 3);
  let scaleTreble = (treble, 0, 255, 1, 10);

  background(0, 0, mapVolume/4);

  push();

  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  texture(fire);
  noStroke();
  // fill(100, 20, 20, 100)
  sphere(100 + scaleVolume);
  pop();

  push()
  translate(300, 0, 0);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  texture(fire);
  noStroke();
  // fill(100, 20, 20, 100)
  sphere(50 + scaleVolume);
  pop();

//orbit ellipses
  push();
  for (let i = 0; i < numRects; i++){

    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.005);

    stroke(mapTreble*2, mapMid/3, mapMid/3, mapMid);
    strokeWeight(scaleVolume/5);
    noFill();
    rectMode(CENTER);
    //texture(fireman)
    ellipse(0, 0, rectSize*i);
  }
    pop();

// red flash
    push()
    if (mapTreble > 210){
      texture(eyeImg);
      noStroke();
      //scale(scaleTreble/3)
      ellipse(0, 0, mapBass+ mapTreble);
      pop();
    }


//fire balls
  push();
  // if (mapVolume > 90){
  for (let j = 0; j < numEllipses; j++){

    let x = radius * cos(j);
    let y = radius * sin(j);
    translate(x+200, y+100, 0);
    rotate(frameCount* -0.003);
    noStroke();
  //  rotateX(frameCount * -0.006);

    rotateY(frameCount *  0.003);
    rotateZ(frameCount * -0.003);

    texture(fire);
    // ellipse(500+j, 500, 150);
    sphere(20+j + scaleBass);
  }
// }
    pop();

    push();
    // rotate(frameCount * 0.001 + scaleTreble)
    rotateX(frameCount * -0.005);
    rotateY(frameCount * -0.005);
    rotateZ(frameCount * -0.005);
// move rapid
    // if (mapTreble > 200){
    //   rotateX(frameCount * -0.01);
    //   //should be opposite direction (flip image)
    //   imageMode(CENTER);
    //   //scale(1, -1);
    //   image(fireman, 0, 250,  3000/3+mapVolume, 4000/3+mapVolume);
    // }
    imageMode(CENTER);
    image(fireman, 0, 250,  3000/3+mapVolume, 4000/3+mapVolume);

    // texture(fireman);
    noFill();
    stroke(mapTreble*2, mapMid/3, mapMid/3, mapMid);
    strokeWeight(scaleVolume/5);
    ellipse(0, 0, 2000);
    pop();


console.log(mapTreble);
}
