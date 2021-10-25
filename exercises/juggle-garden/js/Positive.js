class Positive {
  constructor(x, y) {
    this.x = x,
    this.y = y,
    this.size = 30,
    this.color = 255,
    this.alpha = 255,
    this.vx = 0,
    this.vy = 0,
    this.speed = 3,
    this.active = true;
  }




  display(){
    push();
    fill(this.color);
    ellipse(this.x, this.y, this.size);

    // //negative Thought
    // fill(random(0, 20));
    // ellipse(this.x, this.y, this.size);
    pop()
  }
}
