class Title {
  constructor(light2Img) {
    this.x = 0;
    this.y = 0;
    this.titleString = `Cosmic Dance`
    this.instruction = `Press ENTER to switch between the scenes`
    this.instruction2 = `Click and DRAG for better interaction`
    this.instruction3 = `Use mouse-wheel/trackpad to control the distance`
    this.imageSun = light2Img;
    this.size = 1772 / 2;
  }

  displayTitle() {
    push();
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(100);
    fill(random(250), random(250), 0);
    text(this.titleString, this.x, this.y);
    pop();

    push();
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(16);
    fill(random(255));
    text(this.instruction, this.x, this.y + 200);
    text(this.instruction2, this.x, this.y + 250);
    text(this.instruction3, this.x, this.y + 300);
    pop();
  }

  rotateImage() {
    rotate(frameCount * 0.007);
  }

// display rotating sun image
  displayImage() {
    push();
    this.rotateImage();
    imageMode(CENTER);
    image(this.imageSun, this.x, this.y, this.size, this.size);
    pop();
  }

  draw() {
    background(random(240, 245), random(240, 245), random(240, 245));
    this.displayImage();
    this.displayTitle();
  }
}
