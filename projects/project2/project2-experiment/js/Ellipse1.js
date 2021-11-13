class Ellipse1 extends Shape {
  constructor(x, y) {
    super(x, y);
    this.size = 300;
    this.strokeColor = 255
    this.strokeSize = 1;
}
rotate(){

  this.mapMouseX = map(mouseX, 0, width, 0, 400);

  rotateX(frameCount * -this.minRotationSpeed*9);
  rotateY(frameCount * -this.minRotationSpeed*9);
  rotateZ(frameCount * -this.minRotationSpeed*9);
}

display(){

  push();
  noFill();
  stroke(this.strokeColor);
  strokeWeight(this.strokeSize);
  ellipse(this.x, this.y, this.size, this.mapMouseX * 5 + mapVolume);
  pop();
}


// keyPressed(){
//   musicXylophone.loop();
// }
}


// class Ellipse2

// class Ellipse 3
