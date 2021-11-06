"use strict";

let numRect = 4;
let rects = [];

function setup() {
  createCanvas(400, 400, WEBGL);

  for (let i = 0; i < numRect; i++) {
    let x = width / 2;
    let y = height / 2;
    let vx = random(-1,1);
    let vy = random(-1,1);
    let size = random(20, 30*i);
    let rectangle = new Rect(x, y, vx*i, vy*i, size);
    rects.push(rectangle);
  }
}

  function draw() {
    background(0);

    for (let i = 0; i < rects.length; i++) {
    let rectangle = rects[i];
    rectangle.move();
    rectangle.display();
  }
}
   //console.log(rects.length)
