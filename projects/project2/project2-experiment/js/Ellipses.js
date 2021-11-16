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
    super.control();

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

    this.active = true;
  }

  rotate() {

    rotateX(frameCount * this.minRotationSpeed * 4);
    rotateY(frameCount * this.minRotationSpeed * 4);
    rotateZ(frameCount * this.minRotationSpeed * 4);

  }

  display() {
    push();
    if(this.active && currentTime2 < 414) {
    noFill();
    stroke((mapMid / 4) * scaleVolume, (mapMid / 4) * scaleVolume, mapTreble * 2 + mapMid + scaleVolume, mapMid / 3);
    strokeWeight(scaleVolume / 3);
    ellipse(this.x, this.y, this.size + scaleVolume * 4);
  } else {
    this.active = false;
  }
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
    this.maxSoundThreshold = 40;
    this.lightImg = lightImg;

    this.active = true;
  }

//makes the background flashy with the higher volume
  bgEffect(){
    if  (mapVolume > this.maxSoundThreshold){
    background(mapVolume * 3, mapVolume * 3, mapVolume * 3);
  }
}

  rotate() {
    rotateX(frameCount * -this.maxRotationSpeed);
    rotateY(frameCount *  this.maxRotationSpeed);
    rotateZ(frameCount * -this.maxRotationSpeed);
  }

  rotate2(){
    rotate(frameCount * this.maxRotationSpeed*2 + mapVolume);
    rotateZ(frameCount * -this.maxRotationSpeed);
  }

  rotate3(){
    rotate(frameCount * this.maxRotationSpeed*2 + mapVolume);
    rotateZ(frameCount * -this.maxRotationSpeed);
  }


  display2() {
    push();
    noStroke();
    //stroke(mapTreble, mapMid / 2, 10)
    if (!this.active || mapVolume > this.maxSoundThreshold){
      texture(lightImg);
      ellipse(this.x, this.y, this.size + mapBass/4);
    }
    pop();
    }

    display3(){
      push();
      noStroke();
      if (!this.active || mapBass > 270){
        texture(lightImg);
        ellipse(this.x, this.y, this.size + mapBass/3);
      }
      pop();
      }


  display() {
    push();
    // makes the rotating ellipses appear and stay when soundThreshold reached
    // if (this.active || mapVolume >= this.maxSoundThreshold) {
    if (!this.active && currentTime1 > 102.1 && currentTime1 < 277) {

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
