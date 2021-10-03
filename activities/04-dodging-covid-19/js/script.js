/**
Dodging Covid-19
Julie Khashimova

This program draws two circles: red is for Covid-19 and white is the Victim.
Once the victim ball catches covid ball, the program stops working
*/

//covid circle
let covid ={
  x: 0,
  y: 250,
  size: 150,
  vx: 0,
  vy: 0,
  speed: 4,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
}
let user = {
  x: undefined,
  y: undefined,
  size: 50,
  speed: 1,
  fill: {
    r: 255,
    g: 255,
    b: 255,
  }
}
let numStatic = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);

  covid.y = random(0, height);
  covid.vx = covid.speed;

  noCursor();
}

function draw() {
  background(10);

  // display static
  for (let i = 0;  i < numStatic; i++) {
  let x = random(0, width);
  let y = random(0, height);
  stroke(255);
  strokeWeight(5);
  point(x,y);
  }

  // covid movement
  covid.x = covid.x + covid.vx;
  covid.y = covid.y + covid.vy;

  if (covid.x > width) {    //if the circle hits the right side it resets to its orginal position
    covid.x = 0;
    covid.y = random(0, height); //moves to random y postion
  }

  // user movement
  user.x = mouseX;
  user.y = mouseY;

  //  check and stop if overlap
  let d = dist(user.x, user.y, covid.x, covid.y);
  if (d < covid.size/2 + user.size/2) {
    noLoop();
  }


  // display a covid circle
  noStroke();
  fill(covid.fill.r, covid.fill.g, covid.fill.b);
  ellipse(covid.x, covid.y, covid.size);

  // display a user circle
  fill(user.fill.r);
  //user.fill.r = user.fill.r  + 1;
  ellipse(user.x, user.y, user.size);

}
