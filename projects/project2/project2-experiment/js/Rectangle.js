class Rectangle extends Shape {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.size = undefined;

    this.stroke = undefined;
    this.strokeWeight = undefined;

    this.numRect = 30;

    this.active = true;
  }

  rotate(){

    rotate(frameCount* maxRotationSpeed * 3 + mapVolume * 2);
    rotateZ(frameCount * -minRotationSpeed);
  }


  display(){
    if (this.active) {
    push();
    for (let i = 0; i < spectrum.length; i++) {
      let x = this.radius * cos(i);
      let y = this.radius * sin(i);
      stroke(mapTreble, mapMid/2, 0, volume);
      rectMode(CENTER);
      rect(x, y + mapBass - mapTreble, mapTreble / 3);
  }
      pop();
}
}
}
