class Ellipse {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.strokeColor = 255;
    this.strokeSize = 1
    this.minRotation = 0.009;
    this.active = true;


  }

// rotates the ellipses in x, y, z positions
rotate(){
  rotateX(frameCount * -this.minRotation);
  rotateY(frameCount * -this.minRotation);
  rotateZ(frameCount * -this.minRotation);
}

  display(){

    // push();
    // imageMode(CENTER);.
    // image(this.cursor, this.cursorX, this.cursorY);
    // pop();
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y);
    pop();

    push();
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.strokeSize);
    ellipse(this.x, this.y, this.size, mouseX + this.size);
    pop();
  }
}
