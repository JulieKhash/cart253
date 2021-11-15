class Visualizer extends Shape {
  constructor() {
    super();
    this.x = undefined;
    this.y = undefined;
    this.size = undefined;

    this.stroke = undefined;
    this.strokeWeight = undefined;

    this.active = true;
  }

  rotate() {
    rotate(frameCount * this.maxRotationSpeed * 3 + mapVolume * 2);
    rotateZ(frameCount * -this.minRotationSpeed);
  }


  display() {

    if (this.active) {
      push();
      for (let i = 0; i < spectrum.length; i++) {

        let x = this.radius * cos(i);
        let y = this.radius * sin(i);
        this.size = mapTreble / 3
        this.rotate();
        noFill();
        stroke(mapTreble, mapMid / 2, 0, mapVolume);
        rectMode(CENTER);
        rect(x, y + mapTreble - mapBass, this.size);
      }
      pop();
    }


  }
}
