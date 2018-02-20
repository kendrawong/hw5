var x = [];		//x range
var y = [];		//y range
var d = [];		//diameter range
var color = [];

function setup() {
  createCanvas(400, 400);
  colorMode(RGB)
  for (var index = 0; index < 50; index++) {
    x[index] = random(50, 350);
    y[index] = random(100, 250);
    d[index] = random(30, 100);
    color[index] = color(random(255), random(255), random(255));
  }
}
  
function draw() {
  background(255);
  noStroke();

  //draw fifty ellipses
  for (var index = 0; index < 50; index++) {
    fill(color[index]);
    ellipse(x[index], y[index], d[index]);
  
  if (random() < 50) {
    d[index] = random(10, 200);   // random diameter between 10 and 200
    } 
  }
}
