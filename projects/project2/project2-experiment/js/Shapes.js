//super class for Shapes
class Shapes {
  constructor(x, y) {
    this.x = 0;
    this.y = 0;



    this.minRotationSpeed = 0.001;
    this.maxRotationSpeed = 0.01;

    this.minRotationValue = frameCount * minRotationSpeed;
    this.maxRotationValue = frameCount * minRotationSpeed;

    this.mouseX = map(mouseX, 0, width, 0, 400);
  }

  rotate_object(){

    rotate(this.minRotationValue);
    rotate(this.maxRotationValue);

    rotateX(this.minRotationValue);
    rotateX(this.maxRotationValue);

    rotateY(this.minRotationValue);
    rotateY(this.maxRotationValue);

    rotateZ(this.minRotationValue);
    rotateZ(this.maxRotationValue);

  }

// will be defined in child classes
  display(){
  }
}
