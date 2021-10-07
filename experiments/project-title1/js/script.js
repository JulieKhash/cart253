"use strict";

let shadowImg;
let backgroundImg;
let crescentImg;


function preload() {
crescentImg = loadImage("assets/images/moon.gif");
shadowImg = loadImage("assets/images/shadow.gif");
backgroundImg = loadImage("assets/images/headshadow.gif");
}


/**
Description of setup
*/
function setup(){
createCanvas(1900, 1300);


}


/**
Description of draw()
*/
function draw() {
let col = random(0, 220);
background(0);

imageMode(CENTER);

tint(col, 200, 200, 150);

image(backgroundImg, width/2, height/2);
image(crescentImg, width/2, height/3+210, 500, 276);

//tint(col, 200, 200, 50);


textFont(`Verdana`);
textSize(70);
fill(col);
textAlign(CENTER, CENTER);
text(`SECRET SIGNS`, width/2, height/4.5);

textFont(`Verdana`);
textSize(20);
fill(col);
textAlign(CENTER, CENTER);
text(`Press any key`, width/2, height/3+400);

}
