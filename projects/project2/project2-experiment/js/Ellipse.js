class Ellipse {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.strokeColor = 255;
    this.strokeSize = 1;

    this.active = true;

    this.minRotationSpeed = 0.001;
    this.maxRotationSpeed = 0.01;


  }




// rotates the ellipses in x, y, z positions
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
