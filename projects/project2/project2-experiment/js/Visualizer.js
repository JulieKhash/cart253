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
    rotate(frameCount * this.maxRotationSpeed*2 + mapVolume*2);
    rotateZ(frameCount * -this.minRotationSpeed);
  }


  display() {

    if (this.active && currentTime1 < 305) {
      push();
      for (let i = 0; i < spectrum.length; i++) {
        this.rotate();
        let x = this.radius * cos(i);
        let y = this.radius * sin(i);
        this.size = mapTreble / 3
        noFill();
        stroke(mapTreble, mapMid/2+10, mapVolume/4, mapVolume/2);
        rectMode(CENTER);
        rect(x, y + mapTreble - mapBass, this.size);
      }
      pop();
    } else {
       this.active = false;


  }
}
}
