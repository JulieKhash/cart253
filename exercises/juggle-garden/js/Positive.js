class Positive {
  constructor(x, y) {
    this.x = x,
    this.y = y,
    this.vx = 5,
    this.vy = 8,
    // this.ax = 1,
    // this.ay = 1,
    // this.speed = 2
    // this.maxSpeed = 9,
    this.size = 30,
    this.color = 255,
    this.alpha = 255,
    this.active = true;
  }

  move(){
  // bounces horizontally
  this.x += this.vx;

  if (this.x > width || this.x < 0){
    this.vx = -this.vx;
  }

  //bounces vertically
  this.y += this.vy;

  if (this.y > height || this.y < 0){
    this.vy = -this.vy
  }
}





  display(){
    push();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    pop()
  }
}
