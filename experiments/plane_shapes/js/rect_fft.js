"use strict"

let music;
let amp;
let fft;

let numRect = 3;

let size = 100;

let minVolume = 300;
let midVolume = 400;
let highVolume = 550;


let lightImg;
let angelImg;


let imageActive = false

function preload(){
  lightImg = loadImage(`assets/images/light.png`);
  music = loadSound(`assets/sounds/dream.mp3`);
}

function setup() {
  createCanvas(1000, 1000);

  music.setVolume(0.4);
  amp = new p5.Amplitude();
  //amp.setInput(music);
  fft = new p5.FFT(); // we set up 512 as the number of freq bands
  music.loop();


}


function draw(){
  background(0);
  angleMode(DEGREES);
  noFill();

  // translate(width/2-500, height/2-500)

  // rotateX(frameCount * -0.01);
  // rotateY(frameCount * -0.02);
  // rotateZ(frameCount * -0.03);



  let amplitude = amp.getLevel();

  let spectrum = fft.analyze();

  let lowFrequency = fft.getEnergy(60, 250);   // low range
  let midFrequency = fft.getEnergy(250, 500);  // low-mid range
  let highFrequency = fft.getEnergy(500, 800); // mid range

// volume for beats
  amplitude = map(amplitude, 0, 0.3, minVolume, highVolume);

  lowFrequency = map(lowFrequency, 0, 255, 0, 200);  //scales freq range to a suitable num
  midFrequency = map(midFrequency, 0, 255, 1, 300);
  highFrequency = map(highFrequency, 0, 255, 1, 900);


  //red rectangles with low freq/ bass
    push();
    for(let i = 0; i < numRect; i++){
    rectMode(CENTER);
    stroke(lowFrequency, 0, 0, lowFrequency);
    strokeWeight(lowFrequency/50);
    rect(i*200+300, height/2, lowFrequency, lowFrequency);
  }
  pop();

  //green rectangles mid range
    push();
    for(let i = 0; i < numRect; i++){
    rectMode(CENTER);
    stroke(random(midFrequency), midFrequency, 0, midFrequency);
    strokeWeight(midFrequency/50);
    rect(i*200+300, height/2, midFrequency, midFrequency);
  }
    pop();

//blue rect with high freq
  push();
  for(let i = 0; i < numRect; i++){
  rectMode(CENTER);
  stroke(0, 0, amplitude);
  strokeWeight(amplitude/50);

  //texture(lightImg);
  rect(i*200+300, height/2, amplitude, amplitude);
}
  pop();

push();
translate(width/2, height/2);
rotate(frameCount*1)
imageMode(CENTER);
image(lightImg,0, 0, highFrequency, highFrequency);

if (amplitude > midVolume){
  imageActive === true;
  image(lightImg, 330, 130, midFrequency, midFrequency);
}
  pop();


console.log(amplitude)
}
