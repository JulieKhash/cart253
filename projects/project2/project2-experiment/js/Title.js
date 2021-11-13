class Title {
  constructor() {
  this.x = 0;
  this.y = 0;
  this.titleString = `Cosmic Dance`
  this.instruction = `Press enter to change the scene`

  }


  displayTitle(){
    push();
    textAlign(CENTER, CENTER);
    textFont(fontRegular);
    textSize(100);
    fill(random(255), random(255), 0);
    text(this.titleString, this.x, this.y);
    pop();

    push();
    textAlign(CENTER, CENTER);
    textFont(fontRegular);
    textSize(20);
    fill(random(255));
    text(this.instruction, this.x, this.y + 200);
    pop();
  }


  draw(){
      background(0, 0, 20);
      this.displayTitle();
  }


  // keyPressed(){
  //   currentState = new Angel
  // }
}
