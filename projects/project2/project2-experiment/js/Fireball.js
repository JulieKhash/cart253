
Fireball1 extends Shape {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 90;
  }

  rotate(){
    rotate(frameCount * maxRotationSpeed * 5)
    rotateX(frameCount * maxRotationSpeed)
    rotateY(frameCount * maxRotationSpeed)
    rotateZ(frameCount * maxRotationSpeed)
  }

  display(){
    push();
    noStroke()
    texture(fireballImg)
    sphere(this.size + scaleVolume * 1.5);
    pop();

}
}




// class Fireball2 extends Shape {
//   constructor(x, y, size) {
//     super();
//     this.x = x;
//     this.y = y;
//     this.size = size;
//   }
//
//
//   rotate(){
//
//     rotate(frameCount * this.minRotationSpeed * 3)
//
//     rotateY(frameCount * this.minRotationSpeed * 3)
//     rotateZ(frameCount * -this.minRotationSpeed * 3)
//   }
//
//   display(){
//     noStroke()
//     texture(fireballImg){
//
//     }
//
//     }
//   }
