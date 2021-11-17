// a class of rotating light effects for the Dynamic Dance scene
class LightFX extends Shape {
  constructor(x, y, size, lightImg) {
    super();
    this.x = x;
    this.y = y;
    this.size = size;
    this.strokeColor = undefined;
    this.strokeSize = undefined;

    this.minSoundThreshold = 30;
    this.maxSoundThreshold = 45;
    this.lightImg = lightImg;

    this.active = true;
  }

//makes the background flashy with the higher volume
  bgEffect(){
    if  (mapVolume > this.maxSoundThreshold){
    background(mapVolume * 3, mapVolume * 3, mapVolume * 3);
  }
}

  rotateFX1() {
    rotateX(frameCount * -this.maxRotationSpeed);
    rotateY(frameCount *  this.maxRotationSpeed);
    rotateZ(frameCount * -this.maxRotationSpeed);
  }

  rotateFX2(){
    rotate(frameCount * -this.maxRotationSpeed*3 + mapVolume);
    rotateZ(frameCount * -this.maxRotationSpeed*2);
  }

  rotateFX3(){
    rotate(frameCount * this.maxRotationSpeed*2 + mapVolume);
    rotateZ(frameCount * -this.maxRotationSpeed);
  }

  rotateFX4(){
    rotate(frameCount * this.maxRotationSpeed*2 + mapVolume);
    //rotateZ(frameCount * -this.maxRotationSpeed);
  }


    lightFX4(){
      push();
        if (!this.active && currentTime1 > 258 && currentTime1 < 260) {
          noFill();
          noStroke();
          texture(lightImg);
          this.size = mapBass  + mapVolume;
          ellipse(this.x, this.y, this.size);
    } else {
      this.active = false;
    }
    pop();
  }

  lightFX3(){
    push();
    noStroke();
    if (!this.active || mapBass > 275){
      texture(lightImg);
      this.size = mapBass/3;
      ellipse(this.x, this.y, this.size);
    }
    pop();
    }


  lightFX2() {
    push();
    noStroke();
    //stroke(mapTreble, mapMid / 2, 10)
    if (!this.active || mapVolume > this.maxSoundThreshold){
      texture(lightImg);
      ellipse(this.x, this.y, this.size + mapBass/4);
    }
    pop();
    }


  lightFX1() {
    push();
    // makes the rotating ellipses appear and stay when soundThreshold reached
    // if (this.active || mapVolume >= this.maxSoundThreshold) {
    if (!this.active && currentTime1 > 102.2 && currentTime1 < 277) {

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
