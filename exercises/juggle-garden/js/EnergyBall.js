class EnergyBall {
  constructor(x, y, size) {
    this.x = width/2,
    this.y = height/2,
    this.size = size
    this.colorRed = 255,
    this.colorGreen = 200,
    this.colorBlue = 100,
    this.alpha = 255,
    this.active = true
  }


  display(){
    push();
    fill(this.colorRed, this.colorGreen, this.colorBlue, this.alpha);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
