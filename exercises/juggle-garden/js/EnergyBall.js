class EnergyBall {
  constructor(x, y,size) {
    this.x = width/2,
    this.y = height/2,
    this.vx = 0,
    this.vy = 0,
    this.speed = 3,
    this.size = size,
    this.growRate = 1;
    this.shrinkRate = 3;
    this.colorRed = 255,
    this.colorGreen = 200,
    this.colorBlue = 100,
    this.alpha = 255,
    this.active = true
  }

  move(){
    if(keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)){
      this.vx = this.speed
    }
    else if (keyIsDown(UP_ARROW)){
      this.vy = -this.speed
    }
    else if (keyIsDown(DOWN_ARROW)){
      this.vy = this.speed
    }

    this.x += this.vx;
    this.y += this.vy;

    //constrain energy ball within a canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }


   fadeEnergy(negative){
     let d = dist(this.x, this.y, negative.x, negative.y);
     if (d < this.size/2 + negative.size/2){
       this.shrink();
       negative.active = false;
   }
 }


   shrink(){
     this.size -= this.shrinkRate;
     this.size = constrain(this.size, 3, 30);
   }



   increaseEnergy(positive){
     let d = dist(this.x, this.y, positive.x, positive.y);
     if (d < this.size/2 + positive.size/2){
       this.grow();
       positive.active = false;
     }
   }

   grow(){
     this.size += this.growRate;
     this.size = constrain(this.size, 80, 300);
   }


  display(){
    push();
    fill(random(this.colorRed), random(this.colorGreen), random(this.colorBlue), random(this.alpha));
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
