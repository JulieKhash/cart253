let music;
let amp;
let fft;

let numRect = 3;

let size = 100;
//spectre
let lowSpec = 0.03;
let midSpec = 0.125;
let highSpec = 0.20;


let lightImg;
let eyeImg;
let angelImg;

function preload(){
  lightImg = loadImage(`assets/images/chamel.png`);
  eyeImg = loadImage(`assets/images/blue.png`);
  music = loadSound(`assets/sounds/rock2.mp3`);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);

  music.setVolume(0.4);
  amp = new p5.Amplitude();
  fft = new p5.FFT(0.8, 512); // we set up 512 as the number of freq bands
  music.loop();

}


function draw(){
  background(0);
  orbitControl();



  noFill();

  let volume = amp.getLevel();
  let highestVolume = map(volume, 0, 0.3, 10, 200);


  let spectrum = fft.analyze();  //gets an array of frequency bands

  let lowFrequency = map(fft.getEnergy(`bass`),0, 255, 5, 200);
  let midFrequency = map(fft.getEnergy(`mid`),0, 255, 5, 300);
  let highFrequency = map(fft.getEnergy(`treble`), 0, 255, 5, 500);
  background(highestVolume, 0, 0);

// volume for beats
//  amplitude = map(amplitude, 0, 0.3, 300, 550);

  // lowFrequency = map(lowFrequency, 0, 255, 5, 200);
  // midFrequency = map(midFrequency, 0, 255, 5, 300)
  // highFrequency = map(highFrequency, 0, 255, 5, 500);


  let highestAmplitude = lowFrequency + midFrequency + highFrequency

  push();
  imageMode(CENTER);

  rotate(frameCount * 0.001);

  if (highestVolume > 65) {
  image(eyeImg, 0, 0, 3400/highFrequency + highestVolume, 5100/highFrequency+ highestVolume);
} else
  image(lightImg, 0, 0, 3400/highFrequency + highestVolume, 5100/highFrequency+ highestVolume);
  pop();

  translate(height/2-500, width/2-500);

  for (let i = 0; i < spectrum.length; i++){
    // let x = map(i, 0, spectrum.length, 0, width);
    // let y = map(spectrum[i], 0, 255, height/, 0);
    // rotateX(frameCount * -0.001);
    // rotateY(frameCount * -0.002);
    // rotateZ(frameCount * -0.003);



    rotate(frameCount * 0.03 + highestVolume)
    let r = 200;
    let x = r * cos(i);
    let y = r * sin(i);
    //stroke(highFrequency, midFrequency,lowFrequency )
    stroke(highFrequency*2, midFrequency/2 , 10, highFrequency/2);
    //strokeWeight(0.3);

    rectMode(CENTER);
    //texture(lightImg)
    rect(x, y+lowFrequency-highFrequency, highFrequency/3);
  }


console.log(highestVolume)
}
