//defining an Ellipse1 class for the Angel Scene
class Ellipse1 extends Shape {
  constructor(size) {
    super();
    this.x = 0;
    this.y = 0;
    this.size = size;
    this.strokeColor = 255
    this.strokeSize = 1;
  }

  rotate() {
    super.control(); //mouseX

    rotateX(frameCount * -this.minRotationSpeed * 8);
    rotateY(frameCount * -this.minRotationSpeed * 8);
    rotateZ(frameCount * -this.minRotationSpeed * 8);
  }

  display() {
    push();
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.strokeSize);
    ellipse(this.x, this.y, this.size, this.mapMouseX * 5 + mapVolume * 2); //Width responds to the mouseX movement
    pop();
  }
}

// a class Ellipse2 for the Cosmos Dance scene
class Ellipse2 extends Shape {
  constructor(size) {
    super();
    this.x = 0;
    this.y = 0;
    this.size = size;
    this.strokeColor = undefined;
    this.strokeSize = undefined;
    this.active = true;
  }

  rotate() {

    rotateX(frameCount * this.minRotationSpeed * 4);
    rotateY(frameCount * this.minRotationSpeed * 4);
    rotateZ(frameCount * this.minRotationSpeed * 4);

  }

  //the orbit activates and responds to the sounds between given song times
  display() {
    push();
    if (this.active && currentTime2 > 1 || currentTime2 < 414) {
      noFill();
      //stroke responds to the mid and high sound ranges, along with the volume
      stroke((mapMid / 4) * scaleVolume, (mapMid / 4) * scaleVolume, mapTreble * 2 + mapMid + scaleVolume, mapMid / 3);
      strokeWeight(scaleVolume / 3);
      ellipse(this.x, this.y, this.size + scaleVolume * 4); //orbital dimension grows with the higher volume
    } else {
      this.active = false;
    }
    pop();
  }
}
