class Ball {
  constructor(x, y, size) {
    (this.x = x),
      (this.y = y),
      (this.size = size),
      (this.vx = 0),
      (this.vy = 0),
      (this.ax = 0), //ball's acceleration
      (this.ay = 0),
      (this.MaxSpeed = 10),
      (this.active = true);
  }

  gravity(force) {
    this.ay = this.ay + force;
  }

  move() {
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.MaxSpeed, this.MaxSpeed);
    this.vy = constrain(this.vy, -this.MaxSpeed, this.MaxSpeed);

    this.x += this.vx;
    this.y += this.vy;

    if (this.y - this.size/2 > height){
      this.active = false;
    }
  }

  bounce(paddle) {
    // check if the bottom of the ball passes the height of the canvas
    if (
      this.x > paddle.x - paddle.width / 2 && //the ball's x is greater than right side the paddle
      this.x < paddle.x + paddle.width / 2 && // the ball's x is less than the left side of the paddle
      this.y + this.size / 2 > paddle.y - paddle.height / 2 && //the ball's bottom is greater thant(passes) the paddle's top
      this.y - this.size / 2 < paddle.y + paddle.height / 2   //the ball's top is less the paddles bottom
    ) {

      // bounce
      let dx = this.x - paddle.x; // how far away was a ball from the center of the paddle when it bounced off
      this.vx = this.vx + map(dx, -paddle.width / 2, paddle.width / 2, -2, 2); //change horizontal velocity
      // -paddle.width2 - closer it is to the left of the paddle, it will be -2
      // paddle.width -  closer it is to the right edge, it resutls in 2


      this.vy = -this.vy; // travels upwards
      this.ay = 0; //
    }
  }

  display() {
    push();
    fill(200, 100, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
