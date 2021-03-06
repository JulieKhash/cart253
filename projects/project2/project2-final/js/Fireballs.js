// a class for the central fire ball (extends Shape class)
class Fireball1 extends Shape {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.size = 60;
  }

  // rotate a fireball
  rotate() {
    rotate(frameCount * this.maxRotationSpeed * 5)
    rotateX(frameCount * this.maxRotationSpeed)
    rotateY(frameCount * this.maxRotationSpeed)
    rotateZ(frameCount * this.maxRotationSpeed)
  }

  // display the main ball in the center
  display() {
    push();
    noStroke();
    //switch sphere texture from fire to luminance during the given timeframe
    if (currentTime2 > 246 && currentTime2 < 370) {
      texture(luminanceImg);
      sphere(this.size + scaleVolume * 2);
    } else {
      texture(fireball2Img);
      sphere(this.size + scaleVolume * 2); // size grows according to the volume
    }
    pop();
  }
}

// a class for the small fireballs rotating along the orbit (extends Shape class)
class Fireball2 extends Shape {
  constructor() {
    super();
    this.x = undefined;
    this.y = undefined;
    this.size = 20;
    this.numSmallSpheres = 10;
    this.active = true;
  }

  // rotate fireballs
  rotate() {
    rotate(frameCount * this.minRotationSpeed * 5)
    rotateY(frameCount * this.minRotationSpeed * 3)
    rotateZ(frameCount * -this.minRotationSpeed * 3)
  }

  // display rotating, floating, moving around fireballs during the given song's timeframe
  display() {
    push();
    if (!this.active && currentTime2 > 10 && currentTime2 < 400) {
      for (let i = 0; i < this.numSmallSpheres; i++) {
        this.x = this.radius * cos(i);
        this.y = this.radius * sin(i);
        translate(this.x + 100, this.y + 50, 100);
        noStroke()
        texture(fireballImg);
        sphere(this.size + i + scaleVolume * 2); // fireballs grow in size with the volume
      }
    } else {
      this.active = false;
    }
    pop();
  }
}
