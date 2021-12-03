// a superclass Shape that contains the most common properties for all subclass objects (extends Shape class)
class Shape {
  constructor(x, y, size, strokeColor, strokeSize) {
    this.x = 0;
    this.y = 0;
    this.size = size;
    this.radius = width / 6;

    this.mapMouseX;

    this.minRotationSpeed = 0.001;
    this.maxRotationSpeed = 0.01;
  }

  // map the mouse distance for better control
  control() {
    this.mapMouseX = map(mouseX, 0, width, 0, 200);
  }

  display() {

  }
}
