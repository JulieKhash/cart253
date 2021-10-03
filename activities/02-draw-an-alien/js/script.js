/**********
Activty: Draw an alien
Julie K

***********/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {

  createCanvas(500,500);

  background(2, 49, 77);

  noStroke();

  //moon circle
  fill(252,255,150);
  ellipse(width/2, height/2, 350, 350);
  fill(252,255,189);
  ellipse(width/2, height/2, 300, 300);
  fill(252,255,200);
  ellipse(width/2, height/2, 200, 200);
  fill(252,255,220);
  ellipse(width/2, height/2, 250, 250);

  //stars
  ellipse(30, 40, 4, 4);
  ellipse(150, 90, 4, 4);
  ellipse(80, 34, 5, 5);
  ellipse(30, 92, 7, 7);
  ellipse(54, 200, 8, 8);
  ellipse(459, 162, 6, 6);
  ellipse(327, 10, 7, 7);
  ellipse(230, 30, 7, 7);
  ellipse(415, 43, 4, 4);
  ellipse(400, 90, 3, );
  ellipse(150, 450, 4, 4);
  ellipse(400, 410, 3, 3 );
  ellipse(480, 360, 3, 3 );
  ellipse(27, 380, 3, 3 );

  //Head
  fill(62,155,142)
  ellipse(250,200, 150, 150);
  fill(62,158,142)
  ellipse(250,210, 130, 150);
  fill(62,160,142)
  ellipse(250,220, 110, 150);
  fill(62,161,142)
  ellipse(250,230, 90, 150);

  //Left eye
  fill(0,0,0);
  ellipse(210,210, 60,50);
  fill(255, 255, 255);
  ellipse(203, 215, 8,8);

  //hat
  fill(74, 42, 0);
  triangle(220, 90, 130, 245, 365, 80);

  //Right eye
  fill(0,0,0);
  ellipse(285,210, 60,40);
  fill(255, 255, 255);
  ellipse(280, 216, 8,8);

  //Nose
  fill(28, 74, 77);
  //left nostril
  ellipse(245, 250, 4, 8);
  //right nostril
  ellipse(255, 250, 4, 8);

  //lips
   fill(255,0,0);
  ellipse(250,275 ,35,5);

  //body
  fill(145, 0, 0);
  triangle(160, 500, 250, 306, 360, 500);

  fill(62,155,142)
  ellipse(250,400 ,50, 150);
  fill(171, 255, 203);
  ellipse(250,355 ,20, 100);

  fill(105, 255, 163, 150);
  //left side wing
  triangle(62, 220, 250, 308, 80, 210);
  triangle(32, 250, 250, 303, 10, 260);
  triangle(27, 330, 250, 303, 10, 290);
  triangle(20, 480, 250, 303, 30, 440);
  triangle(60, 380, 250, 303, 50, 340);
  triangle(30, 355, 250, 303, 45, 340);
  triangle(90, 460, 250, 303, 78, 480);
  triangle(20, 455, 250, 303, 25, 440);

  //rigth side wing
  triangle(450, 200, 250, 306, 426, 210);
  triangle(450, 220, 250, 306, 400, 280);
  triangle(450, 220, 250, 306, 460, 260);
  triangle(410, 280, 250, 306, 430, 290);
  triangle(420, 310, 250, 306, 470, 320);
  triangle(440, 350, 250, 306, 470, 370);
  triangle(440, 350, 250, 306, 420, 370);
  triangle(450, 380, 250, 306, 480, 390);
  triangle(410, 400, 250, 306, 450, 420);
  triangle(470, 450, 250, 306, 450, 410);
  triangle(430, 480, 250, 306, 430, 502);

  }


  /**
  Description of draw()
  */
  function draw() {

  }
