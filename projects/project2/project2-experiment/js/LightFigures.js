// a class for the Angel
class Angel extends Shape {
  constructor(x, y, angelImg, lightImg) {
    super(x, y)
    this.size = 300;
    this.strokeColor = 250
    this.strokeSize = 1;
    this.imageAngel = angelImg;
    this.imageLight = lightImg;
    this.soundThreshold = 60;
  }

  // rotates angel/light inside the ellipse
  rotate() {
    rotateX(frameCount * -this.minRotationSpeed * 5);
    rotateY(frameCount * -this.minRotationSpeed * 5);
    rotateZ(frameCount * -this.minRotationSpeed * 5);
  }

  // shows angel image alternating with light based on a given soundThreshold
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
  constructor(x, y, fireman, lightImg) {
    super(x, y);
    this.size = 300;
    this.strokeColor = 250
    this.strokeSize = 1;
    this.soundThreshold = 270;
    this.imageFireMan = firemanImg;
    this.imageLight = lightImg
    this.active = true;
  }

  // rotates fireman figure
  rotate() {
    rotate(frameCount * -this.maxRotationSpeed)
    rotateX(frameCount * this.minRotationSpeed * 5);
    rotateY(frameCount * this.minRotationSpeed * 5);

  }

  // rotates light in the center
  rotateLight() {
    rotate(frameCount * -this.maxRotationSpeed)
    rotateX(frameCount * -this.minRotationSpeed * 5);
    rotateY(frameCount * -this.minRotationSpeed * 5);
    rotateZ(frameCount * -this.minRotationSpeed * 5);
  }


  // displays a light in the the center once it reaches given soundThreshold
  displayLight() {
    push();
    if (mapMid > this.soundThreshold) {
      this.rotateLight();
      noStroke();
      texture(lightImg);
      ellipse(this.x, this.y, mapBass * 1.5 + mapMid * 2 + mapTreble); //growing size by the end, with the higher bass/mid/treble together
      pop();
    }
  }

  // displays a fireman figure until a given time and makes it appear closer to the end
  display() {
    push();
    if (this.active && currentTime2 < 35 || currentTime2 > 390) {
      texture(firemanImg);
      stroke((mapMid / 4) * scaleVolume, (mapMid / 4) * scaleVolume, mapTreble * 2 + mapMid + scaleVolume, mapMid / 3);
      ellipse(this.x, this.y, this.size * 3 + mapTreble);
    } else {
      this.active = false;
    }
    pop();
  }
}

//a class for the Chameleon Man
class ChameleonMan extends Shape {
  constructor(x, y, chameleonManImg, lightImg) {
    super(x, y);
    this.size = undefined;
    this.sizeW = undefined;
    this.sizeH = undefined;
    this.imageChameleonMan = chameleonManImg
    this.minVolumeThreshold = 25;
    this.maxVolumeThresold = 45;
  }

  // rotates second light
  rotateLight2() {
    rotate(frameCount * this.minRotationSpeed * 8);
  }

  // rotates first light
  rotateLight1() {
    rotate(frameCount * this.maxRotationSpeed * 5);
  }

  // rotates smaller figure
  rotateMan2() {
    rotate(frameCount * this.maxRotationSpeed * 5);
  }

  // rotates main figure
  rotateMan1() {
    rotate(frameCount * this.minRotationSpeed);
    rotateY(frameCount * -this.minRotationSpeed * 5);
  }

  //NOTE: I put some of the light effects here because they closely interact with the main figures.

  // displays rotating light that adds the double light effect in the center
  displayLight2() {
    push();
    imageMode(CENTER);
    if (mapVolume > this.maxVolumeThresold) {
      this.rotateLight2();
      this.size = mapVolume + mapTreble * 2
      image(lightImg, this.x, this.y, this.size, this.size);
    }
    pop();
  }

  // displays the smaller figure in the center after hiting given max volume
  display2() {
    push();
    imageMode(CENTER);
    noStroke();
    if (mapVolume > this.maxVolumeThresold) {
      this.rotateMan2();
      this.size = 3000 / mapTreble + mapVolume * 3;
      texture(chameleonManImg); //using texture inside the ellipse cuz had issues with glitch
      ellipse(this.x, this.y, this.size)
    }
    pop();
  }

  // displays the main figure in the center alternating with light
  display1() {
    push();
    imageMode(CENTER);
    //starts showing the light when reachign the given min volume
    if (mapVolume > this.minVolumeThreshold) {
      this.rotateLight1();
      this.size = mapVolume + mapTreble;
      image(lightImg, this.x, this.y, this.size, this.size);
      //else shows the main figure if less then a minimum volume (slowly starts and stops dancing)
    } else {
      this.rotateMan1();
      // size reconfigues according to the higher notes and volume
      this.sizeW = 3000 / mapTreble + mapVolume * 2;
      this.sizeH = 4000 / mapTreble + mapVolume * 2;
      image(chameleonManImg, this.x, this.y, this.sizeW, this.sizeH);
    }
    pop();
  }

}
