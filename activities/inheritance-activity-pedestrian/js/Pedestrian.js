class Pedestrian {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.alive = true;
  }

  handInput(){
    if (keyIsDown(LEFT_ARROW)){
      this.vx = -this.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)){
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }

    if (keyIsDown(UP_ARROW)){
      this.vy = -this.speed;
    }
    else if (keyIsDown(DOWN_ARROW)){
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;

  }

  display(){
    push();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
