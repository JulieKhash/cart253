let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}

let xoff = 0.5;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(120);
  xoff = xoff + 0.1;
  let n = noise(xoff) * width;
  line(n, 0, 100, width);

}



//   let dx = circle.x - mouseX;
//   let dy = circle.y - mouseY;
//
//   if (dx < 0) {
//     circle.vx = circle.speed;
//   }
//   else if (dx > 0) {
//     circle.vx = -circle.speed;
//   }
//   if (dy < 0){
//     circle.vy = circle.speed;
//   }
//   else if (dy > 0){
//     circle.vy = -circle.speed;
//   }
//
//   circle.x = circle.x + circle.vx;
//   circle.y = circle.y + circle.vy;
//
//   ellipse(circle.x, circle.y, circle.size);
