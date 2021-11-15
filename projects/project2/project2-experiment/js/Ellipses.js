//defining an Ellipse1 class for the Angel Dance scene
class Ellipse1 extends Shape {
  constructor(size) {
    super();
    this.x = 0;
    this.y = 0;
    this.size = size;
    this.strokeColor = 255
    this.strokeSize = 1;

    this.mapMouseX;
}

rotate(){

  this.mapMouseX = map(mouseX, 0, width, 0, 200);

  rotateX(frameCount * -this.minRotationSpeed*8);
  rotateY(frameCount * -this.minRotationSpeed*8);
  rotateZ(frameCount * -this.minRotationSpeed*8);

}

display(){

  push();
  noFill();
  stroke(this.strokeColor);
  strokeWeight(this.strokeSize);
  ellipse(this.x, this.y, this.size, this.mapMouseX * 5 + mapVolume*2);
  pop();
}

}

// a class Ellipse2 for the Fire Dance scene
class Ellipse2 extends Shape {
  constructor(size) {
    super();
    this.x = 0;
    this.y = 0;
    this.size = size;
    this.strokeColor = undefined;
    this.strokeSize = undefined;
}

rotate(){

  rotateX(frameCount * this.minRotationSpeed*4);
  rotateY(frameCount * this.minRotationSpeed*4);
  rotateZ(frameCount * this.minRotationSpeed*4);

}

display(){
  push();
  noFill();
  stroke((mapMid/4) * scaleVolume, (mapMid/4) * scaleVolume, mapTreble*2 + mapMid + scaleVolume, mapMid/3);
  strokeWeight(scaleVolume/3);
  ellipse(this.x, this.y, this.size + scaleVolume * 4);
  pop();
}
}

// a class Ellipse3 for the Fire Dance scene
class Ellipse3 extends Shape{
  constructor(x, lightImg) {
    super();
    this.x = x;
    // this.y = y;
    this.size = undefined;
    this.strokeColor = undefined;
    this.strokeSize = undefined;
    this.maxSoundThreshold = 50;
    this.lightImg = lightImg;

    this.active = false;
  }

  rotate(){
    rotateX(frameCount * -this.maxRotationSpeed);
    rotateY(frameCount *  this.maxRotationSpeed);
    rotateZ(frameCount * -this.maxRotationSpeed);
  }


  display(){
    push();
    if (mapVolume > this.maxSoundThresold){
    background(mapVolume*2, mapVolume*2, mapVolume*2);
    this.effect()
    // this.active = true;
    this.size = 350;
    tecture(lightImg);
    ellipse(this.size, this.size, this.size/3);
    pop();
  }
}

}
