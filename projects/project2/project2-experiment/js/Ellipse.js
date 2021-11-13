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


  getAmplitude(){
    this.volume = amp.getLevel();
    this.mapVolume = map(this.volume, 0, 0.3, 10, 600);

    background(0, this.mapVolume / 7, this.mapVolume / 6);

    this.minRotationValue = frameCount * this.minRotationSpeed;
    this.maxRotationValue = frameCount * this.maxRotationSpeed;
  }

  mouseControl(){
    this.mouseX = map(mouseX, 0, width, 0, 400);
  }

// rotates the ellipses in x, y, z positions
 rotate(){
  rotateX(-this.minRotationValue*9);
  rotateY(-this.minRotationValue*9);
  rotateZ(-this.minRotationValue*9);
}

  display(){
    push();
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.strokeSize);
    ellipse(this.x, this.y, this.size, this.mouseX + this.size);
    pop();
  }
}
