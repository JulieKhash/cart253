//defining an Ellipse1 class for the Angel Dance scene
class Ellipse1 extends Shape {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.size = 300;
    this.strokeColor = 255
    this.strokeSize = 1;

    this.mapMouseX;
}

rotate(){

  this.mapMouseX = map(mouseX, 0, width, 0, 200);

  rotateX(frameCount * -this.minRotationSpeed*8);
  rotateY(frameCount * -this.minRotationSpeed*8);
  rotateZ(frameCount * -this.minRotationSpeed*8);

}

display(){

  push();
  noFill();
  stroke(this.strokeColor);
  strokeWeight(this.strokeSize);
  ellipse(this.x, this.y, this.size, this.mapMouseX * 5 + mapVolume);
  pop();
}

}

// an Ellipse2 class for the Fire Dance scene
class Ellipse2 extends Shape {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.size = 350;
    this.strokeColor = undefined;
    this.strokeSize = undefined;
}

rotate(){

  push();
  rotateX(frameCount * this.minRotationSpeed*5);
  rotateY(frameCount * this.minRotationSpeed*5);
  rotateZ(frameCount * this.minRotationSpeed*5);
  pop();
}

display(){
  push();
  noFill();
  stroke(mapMid / 3 * scaleVolume / 2, mapMid / 3 * scaleVolume / 2, mapTreble * 2 + mapMid, mapMid);
  strokeWeight(scaleVolume / 4);
  ellipse(this.x, this.y, this.size * 6 + scaleVolume);
  pop();
}
}

// class Ellipse 3
