
"use strict";

let music;
let amp;

let button;
let jumpButton;

let sliderVolume;
let sliderRate;   //rate is he speed of the song
let sliderPan;


function preload() {
  music = loadSound(`assets/sounds/Germind.mp3`);
}


function setup() {
  createCanvas(400, 400);

  button = createButton(`play`);
  button.mousePressed(togglePlaying);
  jumpButton = createButton( `jump`);
  jumpButton.mousePressed(jumpMusic);

  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);
  sliderPan = createSlider(0, 1, 0.5, 0.01);

  amp = new p5.Amplitute();
}


function togglePlaying(){
  if(! music.isPlaying()){
    music.play();

    music.setVolume(sliderVolume.value())
    music.rate(sliderRate.value());
    music.pan(sliderPan.value());

    button.html("pause");
  } else {
    music.pause();
    button.html("play");
  }
}


function changeBackground(){
  background(random(255), random(255), 0);
}

function jumpMusic(){
  let musicLen = music.duration();
  let t = random(musicLen);
  console.log(t);
  music.jump(t);

}

function draw() {
  background(0);

  let vol = amp.getLevel()

  fill(255, 0, 0);
  ellipse(width/2, height/2, vol);
}
