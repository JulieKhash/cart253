class Motorcycle extends Vehicle {
  constructor(x,y) {
    super(x, y);
    this.width = 40;
    this.height = 10;
    this.speed = 8;
  }

  display(){
    super.display();

    push();
    rectMode(CENTER);
    fill(10, 135, 10);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
