class Negative {
  constructor(x, y, vx, vy, size) {
    this.x = x,
    this.y = y,
    this.vx = vx,
    this.vy = vy,
    this.ax = 1,
    // this.ay = 1,
    // this.speed = 2
    // this.maxSpeed = 9,
    this.size = size,
    this.color = 0,
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
    this.vy = -this.vy;
  //  this.size += 3;
  }
}



  display(){
    push();
    fill(this.color, random(200, this.alpha));
    ellipse(this.x, this.y, this.size);
    pop()
  }
}
