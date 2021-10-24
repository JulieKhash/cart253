class Ball {
  constructor(x, y) {
    this.x = x,
    this.y = y,
    this.size = 50,
    this.vx = 0,
    this.vy = 0,
    this.ax = 0,    //ball's acceleration
    this.ay = 0,
    this.MaxSpeed = 10,
    this.active = true
  }

gravity(force){
  this.ay = this.ay + force;
}

move(){
  this.vx += this.ax;
  this.vy += this.ay;

  this.vx = constrain(this.vx, -this.Maxspeed, this.Maxspeed);
  this.vy = constrain(this.vy, -this.Maxspeed, this.Maxspeed);

  this.x += this.vx;
  this.y += this.vy;
}

bounce(){
  // check if the bottom of the ball passes the height of the canvas
  if (this.y + this.size/2 >= height){
    this.vy = -this.vy;    // travels upwords
    this.ay = 0;   //
  }
}

display(){
  push();
  fill(200, 100, 50);
  noStroke();
  ellipse(this.x, this.y, this.size);
  pop();
}


}
