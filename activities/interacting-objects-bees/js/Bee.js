class Bee {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.minSize = 10; //if we get smaller than this minimum we're dead
    this.maxSize = 40;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.shrinkRate = 0.05; //how much smaller we get each frame
    this.growRate = 0.05;
    this.jitteriness = 0.1; //how likely th ebee is to change direction
    this.alive =  true; // shows the bee in the beginning
  }
  // shrink() causes the bee to get smaller over time
  shrink(){
    //shrink by reducign the size by a set amount
    this.size = this.size - this.shrinkRate;
    if (this.size < this.minSize) {
      this.alive = false;
    }
  }

  // tryToPollinate attempts to pollinate the flower provided as a parameter
  // if pollination succeds (both overlap) then both grow
  tryToPollinate(flower){
  // calculate the distance between the bee and the flower
  let d = dist(this.x, this.y, flower.x, flower.y);
  if (d < this.size/2 + flower.size/2 + flower.petalThickness){
    this.grow(); // the bee should grow
    flower.pollinate();
  }
  }

  // grow() makes the bee to get bigger up to a maximu
  grow(){
    this.size = this.size + this.growRate;
    this.size = constrain(this.size, this.minSize, this.maxSize);
  }

  // move() moves the bee by potentially changing the direction
  // and then changing postion based on velocity
  move(){
    let r = random (0,1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

// display() draws our bee onto the canvas
  display(){
    push();
    // Wings on either side
      fill(255, 255, 255);
      noStroke();
      ellipse(this.x - this.size / 2, this.y, this.size / 2);
      ellipse(this.x + this.size / 2, this.y, this.size / 2);
      pop();

      // Body
      push();
      fill(225, 225, 50);
      noStroke();
      ellipse(this.x, this.y, this.size);
      pop();

      // Eyes
      push();
      fill(0, 0, 0);
      noStroke();
      ellipse(this.x - this.size / 10, this.y, this.size / 10);
      ellipse(this.x + this.size / 10, this.y, this.size / 10);
    pop();
  }
}
