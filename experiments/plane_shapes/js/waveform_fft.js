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
let angelImg;

function preload(){
  lightImg = loadImage(`assets/images/light.png`);
  music = loadSound(`assets/sounds/dream.mp3`);
}

function setup() {
  createCanvas(1000, 1000);

  music.setVolume(0.4);
  amp = new p5.Amplitude();
  //amp.setInput(music);
  fft = new p5.FFT(0.8, 512); // we set up 512 as the number of freq bands
  music.loop();
}

function draw(){
  background(0);
  noFill();

  //let amplitude = amp.getLevel();
   let waveform = fft.waveform();
   let spectrum = fft.analyze();  //gets an array of frequency bands

  let lowFrequency = fft.getEnergy(`bass`);
  let midFrequency = fft.getEnergy(`mid`);
  let highFrequency = fft.getEnergy(`treble`);

// volume for beats
//  amplitude = map(amplitude, 0, 0.3, 300, 550);

  lowFrequency = map(lowFrequency, 0, 255, 5, 200);
  midFrequency = map(midFrequency, 0, 255, 5, 300)
  highFrequency = map(highFrequency, 0, 255, 5, 500);


  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    fill(lowFrequency, i, i);
    rect(x, y, 10);
  }

//console.log(amplitude)
}
