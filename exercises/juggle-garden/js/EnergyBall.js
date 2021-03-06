class EnergyBall {
  constructor(x, y, size) {
    (this.x = width / 2),
    (this.y = height / 2),
    (this.vx = 0),
    (this.vy = 0),
    (this.speed = 3),
    (this.size = size),
    (this.maxSize = 400);
    this.growRate = 3;
    this.shrinkRate = 10;
    (this.colorRed = 255),
    (this.colorGreen = 200),
    (this.colorBlue = 100),
    (this.alpha = 255),
    (this.active = true);
  }
//moves the ball accoerding to the key pressed
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

    //constrains energy ball within a canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
//change the state to "lose"
  lose() {
    if (this.size === 0) {
      state = `losing`;
    }
  }
// makes the ball shrink
  fadeEnergy(negative) {
    let d = dist(this.x, this.y, negative.x, negative.y);
    if (negative.active && d < this.size / 2 + negative.size / 2) {
      this.shrink();
      negative.active = false;
    }
  }
// reduces the ball's size
  shrink() {
    this.size -= this.shrinkRate;
    this.size = constrain(this.size, 0, 50);
  }
//changes state to "win"
  radianceEnd() {
    if (!positive.active && positiveCaught === positiveThoughts.length) {
      state = `winning`;
    }
  }
// increases ball's energy
  increaseEnergy(positive) {
    let d = dist(this.x, this.y, positive.x, positive.y);
    if (positive.active && d < this.size / 2 + positive.size / 2) {
      this.grow();
      positive.active = false;
      positiveCaught += 1;
    }
  }
// makes the ball grow
  grow() {
    this.size += this.growRate;
    this.size = constrain(this.size, 80, 300);
  }
// displasy the ball
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
