"use strict"

let music;
let amp;
let fft;

let numRect = 3;

let size = 100;
//spectre
let lowSpec = 0.03;
let midSpec = 0.125;
let highSpec = 0.20;

let lowScore = []
let midScore = 0
let highScore = 0


let lightImg;
let angelImg;

function preload(){
  lightImg = loadImage(`assets/images/light.png`);
  music = loadSound(`assets/sounds/rock.mp3`);
}

function setup() {
  createCanvas(1000, 1000);

  //music.setVolume(0.5);
  amp = new p5.Amplitude();
  //amp.setInput(music);
  fft = new p5.FFT(0.8, 256); // we set up 512 as the number of freq bands
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

  let lowFrequency = fft.getEnergy(`bass`);
  let midFrequency = fft.getEnergy(`mid`);
  let highFrequency = fft.getEnergy(`treble`);

// volume for beats
  amplitude = map(amplitude, 0, 0.3, 300, 550);

  lowFrequency = map(lowFrequency, 200, 300, 100, 400);
  midFrequency = map(midFrequency, 100, 230, 100, 400 )
  highFrequency = map(highFrequency, 0, 5, 5, 70);


  //red rectangles with low freq/ bass

    for(let i = 0; i < numRect; i++){
    push();
    rectMode(CENTER);
    stroke(lowFrequency, 0, 0, lowFrequency);
    strokeWeight(lowFrequency/50);
    rect(i*200+300, height/2, lowFrequency, lowFrequency);
    pop();
  }

  //green rectangles with low freq
    for(let i = 0; i < numRect; i++){
    push();
    rectMode(CENTER);
    stroke(random(midFrequency), midFrequency, 0, midFrequency);
    strokeWeight(midFrequency/50);
    rect(i*200+300, height/2, midFrequency, midFrequency);
    pop();
  }

//blue rect with high freq
  for(let i = 0; i < numRect; i++){
  push();
  rectMode(CENTER);
  stroke(0, 0, amplitude);
  strokeWeight(amplitude/50);

  //texture(lightImg);
  rect(i*200+300, height/2, amplitude, amplitude);
  pop();
}

push();
translate(width/2, height/2);
rotate(frameCount*1)
imageMode(CENTER);
image(lightImg,0, 0, highFrequency, highFrequency);
pop();

if (amplitude >540){
  image(lightImg, 330, 130, highFrequency/2, highFrequency/2);
}



console.log(amplitude)
}
