// class for Ellipses;
class Ellipse {
  constructor(x, y, size, strokeColor, strokeSize) {
    super(x, y);

    this.size = size;
    this.strokeColor = strokeColor;
    this.strokeSize = strokeSize;

  }

//rotate ellipses based on x, y, z axes
 rotate_object() {
  super.rotate_object(){
  }
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
