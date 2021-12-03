// a class for the Visualizer (extends Shape class)
class Visualizer extends Shape {
  constructor() {
    super();
    this.x = undefined;
    this.y = undefined;
    this.size = undefined;
    this.stroke = undefined;
    this.strokeWeight = undefined;
    this.active = true;
  }

  // rotates the visualizer
  rotate() {
    rotate(frameCount * this.maxRotationSpeed * 2 + mapVolume * 2);
    rotateZ(frameCount * -this.minRotationSpeed);
  }

  // a visualizer that's made of the sound spectrum data
  // makes and displays the sound visualizer until a given song's time
  display() {
    if (this.active && currentTime1 > 1 || currentTime1 < 305) {
      push();
      // create a rectangle for the each frequency band in the audio spectrum (512)
      for (let i = 0; i < spectrum.length; i++) {
        //rotates each reactangle individually
        this.rotate();
        //sin/cos wraps the linear waveform into the circle
        let x = this.radius * cos(i);
        let y = this.radius * sin(i);
        // size changes according to the higher notes
        this.size = mapTreble / 3
        noFill();
        // color changes according to high/mid notes and the volume
        stroke(mapTreble, mapMid / 2 + 10, mapVolume / 4, mapVolume / 2);
        rectMode(CENTER);
        rect(x, y + mapTreble - mapBass, this.size);
      }
      pop();
    } else {
      this.active = false;
    }
  }
}
