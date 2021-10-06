let roseImg;
let userImg;



function preload(){
  roseImg = loadImage("assets/images/shadow.gif");
  userImg =  loadImage("assets/images/handgre.png");
}



function setup(){
  createCanvas(windowWidth, windowHeight);
}




function draw(){
background(0);
imageMode(CENTER);
tint(100, 210, 210);
image(roseImg, width/2, height/2, 800, 590);

tint(255, 100); // how to apply a tint to a single code?
image(userImg, mouseX, mouseY, 140, 190);

let col = random(0, 220);


textFont(`Verdana`);
textSize(50);
fill(col);
textAlign(CENTER, CENTER);
text(`SECRET SIGNS`, width/2, height/5);




textFont(`Verdana`);
textSize(30);
fill(col);
text(`Touch my hand`, width-400, height-400);

}
