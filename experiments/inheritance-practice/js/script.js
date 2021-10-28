"use strict";

let vehicles = [];
let numCars = 10;
let numMotorcycles = 10;

function setup() {
  createCanvas(900, 900);
  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }
}

function draw() {
  background(0);

  for(let i = 0; i < vehicles.length; i++){
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }
}
