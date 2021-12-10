/******************
Code by Vamoss
Original code link:
https://www.openprocessing.org/sketch/1101148

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/

let img;
const vSpace = 10;
const precision = 1;

function preload(){
  img = loadImage("photo_vertical.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  noFill();
  stroke(0);
  img.loadPixels();
} 

function draw() {
  background(255);  
  let time = millis()/1000;
  for (let y = vSpace; y < height-vSpace*2; y+=vSpace) {
    beginShape();
    let x = 0;
    let phase = 0;
    while (x < width) {
      const i = floor(y * img.width + x) * 4;
      const r = img.pixels[i];
      const g = img.pixels[i + 1];
      const b = img.pixels[i + 2];
      const maxColor = 255 * 3;
      let intensity = (r + g + b) / maxColor;
      phase += 0.1;
      vertex(x, y + sin(phase - time) * vSpace / 2);
      x += precision / (intensity + 0.01) / 20;
    }
    endShape();
  }
}