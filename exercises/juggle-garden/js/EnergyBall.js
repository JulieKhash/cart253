class EnergyBall {
  constructor(x, y, size) {
    (this.x = width / 2),
      (this.y = height / 2),
      (this.vx = 0),
      (this.vy = 0),
      (this.speed = 3),
      (this.size = size),
      (this.maxSize = 400);
    this.growRate = 1;
    this.shrinkRate = 10;
    (this.colorRed = 255),
      (this.colorGreen = 200),
      (this.colorBlue = 100),
      (this.alpha = 255),
      (this.active = true);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    }

    this.x += this.vx;
    this.y += this.vy;

    //constrain energy ball within a canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  lose() {
    if (this.size === 0) {
      energyBall.textLosing();
      // positive.active = false;
    }
  }

  textLosing() {
    background(random(0, 10));
    push();
    textSize(20);
    textAlign(CENTER, CENTER);
    text(`Darkness`, width / 2, height / 2);
    pop();
  }

  fadeEnergy(negative) {
    let d = dist(this.x, this.y, negative.x, negative.y);
    if (negative.active && d < this.size / 2 + negative.size / 2) {
      this.shrink();
      negative.active = false;
    }
  }

  shrink() {
    this.size -= this.shrinkRate;
    this.size = constrain(this.size, 0, 50);
  }

  win() {
    if (!positive.active && positiveCaught === positiveThoughts.length) {
      //negative.active = false;
      background(random(230, 250), random(230, 250), random(230, 250));
      energyBall.textWinning();
    }
  }

  textWinning() {
    push();
    textSize(20);
    textAlign(CENTER, CENTER);
    text(`Radiance!`, width / 2, height / 2);
    pop();
  }

  increaseEnergy(positive) {
    let d = dist(this.x, this.y, positive.x, positive.y);
    if (positive.active && d < this.size / 2 + positive.size / 2) {
      this.grow();
      positive.active = false;
      positiveCaught += 1;
    }
  }

  grow() {
    this.size += this.growRate;
    this.size = constrain(this.size, 80, 300);
  }

  display() {
    push();
    fill(
      random(this.colorRed),
      random(this.colorGreen),
      random(this.colorBlue),
      random(this.alpha)
    );
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
