"use strict";

let wave;

let button;
let freqSlider;
let ampSLider;

let env;

let playing = false;

function setup(){
  createCanvas(300, 300);

  wave = new p5.Oscillator();

  env = new p5.Env();
  env.setADSR(0.01, 0.25, 0.5, 1);
  env.setRange(0.8, 0);

  wave.setType(`triangle`);
  wave.start();
  wave.amp(env);
  wave.freq(240);

//  freqSlider = createSlider(100, 400, 240);

  button = createButton(`play/pause`);
  button.mousePressed(toggle);
}


function draw(){
  if(playing){
    background(20);
  } else {
    background (255, 0, 0);
  }
}

function toggle(){
  env.play();
  // if(!playing) {
  //   playing = true;
  //   wave.start();
  //   wave.amp(env);
  //   wave.freq(240);
  // } else {
  //   wave.stop();
  //   playing = false;
  // }
}
