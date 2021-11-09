class Ellipses {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = size;
    this.minRotation = 0.009;
  }



rotate(){
  rotateX(frameCount * -this.minRotation);
  rotateY(frameCount * -this.minRotation);
  rotateZ(frameCount * -this.minRotation);
}

  display(){
    noFill();
    stroke(255);
    strokeWeight(1);

    ellipse(this.x, this.y, this.size, this.size);
  }
}
