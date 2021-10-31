"use strict";

let pedestrian;

let vehicles = []; //an array to store in all vehicles (cars, trucks, motorcycles);

let numCars = 10;
let numTrucks = 8;
let numMotorcycles = 5;

let state = `title`; // can be simulation, success, dead

function setup() {
  createCanvas(800, 800);

  let x = width / 2;
  let y = height;
  pedestrian = new Pedestrian(x, y);

  //loop for cars, adds cars into the vehicles' array
  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height - 100);
    let car = new Car(x, y);
    vehicles.push(car);
  }
  // for trucks
  for (let i = 0; i < numTrucks; i++) {
    let x = random(0, width);
    let y = random(0, height - 100);
    let truck = new Truck(x, y);
    vehicles.push(truck);
  }
  // for motorcycles
  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height - 100);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }

  // set random disrections
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    let r = random(0, 1);
    if (r < 0.5) {
      vehicle.vx = -vehicle.speed; //so it moves to the left
    } else {
      vehicle.vx = vehicle.speed;
    }
  }
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `success`) {
    success();
  } else if (state === `dead`) {
    dead();
  }
}

function title() {
  displayText(`Pedestrian Life`);
}

function simulation() {
  pedestrian.handInput();
  pedestrian.move();
  pedestrian.display();

  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();

    pedestrian.checkHit(vehicle);
  }

  if (!pedestrian.alive) {
    state = `dead`;
  }

  if (pedestrian.y < 0) {
    state = `success`;
  }
}

function success() {
  displayText(`You crossed the road!`);
}

function dead() {
  displayText(`You died`);
}

function displayText(string) {
  push();
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(200);
  text(string, width / 2, height / 2);
  pop();
}

function keyPressed() {
  if (state === `title` && keyCode === ENTER) {
    state = `simulation`;
  }
}
