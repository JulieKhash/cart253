/**
Title of Project
Author Name

*/
"use strict";

let state = `title`

let titlescreen;

// 3d font
let font;

//all the images
let lightImg;
let light2Img;
let angelImg;
let firemanImg;
let fireballImg;
let chameleonManImg;

//all the music
let musicXylophone;
let musicOneTwo;
let musicRock;

let music1;


//all the sound analyzers
let amp;
let fft;
let volume;
let mapVolume;
let scaleVolume;
let spectrum;
let bass;
let mid;
let treble;
let mapBass;
let mapMid;
let mapTreble;
let currentTime1;
let currentTime2;
let musicDelayTime = 1500; //1.5 secs before the music onset
let timeOut1;
let timeOut2;
let timeOut3

//ellipses for the angel scene
let numEllipses1 = 5;
let ellipse1;
let ellipses1 = [] //an empty array to store our ellipses

//ellipses for the cosmos scene
let numEllipses2 = 7;
let ellipse2;
let ellipses2 = [];

// number of the light effects
let numlights = 30;

let light1;
let lights1 = []; //an empty array to store the first light effects

let light2;
let lights2 = []; // to store the second light effects

let light3;
let lights3 = []; // to store the third light effects

// main characters
let angel;
let fireman;
let chameleonman;

// fireballs in the cosmos
let fireball1;
let fireball2;

// visualizer
let centralVisualizer;

// preload all the media in our program from assets file
function preload() {
  font = loadFont('assets/fonts/KIMONOG.ttf');
  angelImg = loadImage(`assets/images/AngelMan.png`);
  firemanImg = loadImage(`assets/images/FireManSmaller.png`);
  fireballImg = loadImage(`assets/images/fireball.gif`);
  lightImg = loadImage(`assets/images/light.png`);
  light2Img = loadImage(`assets/images/blue.png`);
  chameleonManImg = loadImage(`assets/images/ChameleonMan.png`)

  musicXylophone = loadSound(`assets/sounds/dream.mp3`);
  musicOneTwo = loadSound(`assets/sounds/one-two.mp3`);
  musicRock = loadSound(`assets/sounds/electro-rock.mp3`);
}

// intial setup for our program: canvas, main screen, audio analyzers and object instances
function setup() {
  createCanvas(1700, 1000, WEBGL); //WEBGL for 3D canvas

  titlescreen = new Title(); //starts the screen with title

  amp = new p5.Amplitude(); //an instance of amplitude for all sounds
  amp.setInput(musicXylophone); // provide the audio input for the analyzer
  amp.setInput(musicOneTwo);
  amp.setInput(musicRock);
  musicRock.setVolume(0.4); //reduction of volume almost by half

  fft = new p5.FFT(0.8, 512); //reduction of bins/samples down to 512 (by power of two)
  fft.setInput(musicOneTwo);
  fft.setInput(musicRock);


  // makes a given number of ellipses for the angel scene
  for (let i = 0; i < numEllipses1; i++) {
    ellipse1 = new Ellipse1(300);
    ellipses1.push(ellipse1);
  }

  //ellipses for the cosmos scene
  for (let i = 0; i < numEllipses2; i++) {
    ellipse2 = new Ellipse2(250 * i);
    ellipses2.push(ellipse2);
  }

  //light effects 1 for the dynamic scene
  for (let i = 0; i < numlights; i++) {
    let x = 500;
    let y = 400;
    let size = 100;
    light1 = new LightFX(x + i, y, size, lightImg);
    lights1.push(light1);
  }

  //light effects 2 for the dynamic scene
  for (let i = 0; i < numlights; i++) {
    let x = 120
    let y = 200;
    let size = 10;
    light2 = new LightFX(x + i, y, size, lightImg);
    lights2.push(light2);
  }

  //light effects 3 for the dynamic scene
  for (let i = 0; i < numlights; i++) {
    let x = 350
    let y = 100;
    let size = 20;
    light3 = new LightFX(x + i / 2, y, size, lightImg);
    lights3.push(light3);
  }


  // the instances of the main figures
  angel = new Angel(angelImg, lightImg);
  fireman = new FireMan(firemanImg, lightImg);
  chameleonman = new ChameleonMan(chameleonManImg, lightImg);

  //fireballs for the cosmos scene
  fireball1 = new Fireball1();
  fireball2 = new Fireball2();

  //centrial visualizer
  centralVisualizer = new Visualizer();
}


function draw() {
  // orbitControl() allows movement around 3D scene using mouse/trackpad. Left-clicking and dragging will rotate camera position,
  // left-clicking and dragging will pan the camera positon without rotating,
  // using scroll-wheel will zoom in/out from the center of the sketch
  orbitControl(6, 6, 0.2);
  translate(0, 0, 0); //x, y, z positions the scene in the center

  // get the current time of the given song for better animation control
  currentTime1 = musicRock.currentTime();
  console.log(currentTime1);
  currentTime2 = musicOneTwo.currentTime()
  //console.log(currentTime2);

  //get the sound level to detect the "beats"
  volume = amp.getLevel();

  //map the volume number to a bigger size
  mapVolume = map(volume, 0, 0.3, 0.1, 100);

  //scale volume to a "good" number
  scaleVolume = map(volume, 0, 0.3, 0.5, 5);

  // get an array of frequency bands
  spectrum = fft.analyze();

  // get an amplitude of specific frequency bands
  bass = fft.getEnergy(`bass`); //bass for low frequency bands
  mid = fft.getEnergy(`mid`); // mid for mid frequency bands
  treble = fft.getEnergy(`treble`); //treble for high bands(sometimes mid and treble are mixed up)

  // map frequency value to a "good" amount
  mapBass = map(bass, 0, 255, 5, 300);
  mapMid = map(mid, 0, 255, 5, 600);
  mapTreble = map(treble, 0, 255, 5, 900);

  //console.log(mapBass)

  // states for different scenes
  if (state === `title`) {
    titleScreen();
  } else if (state === `danceAngel`) {
    danceAngel();
  } else if (state === `danceCosmos`) {
    danceCosmos();
  } else if (state === `danceDynamic`) {
    danceDynamic();
  }
}

////////Scene 3: dynamic dance
function danceDynamic() {
  background(mapVolume * 2, 0, 0); //dark-red bg that responds to song's volume
  light1.bgEffect();

  // shows rotating and floating light ellipses around the visualizer
  push();
  for (let i = 0; i < lights1.length; i++) {
    lights1[i].rotateFX1();
    lights1[i].lightFX1();
  }
  pop();

  // shows the rotating light FX close to the center of the the visualizer
  push();
  for (let j = 0; j < lights2.length; j++) {
    lights2[j].rotateFX2();
    lights2[j].lightFX2();
  }
  pop();

  // shows the rotating light FX along the edge of the visualizer
  push();
  for (let k = 0; k < lights3.length; k++) {
    lights3[k].rotateFX3();
    lights3[k].lightFX3();
  }
  pop();

  // show the cental audio visualizer
  push();
  centralVisualizer.display();
  pop();

  // shows the second layer of the light in the center
  push();
  chameleonman.displayLight2();
  pop();

  // shows the main "chameleon" figure alternating with light
  push();
  chameleonman.display1();
  pop();

  // shows the smaller dancing figure second time
  push();
  chameleonman.display2();
  pop();

}


////////Scene2: cosmos dance
function danceCosmos() {
  //dark blue background, responds to the sound amplitude
  background(0, 0, mapVolume / 2);

  // shows rotating orbital ellipses
  push();
  for (let i = 0; i < ellipses2.length; i++) {
    ellipses2[i].rotate();
    ellipses2[i].display();
  }
  pop();

  // shows main fireball in the center
  push();
  fireball1.rotate();
  fireball1.display();
  pop();

  // displays smaller fireballs rotating around the orbit
  push();
  fireball2.rotate();
  fireball2.display();
  pop()

  // shows the light in the center
  push();
  fireman.displayLight();
  pop();

  // shows rotating fireman figure
  push();
  fireman.rotate();
  fireman.display();
  pop();
}

///////// Scene1: angel dance
function danceAngel() {
  background(0, mapVolume - 10, mapVolume);

  // rotating ellipses
  for (let i = 0; i < ellipses1.length; i++) {
    ellipses1[i].rotate();
    ellipses1[i].display();
  }

  // displays rotating angel alternating with light
  push();
  angel.rotate();
  angel.display();
  pop();
}

// 3D title screen
function titleScreen() {
  titlescreen.draw();
}

//put all the songs play/stop methods into functions for better start/end time control
function music1Play() {
  musicXylophone.play()
}

function music2Play() {
  musicOneTwo.play()
}

function music3Play() {
  musicRock.play()
}

function music1Stop() {
  musicXylophone.stop()
}

function music2Stop() {
  musicOneTwo.stop()
}

function music3Stop() {
  musicRock.stop()
}

// change the screen when key ENTER is pressed
function keyPressed() {
  if (state === `title` && keyCode === ENTER) {
    state = `danceAngel`;
    timeOut1 = setTimeout(music1Play, musicDelayTime); //music starts after some delay
  } else if (state === `danceAngel` && keyCode === ENTER) {
    music1Stop();
    clearTimeout(timeOut1);
    state = `danceCosmos`;
    timeOut2 = setTimeout(music2Play, musicDelayTime);
    // jumpSong1();
  } else if (state === `danceCosmos` && keyCode === ENTER) {
    music2Stop();
    clearTimeout(timeOut2);
    state = `danceDynamic`;
    //musicRock.play()
    timeOut3 = setTimeout(music3Play, musicDelayTime);
    //jumpSong();
} else if (state === `danceDynamic` && keyCode === ENTER) {
  music3Stop();
  clearTimeout(timeOut3);
  state = `title`;
}
}

function jumpSong() {
  let len = musicRock.duration();
  musicRock.jump(250);
}

function jumpSong1() {
  let len = musicOneTwo.duration();
  musicOneTwo.jump(70);
}
