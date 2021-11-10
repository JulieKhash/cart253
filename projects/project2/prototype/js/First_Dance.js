// should be the fisrt dance scene that will have a character object that moves with the sound
// need to figure out how to inherit from the Ellipse class
class First_Dance  {
  constructor(x, y, size, templateImage) {
    this.x = 0;
    this.y = 0;
    this.size = size;
    this.minRotation = 0.008;
    this.strokeColor = 255;
    this.strokeSize = 1;
    this.image = templateImage;
  }

rotate(){
  rotateX(frameCount * -this.minRotation);
  rotateY(frameCount * -this.minRotation);
  rotateZ(frameCount * -this.minRotation);
}

  display(){
    texture(this.image);
    stroke(this.strokeColor);
    strokeWeight(this.strokeSize);
    rectMode(CENTER)
    ellipse(0, 0, this.size, this.size);
  }
}
