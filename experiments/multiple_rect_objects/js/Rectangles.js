class Rect {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    fill(255, 0, 20);
    rectMode(CENTER);
    rect(this.x, this.y, this.size);
  }
}
