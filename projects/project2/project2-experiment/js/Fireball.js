class Fireball1 extends Shape {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.size = 80;
  }

  rotate() {
    rotate(frameCount * this.maxRotationSpeed * 5)
    rotateX(frameCount * this.maxRotationSpeed)
    rotateY(frameCount * this.maxRotationSpeed)
    rotateZ(frameCount * this.maxRotationSpeed)
  }


  display() {
    push();
    noStroke()
    texture(fireballImg)
    sphere(this.size + scaleVolume * 1.5);
    pop();

  }
}


class Fireball2 extends Shape {
  constructor(x, y, size) {
    super();
    this.x = x;
    this.y = y;
    this.size = size;
  }

  rotate() {
    rotate(frameCount * -this.minRotationSpeed * 3)
    rotateY(frameCount * this.minRotationSpeed * 3)
    rotateZ(frameCount * -this.minRotationSpeed * 3)
  }

  display() {
    push();
    noFill();
    stroke(255);
    //noStroke()
    //texture(fireballImg)
    sphere(this.size + scaleVolume * 2);
    pop();

  }

}
