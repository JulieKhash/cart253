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

}


// class fireman
class FireMan extends Shape {
  constructor(fireman, lightImg) {
    super()
    this.x = 0;
    this.y = 0;
    this.size = 300;
    this.strokeColor = 250
    this.strokeSize = 1;
    this.soundThreshold = 250;

    this.imageFireMan = firemanImg;
    this.imageLight = lightImg

  }

  rotate() {
    rotate(frameCount * -this.maxRotationSpeed)
    rotateX(frameCount * this.minRotationSpeed * 5);
    rotateY(frameCount * this.minRotationSpeed * 5);

  }

  rotateLight(){
    rotate(frameCount * -this.maxRotationSpeed)
    rotateX(frameCount * -this.minRotationSpeed * 5);
    rotateY(frameCount * -this.minRotationSpeed * 5);
    rotateZ(frameCount * -this.minRotationSpeed * 5);
  }


  display(){
    this.displayLight();
  }

  displayLight() {
  push();
 if (mapMid > this.soundThreshold) {
   this.rotateLight();
   noStroke();
   texture(lightImg);
   ellipse(this.x, this.y, mapBass + mapMid * 2 + mapTreble);
 } else {
   this.displayFireman()
 }
  pop();
}

displayFireman(){
    push();
    imageMode(CENTER);
    image(this.imageFireMan, 0, 250, (3000 / 4) + mapVolume + mapTreble / 2, (4000 / 4)
     + mapVolume + mapTreble / 2);
     pop()
  }
}



// class ChameleonMan
class ChameleonMan extends Shape{
  constructor(chameleonManImg, lightImg) {
    super();
    this.x = 0;
    this.y = 0;
    this.size = undefined;
    this.sizeW = undefined;
    this.sizeH = undefined;
    this.imageChameleonMan = chameleonManImg

    this.minSoundThreshold = 30;
    this.maxSoundThresold = 110;
  }


  rotateLight1(){
    push();
    rotate(frameCount * this.maxRotationSpeed*5);
    pop();
  }

  rotate(){
    rotate(frameCount * this.minRotationSpeed);
    rotateY(frameCount * -this.minRotationSpeed*7);
  }

  display(){
    push();
    imageMode(CENTER);
    if(mapVolume > this.minSoundThreshold) {
      this.rotateLight1();
      this.size = mapVolume + mapTreble, mapVolume + mapTreble
      image(lightImg, this.x, this.y,  this.size, this.size);
} else {
    this.sizeW = 3000 / mapTreble + mapVolume*2;
    this.sizeH = 4000 / mapTreble + mapVolume*2;
    image(chameleonManImg, this.x, this.y, this.sizeW, this.sizeH);
    pop();
  }
}


}
