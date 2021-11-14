class Angel extends Shape {
  constructor(angelImg, lightImg) {
    super()
    this.x = 0;
    this.y = 0;
    this.size = 300;
    this.strokeColor = 250
    this.strokeSize = 1;

    this.imageAngel = angelImg;
    this.imageLight = lightImg;

    this.soundThreshold = 60;
  }

  rotate() {
    rotateX(frameCount * -this.minRotationSpeed * 8);
    rotateY(frameCount * -this.minRotationSpeed * 8);
    rotateZ(frameCount * -this.minRotationSpeed * 8);
  }

  display() {

    push();
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.strokeSize);

    if (mapVolume > this.soundThreshold) {
      texture(lightImg);
    } else {
      texture(angelImg);
    }
    ellipse(this.x, this.y, this.size + mapVolume * 3);
    pop();
  }

  // draw(){
  //   this.display();
  // }
}
