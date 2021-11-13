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

    this.mouseX;
    this.volume;
    this.mapVolume;

  }


  // getAmplitude(){
  //     musicXylophone.play();
  //
  //     this.volume = amp.getLevel();
  //     this.mapVolume = map(this.volume, 0, 0.3, 10, 600);

    // this.volume = amp.getLevel();
    // this.mapVolume = map(this.volume, 0, 0.3, 10, 600);
    // background(0, this.mapVolume / 7, this.mapVolume / 6);

    //this.mouseX = map(mouseX, 0, width, 0, 400);
  // }

  // mouseControl(){
  //   this.mouseX = map(mouseX, 0, width, 0, 400);
  // }

// rotates the ellipses in x, y, z positions
 rotateObject(){

  rotateX(frameCount * -this.minRotationSpeed*9);
  rotateY(frameCount * -this.minRotationSpeed*9);
  rotateZ(frameCount * -this.minRotationSpeed*9);
}

  display(){
    push();
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.strokeSize);
    ellipse(this.x, this.y, this.size, mouseX);
    pop();
  }
}
