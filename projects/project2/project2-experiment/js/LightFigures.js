// a class for the Angel
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


//a class for the Fire Man
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
    this.active = true;
  }

  rotate() {
    rotate(frameCount * -this.maxRotationSpeed)
    rotateX(frameCount * this.minRotationSpeed * 5);
    rotateY(frameCount * this.minRotationSpeed * 5);

  }

  rotateLight() {
    rotate(frameCount * -this.maxRotationSpeed)
    rotateX(frameCount * -this.minRotationSpeed * 5);
    rotateY(frameCount * -this.minRotationSpeed * 5);
    rotateZ(frameCount * -this.minRotationSpeed * 5);
  }


  display() {
    this.displayLight();
    this.displayFireman();
  }

  displayLight() {
    push();
    if (mapMid > this.soundThreshold) {
      this.rotateLight();
      noStroke();
      texture(lightImg);
      ellipse(this.x, this.y, mapBass + mapMid * 2 + mapTreble);
      // } else {
      //   this.displayFireman()
      // }
      pop();
    }
  }

  //   displayFireman() {
  //     push();
  //     imageMode(CENTER);
  //     image(this.imageFireMan, 0, 250, (3000 / 4) + mapVolume + mapTreble / 2, (4000 / 4) +
  //       mapVolume + mapTreble / 2);
  //     pop()
  //   }
  // }

  // displays a fireman figure until given time and makes it appear almsot in the end
  displayFireman() {
    push();
    if (this.active && currentTime2 < 35 || currentTime2 > 390) {
      texture(firemanImg);
      stroke((mapMid / 4) * scaleVolume, (mapMid / 4) * scaleVolume, mapTreble * 2 + mapMid + scaleVolume, mapMid / 3);
      ellipse(this.x, this.y, 1000 + mapVolume + mapTreble / 2);
    } else {
      this.active = false;
    }
    pop();
  }
}

//a class for Chameleon Man
class ChameleonMan extends Shape {
  constructor(chameleonManImg, lightImg) {
    super();
    this.x = 0;
    this.y = 0;
    this.size = undefined;
    this.sizeW = undefined;
    this.sizeH = undefined;
    this.imageChameleonMan = chameleonManImg

    this.minVolumeThreshold = 25;
    this.maxVolumeThresold = 45;
  }

  rotateLight2() {
    rotate(frameCount * this.minRotationSpeed * 8);
  }

  rotateLight1() {
    rotate(frameCount * this.maxRotationSpeed * 5);
  }

  rotateMan2() {
    rotate(frameCount * this.minRotationSpeed * 8);
  }

  rotateMan1() {
    rotate(frameCount * this.minRotationSpeed);
    rotateY(frameCount * -this.minRotationSpeed * 5);
  }


  display() {
    push();
    imageMode(CENTER);
    if (mapVolume > this.minVolumeThreshold) {
      this.rotateLight1();
      this.size = mapVolume + mapTreble, mapVolume + mapTreble
      image(lightImg, this.x, this.y, this.size, this.size);
    } else {
      this.rotateMan1();
      this.sizeW = 3000 / mapTreble + mapVolume * 2;
      this.sizeH = 4000 / mapTreble + mapVolume * 2;
      image(chameleonManImg, this.x, this.y, this.sizeW, this.sizeH);
    }
    pop();
  }

  // displays rotating figure and light that adds the double effect
  display2() {
    push();
    imageMode(CENTER);
    if (mapVolume > this.maxVolumeThresold) {
      this.rotateLight2();
      this.size = mapVolume + mapTreble * 2
      image(lightImg, this.x, this.y, this.size, this.size);
      this.rotateMan2();
      this.sizeW = 3000 / mapTreble + mapVolume * 2;
      this.sizeH = 4000 / mapTreble + mapVolume * 2;
      image(chameleonManImg, this.x, this.y, this.sizeW, this.sizeH);
    }
    pop();
  }


}
