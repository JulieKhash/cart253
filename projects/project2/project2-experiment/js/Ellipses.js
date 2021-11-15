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

  rotate() {

    this.mapMouseX = map(mouseX, 0, width, 0, 200);

    rotateX(frameCount * -this.minRotationSpeed * 8);
    rotateY(frameCount * -this.minRotationSpeed * 8);
    rotateZ(frameCount * -this.minRotationSpeed * 8);

  }

  display() {

    push();
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.strokeSize);
    ellipse(this.x, this.y, this.size, this.mapMouseX * 5 + mapVolume * 2);
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
  }

  rotate() {

    rotateX(frameCount * this.minRotationSpeed * 4);
    rotateY(frameCount * this.minRotationSpeed * 4);
    rotateZ(frameCount * this.minRotationSpeed * 4);

  }

  display() {
    push();
    noFill();
    stroke((mapMid / 4) * scaleVolume, (mapMid / 4) * scaleVolume, mapTreble * 2 + mapMid + scaleVolume, mapMid / 3);
    strokeWeight(scaleVolume / 3);
    ellipse(this.x, this.y, this.size + scaleVolume * 4);
    pop();
  }
}

// a class of rotating ellipses for the Dynamic Dance scene
class Ellipse3 extends Shape {
  constructor(x, y, size, lightImg) {
    super();
    this.x = x;
    this.y = y;
    this.size = size;
    this.strokeColor = undefined;
    this.strokeSize = undefined;
    this.minSoundThreshold = 30;
    this.maxSoundThreshold = 50;
    this.lightImg = lightImg;

    this.active = true;
  }

//makes the background flashy with the higher volume
  effect(){
    if  (mapVolume > this.maxSoundThreshold){
    background(mapVolume * 2, mapVolume * 2, mapVolume * 2);
  }
}

  rotate() {
    rotateX(frameCount * -this.maxRotationSpeed);
    rotateY(frameCount *  this.maxRotationSpeed);
    rotateZ(frameCount * -this.maxRotationSpeed);
  }



  display() {
    push();
    // makes the ellipses appear and stay once reached the soundThreshold
    // if (this.active || mapVolume >= this.maxSoundThreshold) {
    if (!this.active && currentTime > 101 && currentTime < 277) {


      noFill();
      stroke(mapTreble, mapMid / 2, 0, mapVolume);
      texture(lightImg);
      ellipse(this.x, this.y, this.size);
    }  else {
      this.active = false;
    }
      pop();

  }
}

// a class Ellipse4 that adds the flashy effect inside the Visualizer
// class Ellipse4 extends Shape {
//   constructor(x, y, size, lightImg) {
//   super();
//   this.x = x;
//   this.y = y;
//   this.size = size;
//   this.strokeColor = undefined;
//   this.strokeSize = undefined;
//   this.maxSoundThreshold = 50;
//   this.lightImg = lightImg;
//
//   this.active = false;
//
// }
// }
