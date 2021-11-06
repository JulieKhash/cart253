"use strict";

let numRect = 4;
let rects = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < numRect; i++) {
    let x = width / 2;
    let y = height / 2;
    let size = 100;
    let rectangle = new Rect(x, y, size);
    rects.push(rectangle);
  }
}

  function draw() {
    background(0);

    for (let i = 0; i < rects.length; i++) {
    let rectangle = rects[i];
    rectangle.display();
  }
}
   //console.log(rects.length)
