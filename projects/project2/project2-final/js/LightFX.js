// a class of rotating light effects for the Dynamic Dance scene (extends Shape class)
class LightFX extends Shape {
  constructor(x, y, size, lightImg) {
    super();
    this.x = x;
    this.y = y;
    this.size = size;
    this.strokeColor = undefined;
    this.strokeSize = undefined;
    this.minVolumeThreshold = 30;
    this.maxVolumeThreshold = 45;
    this.bassThreshold = 275;
    this.lightImg = lightImg;
    this.active = true;
  }

  //makes the background flashy with the higher volume
  bgEffect() {
    if (mapVolume > this.maxVolumeThreshold) {
      background(mapVolume * 3, mapVolume * 3, mapVolume * 3);
    }
  }


  // rotates third light effect
  rotateFX3() {
    rotate(frameCount * this.maxRotationSpeed * 2 + mapVolume);
    rotateZ(frameCount * -this.maxRotationSpeed);
  }

  // rotates second light effect
  rotateFX2() {
    rotate(frameCount * -this.maxRotationSpeed * 3 + mapVolume);
    rotateZ(frameCount * -this.maxRotationSpeed * 2);
  }


  // rotates first light effect
  rotateFX1() {
    rotateX(frameCount * -this.maxRotationSpeed);
    rotateY(frameCount * this.maxRotationSpeed);
    rotateZ(frameCount * -this.maxRotationSpeed);
  }


  // displays third light effect after reaching given bassThreshold
  lightFX3() {
    push();
    noStroke();
    if (!this.active || mapBass > this.bassThreshold) {
      texture(lightImg);
      ellipse(this.x, this.y, mapBass / 3);
    }
    pop();
  }

  // displays third light effect after reaching given maximum volume threshold
  lightFX2() {
    push();
    noStroke();
    if (!this.active || mapVolume > this.maxVolumeThreshold) {
      texture(lightImg);
      ellipse(this.x, this.y, this.size + mapBass / 4);
    }
    pop();
  }

  // displays the lights inside the rotating ellipses
  lightFX1() {
    push();
    // makes the rotating ellipses appear and stay within the given timeframe
    if (!this.active && currentTime1 > 102.2 && currentTime1 < 277) {
      noFill();
      stroke(mapTreble, mapMid / 2, 0, mapVolume);
      texture(lightImg);
      ellipse(this.x, this.y, this.size);
    } else {
      this.active = false;
    }
    pop();
  }
}
