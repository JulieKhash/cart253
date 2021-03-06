let music;
let amp;
let fft;

let numRect = 3;
let numEllipses = 30;

let size = 100;
//spectre
let lowSpec = 0.03;
let midSpec = 0.125;
let highSpec = 0.2;

let lightImg;
let eyeImg;
let angelImg;

function preload() {
  lightImg = loadImage(`assets/images/ChameleonMan.png`);
  eyeImg = loadImage(`assets/images/light.png`);
  music = loadSound(`assets/sounds/rock2.mp3`);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);

  music.setVolume(0.4);
  amp = new p5.Amplitude();
  fft = new p5.FFT(0.8, 512); // we set up 512 as the number of freq bands
  music.play();
}

function draw() {
  background(0);
  orbitControl(2, 2, 0.2); //x, y sensitiity to a mouse

  noFill();

  let volume = amp.getLevel();
  let highestVolume = map(volume, 0, 0.3, 10, 200);

  let spectrum = fft.analyze(); //gets an array of frequency bands

  let lowFrequency = map(fft.getEnergy(`bass`), 0, 255, 5, 200);
  let midFrequency = map(fft.getEnergy(`mid`), 0, 255, 5, 300);
  let highFrequency = map(fft.getEnergy(`treble`), 0, 255, 5, 500);
  background(highestVolume, 0, 0);

  push();
  imageMode(CENTER);

  rotate(frameCount * 0.001);

  if (highestVolume > 65) {
    rotate(frameCount * 0.05);

    image(
      eyeImg,
      0,
      0,
      highFrequency + highestVolume,
      highFrequency + highestVolume
    );
  }
  //rotateX(frameCount * -0.007);
  else rotateY(frameCount * -0.007);
  //rotateZ(frameCount * -0.007);
  image(
    lightImg,
    0,
    0,
    3400 / highFrequency + highestVolume,
    5100 / highFrequency + highestVolume
  );
  pop();
  // appearing circles experimental when the volume gets loud --- need to create a loop for these
  push();
  if (highestVolume > 100) {
    background(highestVolume, highestVolume, highestVolume);
    for (let j = 0; j < numEllipses; j++){
      rotateX(frameCount * -0.01);
      rotateY(frameCount *  0.01);
      rotateZ(frameCount * -0.01);

      texture(eyeImg);
      ellipse(500+j, 500, size);
    }
  }
    pop();

  translate(height / 2 - 500, width / 2 - 500);

  for (let i = 0; i < spectrum.length; i++) {
    // let x = map(i, 0, spectrum.length, 0, width);
    // let y = map(spectrum[i], 0, 255, height/, 0);

    // rotateX(frameCount * -0.001);
    // rotateY(frameCount * -0.001);
    // rotateZ(frameCount * -0.001 );

    rotate(frameCount * 0.03 + highestVolume);
    let r = 200;
    let x = r * cos(i);
    let y = r * sin(i);
    //stroke(highFrequency, midFrequency,lowFrequency )
    stroke(highFrequency * 2, midFrequency / 2, 10, highFrequency / 2);
    //strokeWeight(0.3);

    rectMode(CENTER);
    //texture(eyeImg)
    rect(x, y + lowFrequency - highFrequency, highFrequency / 3);
  }

  console.log(highestVolume);
}
