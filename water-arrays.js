//water dripping from tube

var x = [];
var y = [];
var ySpeed = [] //ellipse speed
var s = []			//range of size of ellipse

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
    for (var index = 0; index < 30; index++) {
    x[index] = 232;    			
		y[index] = 213;
    ySpeed[index] = random(1, 5);
    s[index] = random(5, 10);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  
  for (var index = 0; index < 30; index++) {
    ellipse(x[index], y[index], s[index]);
    y[index] = y[index] + ySpeed[index];

	// reset drip
    if (y[index] > 450) {
      y[index] = 220;
    }
  }
}
