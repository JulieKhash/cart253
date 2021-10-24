class Flower {
  // sets up a flower's properties
  constructor() {
  //position and size information
  this.x = x;
  this.y = y;
  thsi.size = size;
  this.stemLength = stemLength;
  this.stemThickness = 10;
  this.petalThickness = 10;
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
}


// displays the flower on camvas
  display(){
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
