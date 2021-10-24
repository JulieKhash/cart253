class Flower {
  // sets up a flower's properties
  constructor(x, y, size, stemLength, petalColor) {
    //position and size information
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxsize = size;
    this.stemLength = stemLength;
    this.stemThickness = 10;
    this.petalThickness = 10;
    this.maxPetalThickness = 10;
    //color
    this.stemColor = {
      r: 200,
      g: 100,
      b: 50
    };
    this.petalColor = petalColor;
    this.centreColor = {
      r: 50,
      g: 0,
      b: 0
    };
    this.alive = true; // track whether this flower is alive
  }

  // shrinks the flower
  shrink() {
    //choose a random number to shrink
    let shrinkage = random(0, 0.1);
    //reduce the center of the flower
    this.size = this.size - shrinkage;
    //reduce the petal thickness (divide by 10 to make it less rapid)
    this.petalThickness = this.petalThickness - shrinkage / 10;

    //if any of the key properties reach 0 or less, the flower is dead
    if (this.petalThickness <= 0 || this.size <= 0) {
      this.alive = false;
    }
  }
  // polinate() handles the flower being pollinated(it grows)
  pollinate() {
    //choose the amount to grow
    let growth = random(0, 0.5);
    // increase the center of the flower
    this.size = this.size + growth;
    // increse the petal thickness
    this.petalThickness = this.petalThickness + growth / 10;

    this.size = constrain(this.size, 0, this.maxSize);
    this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
  }


  // displays the flower on camvas
  display() {
    push();
    // draws a line for the stem
    strokeWeight(this.stemThickness);
    stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    line(this.x, this.y, this.x, this.y + this.stemLength);
    // draws a circle with a heavy outline for the flowers
    strokeWeight(this.petalThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }


}
