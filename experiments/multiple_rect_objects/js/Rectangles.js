class Rect {
  constructor(x, y, vx, vy, size) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;
  }


  display() {
    fill(255, 0, 20);
    rectMode(CENTER);
    rect(this.x, this.y, this.size);
  }
}
