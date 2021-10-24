
"use strict";


let garden = {
  //an array to store individual flower
  flowers: [],
  numFlowers: 25,
  // an array to our bees
  bees: [],
  numBees: 5,
  grassColor: {
    r: 200,
    g: 250,
    b: 190
  }
}

// creates canvas and the flowers in the garden
function setup() {
  createCanvas(700, 700);
  //create our flowers up to the number of the flowers;
  for(let i = 0; i < garden.numFlowers; i ++) {
    //create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(30, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 200)
    }
    //create a new flower usign the arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    //add the flower to the array of flowers
    garden.flowers.push(flower);
  }
  //create our bees by counting up to the number of bees
  for (let i = 0; i < garden.numBees; i++){
    //create arguments to the properties x,y
    let x = random(0, width);
    let y = random(0, height);
   // add the bee to the array of bees
    let bee = new Bee(x, y);
    garden.bees.push(bee);
  }
}


function draw() {
  //display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  //loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++){
    let flower = garden.flowers[i];
    // check if this flower is alive before updating it
    if (flower.alive){
      //update the flower by shrinking it and displaying it
    flower.shrink();   // shrink living flowers every frame
    flower.display();
  }
  }

  for (let i = 0; i < garden.bees.length; i++){
    let bee = garden.bees[i];
    // check if this bee is alive
    if(bee.alive){
      // update the bee by shrinking, moving, and displaying it
      bee.shrink();
      bee.move();
      bee.display();
    }

  }

}
