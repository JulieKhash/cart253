class Angel {
  constructor(image) {
    this.x = 0;
    this.y = 0;
    this.size = 300;

    this.image = image

    this.minRotationSpeed = 0.001;
    this.maxRotationSpeed = 0.01;
}

  rotate(){
    rotateX(frameCount * -this.minRotationSpeed*8);
    rotateY(frameCount * -this.minRotationSpeed*8);
    rotateZ(frameCount * -this.minRotationSpeed*8);
  }

  display(){
    texture(this.image)
    ellipse(this.x, this.y, this.size);
  }

  // draw(){
  //   this.display();
  // }
}
