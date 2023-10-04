let selectedNumber;

function setup() {
  createCanvas(windowHeight, windowWidth);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255,192,55);
  fill(0);
  textAlign(CENTER ,CENTER)
  text('今日份花销： ' + selectedNumber, width / 2, height / 2);
}

function mousePressed() {
  selectedNumber = int(random(31)); // Randomly select a number between 0 and 30
}

