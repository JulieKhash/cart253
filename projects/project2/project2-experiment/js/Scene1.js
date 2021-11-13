class Angel {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 300

    this.minRotationSpeed = 0.001;
    this.maxRotationSpeed = 0.01;

  }

  rotate(){
    rotateX(frameCount * -this.minRotationSpeed*8);
    rotateY(frameCount * -this.minRotationSpeed*8);
    rotateZ(frameCount * -this.minRotationSpeed*8);

  }

  display(){
    texture(lightImg){
    ellipse(this.x, this.y, this.size + mapVolume / 2);
    }
  }

  // draw(){
  //   this.display();
  // }
}
