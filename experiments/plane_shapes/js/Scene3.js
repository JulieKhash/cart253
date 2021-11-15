let music;
let amp;
let fft;

let numRect = 3;
let numEllipses = 30;

let minRotationSpeed = 0.001;
let maxRotationSpeed = 0.01;

let dancer3Img;
let lightImg;

//use true/false to make the objects appear/disapper
//optional: currentTime() to detect the time of the song

function preload() {
  dancer3Img = loadImage(`assets/images/ChameleonMan.png`);
  lightImg = loadImage(`assets/images/light.png`);
  light2Img = loadImage(`assets/images/blue.png`);
  music = loadSound(`assets/sounds/rock2.mp3`);
}

function setup() {
  createCanvas(1700, 1000, WEBGL);

  music.setVolume(0.4);
  amp = new p5.Amplitude();
  fft = new p5.FFT(0.8, 512); // make 512 bins/samples, the power of two
  music.play();
}

function draw() {
  //background(0);
  orbitControl(6, 6, 0.2); //x, y sensitiity to a mouse, z value determines the scale

  translate(0, 0, 0); //position the scene to the center of the canvas

  noFill();

  let radius = width/6;

  let volume = amp.getLevel();
  let mapVolume = map(volume, 0, 0.3, 10, 200);

  let spectrum = fft.analyze(); //gets an array of frequency bands

  let bass = fft.getEnergy(`bass`);
  let mid = fft.getEnergy(`mid`);
  let treble = fft.getEnergy(`treble`);

  let mapBass = map(bass, 0, 255, 5, radius);
  // let scaleBass = map(bass, 0, 255, 1, 1.3);

  let mapMid = map(mid, 0, 255, 5, radius * 2);
  // let scaleMid = map(mid, 0, 255, 1, 1.3);

  let mapTreble = map(treble, 0, 255, 5, radius * 3);
  // let scaleTreble = (treble, 0, 255, 1, 10);


  background(mapVolume, 0, 0);

//rotating light ellipses
  push();
  if (mapVolume > 100) {
    background(mapVolume, mapVolume, mapVolume);

    for (let j = 0; j < numEllipses; j++){
      rotateX(frameCount * -maxRotationSpeed);
      rotateY(frameCount *  maxRotationSpeed);
      rotateZ(frameCount * -maxRotationSpeed);
      stroke(mapTreble, mapMid / 2, 10)
      let size = 400;
      texture(lightImg);
      ellipse(size+j, size, size/3);
    }
  }
    pop();

//second time ellipses rotating inside the shape
    push();
    if (mapVolume > 130) {
      background(mapVolume, mapVolume, mapVolume);

      for (let j = 0; j < numEllipses; j++){

        // rotateX(frameCount * -maxRotationSpeed);
        // rotateY(frameCount *  maxRotationSpeed);
        rotateZ(frameCount * -maxRotationSpeed);
        rotate(frameCount * maxRotationSpeed*3 + mapVolume);

        stroke(mapTreble, mapMid / 2, 10)
        let size = 200;
        texture(lightImg);
        ellipse(size+j/2, size, size/3);
          if (mapBass > 225){
              noStroke();
              texture(light2Img);
              ellipse(size+j/2 + 100, size, size/3 + mapBass/5);
      }
    }
  }
      pop();

// third time ellipses rotating around the sahpe
//       push();
//       if (mapBass > 225){
//         for (let j = 0; j < 15; j++){
//
//           // rotateX(frameCount * -maxRotationSpeed);
//           // rotateY(frameCount *  maxRotationSpeed);
//           rotateZ(frameCount * -maxRotationSpeed);
//           rotate(frameCount * maxRotationSpeed*3 + mapVolume);
//
//           //stroke(mapTreble, mapMid / 2, 10)
//           noStroke();
//           let size = 200;
//           texture(lightImg);
//           ellipse(size + j + 100 , size, size/2 + mapBass/5);
//       }
// }
//       pop()


push();
  for (let i = 0; i < spectrum.length; i++) {

    // rotateX(frameCount * -0.001);
    // rotateY(frameCount * -0.001);
    rotateZ(frameCount * -minRotationSpeed);

    rotate(frameCount * maxRotationSpeed*3 + mapVolume);

    let x = radius * cos(i);
    let y = radius * sin(i);
    //stroke(mapTreble, mapMid,mapBass )
    stroke(mapTreble, mapMid / 2, 0, volume);
    //strokeWeight(0.3);
    rectMode(CENTER);
    //texture(lightImg)
    rect(x, y + mapBass - mapTreble, mapTreble / 3);
  }
  pop();


    push();
    imageMode(CENTER);
    rotate(frameCount * minRotationSpeed);

    if (mapVolume > 65) {
      rotate(frameCount * maxRotationSpeed*5);
      image(lightImg, 0,0,  mapVolume + mapTreble, mapVolume+ mapTreble);
    }
    //rotateX(frameCount * -0.007);
    else {
    rotateY(frameCount * -minRotationSpeed*7);
    //rotateZ(frameCount * -0.007);
    image(dancer3Img, 0,  0, 3000 / mapTreble + mapVolume, 4000 / mapTreble + mapVolume);
}

// light bicomes larger
    if (mapVolume > 110){
    rotate(frameCount * minRotationSpeed*8);
    image(lightImg, 0,0,  mapVolume + mapTreble*2, mapVolume+ mapTreble*2);
    }

    if (mapVolume > 110){
    rotate(frameCount * minRotationSpeed*8);
    image(dancer3Img, 0,  0, 3000 / mapTreble + mapVolume, 4000 / mapTreble + mapVolume);
    }
pop();


  console.log(mapBass);
}
