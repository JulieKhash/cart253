"use strict";
let size = 30;
let numCircles = 10;
let strokeColor = 255;
let strokeAlpha = 10;

let music;
let fft;

let lightImg;
let angelImg;

function preload(){
  lightImg = loadImage(`assets/images/angel.png`);
  music = loadSound(`assets/sounds/germind.mp3`);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);


  fft = new p5.FFT();
  music.play();


}

function draw() {
  background(0);
  //camera(mouseX, 900, 20 + sin(frameCount * 0.01) * 300, 0, 0, 0, 0, 1, 0);


  // let vol = amp.getLevel();
  // let diam = map(vol, 0, 1, 10, 350);
  let spectrum = fft.analyze();
  let lowFreq = fft.getEnergy(200, 300);
  lowFreq = map(lowFreq, 200, 300, 2, 3);

  let highFreq = fft.getEnergy(`treble`);
  highFreq = map(highFreq, 0, 0.5, 5, 10);


  translate(width/20, height/20);

  let spacing = 1
  for(let i = 0; i < numCircles; i++){
    push();

  rotate(i/2 + frameCount/40);

  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.02);
  rotateZ(frameCount * -0.03);


  noFill();
  stroke(10*lowFreq, strokeAlpha*highFreq);

  strokeWeight(8*lowFreq);

   rectMode(CENTER);
   texture(lightImg);
   box(size*i, size*i, size*i*lowFreq);
   pop();

}
console.log(highFreq);
}


// function mousePressed(){
//
// }
