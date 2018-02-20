var x = []
var y = []
var r = []
var ySpeed = []


function setup() {
  createCanvas(400, 400);
  for (var index = 0; index < 101; index++) {
    x[index] = random(205, 215);
    y[index] = random(200,350);
    r[index] = 0;
    ySpeed[index] = random(1, 2);

    }
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // smoke gets darker at top
  for (var index = 0; index < 101; index++) {
  push();
  fill(y[index]);
  translate(x[index], y[index]);
  rotate(r[index]);
  rect(-5, -10, 15, 20);
  pop();
  
  // up 2 pixels
  y[index] -= ySpeed[index];
  
  // rotate in radians
  r[index] += 0.02
  
  // if reach past the top a bunch
  if (y[index] < -150) {
    y[index] = 290;
    }
  }
}
