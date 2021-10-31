class Truck extends Vehicle {
  constructor(x,y) {
    super(x, y);
    this.width = 70;
    this.height = 30;
    this.speed = 2;
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
