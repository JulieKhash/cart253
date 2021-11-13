class EllipseAngel extends Ellipse {
  constructor(x, y, size, strokeColor, strokeSize) {
    super(x, y, size, strokeColor, strokeSize);

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
  ellipse(this.x, this.y, this.size, this.mapMouseX * 5);
  pop();
}

}
