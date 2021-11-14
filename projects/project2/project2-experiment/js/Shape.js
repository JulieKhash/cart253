class Shape {
  constructor(x, y, size, strokeColor, strokeSize) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.radius = width/6;

    this.strokeColor = strokeColor;
    this.strokeSize = strokeSize;

    // this.minRotationValue = frameCount * this.minRotationSpeed;
    // this.minRotationValue = frameCount * this.maxRotationSpeed;


    this.minRotationSpeed = 0.001;
    this.maxRotationSpeed = 0.01;

    this.active = true;

  }


display(){

}
}
