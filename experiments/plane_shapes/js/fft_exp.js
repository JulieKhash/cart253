"use strict"


let music;


//let amp;
let fft;

let lightImg;
let angelImg;

function preload(){
  lightImg = loadImage(`assets/images/sun.png`);
  music = loadSound(`assets/sounds/germind.mp3`);
}

function setup() {
  createCanvas(1000, 1000);

  //music.setVolume(0.5);
  fft = new p5.FFT(0.8, 256); // we set up 512 as the number of freq bands
  music.play();

}

function draw() {
  background(0);

  let spectrum = fft.analyze(); //gets the length of the array - 1024 freq bands by default
  let lowFreq = fft.getEnergy("bass");
  let size = width/ spectrum.length; //calculate the width of rectancles

  //translate(width/2, height/2);

  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    // let angle = map(i, 0, spectrum.length, 0, 360);
    // let r = map(amp, 256, 40, 200);
    //
    // let x = r *cos(angle);
    // let y = r *sin(angle);
    //rotate(i/2 + frameCount/amp);



    let x = map(amp, 0, spectrum.length, -100, width);
    let y = map(amp, 0, spectrum.length, height, 0);
    stroke(lowFreq, 1*i, 1*i);
    //fill(i, 0, 255);
    noFill();
    //rectMode(CENTER);
    ellipse(x, y, size+i);
  }
}
