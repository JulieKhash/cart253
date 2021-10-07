
"use strict";

let shadowImg;


function preload() {
shadowImg = loadImage("assets/images/shadow.gif");
}


/**
Description of setup
*/
function setup()
createCanvas(1900, 1300);
background(255);

}


/**
Description of draw()
*/
function draw() {
image(shadowImg, width/2, height/2, 800, 590);


let col = random(0, 220);


textFont(`Verdana`);
textSize(50);
fill(col);
textAlign(CENTER, CENTER);
text(`SECRET SIGNS`, width/2, height/5);

}
