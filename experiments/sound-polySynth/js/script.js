"use strict";

let synth;
let notes = [`Fb2`, `G2`, `Ab4`, `Db5`, `Eb4`, `Fb4`];
let currentNote = 0;



function setup() {
  createCanvas(600, 600);

  synth = new p5.PolySynth();

  userStartAudio();

}

function draw() {
  background(0);

}

function keyPressed(){

//start random ghost player
setInterval(playRandomNote, 500);
}

function playRandomNote(){
  // let randomNote = random(notes);
  // synth.play(randomNote, 1, 0, 0.3);

  let note = notes[currentNote];    //play a note in order
  synth.play(note, 1, 0, 0.3);

  currentNote += 1;
  if (currentNote === notes.length){
    currentNote = 0;
  }
}
