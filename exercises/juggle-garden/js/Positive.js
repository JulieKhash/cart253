class Positive {
  constructor(x, y, vx, vy, size) {
    (this.x = x),
    (this.y = y),
    (this.vx = vx),
    (this.vy = vy),
    (this.ax = 1),
    (this.size = size),
    (this.color = 255),
    (this.alpha = 255),
    (this.active = true);
  }
  //moves the ball
  move() {
    // bounces horizontally
    this.x += this.vx;
    // bounces off
    if (this.x > width || this.x < 0) {
      this.vx = -this.vx;
    }
    //bounces vertically
    this.y += this.vy;
    // bounces off
    if (this.y > height || this.y < 0) {
      this.vy = -this.vy;
    }
  }
  //displays the ball
  display() {
    push();
    fill(this.color, random(200, this.alpha));
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
