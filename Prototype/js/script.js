"use strict";

 function setup() {
  createCanvas(1540, 1500);
}

function draw() {
  if (mouseIsPressed) {
       
      
      
    fill(30, 20, 85, 75);
  ellipse(mouseX, mouseY, 80, 90);
      
}
 

}  

function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
    fill(255, 0, 0)
  background(1500);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  torus(100, 50); 
  translate(500) 
} 
