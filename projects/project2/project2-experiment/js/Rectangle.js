class Rectangle extends Shape {
  constructor() {
    super();
    this.x = undefined;
    this.y = undefined;
    this.size = undefined;

    this.stroke = undefined;
    this.strokeWeight = undefined;


    this.active = true;
  }

  rotate(){
    rotate(frameCount* this.maxRotationSpeed * 3 + mapVolume*2);
    rotateZ(frameCount * -this.minRotationSpeed);
  }


  display(){

    if (this.active) {
    push();
    for (let i = 0; i < spectrum.length; i++) {
      let x = this.radius * cos(i);
      let y = this.radius * sin(i);
      this.size = mapTreble / 4
      this.rotate();
      noFill();
      stroke(mapTreble, mapMid/2, 0, mapVolume);
      rectMode(CENTER);
      rect(x, y +  mapTreble / 4 - mapBass, this.size);
  }
      pop();
}

// for (let i = 0; i < this.numRect; i++){
//    rect(x, y + mapBass - mapTreble, this.size + mapTreble / 3);
// }


}
}
