class Paddle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;

  }

  move(){
    this.x = mouseX;  //user conrtolled paddle
  }

  display(){
    push();
    fill(255, 255, 255);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
