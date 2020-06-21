let balloon; // 風船
let haretsu; //破裂した風船
let x;
let y;

function setup() {
  createCanvas(windowWidth,windowHeight);
  balloon = loadImage('sozai/balloon.png');
  haretsu = loadImage('sozai/haretsu.png');
  x = random(width/5);
  y = height;
}

function draw() {
  background(255);
  x = random(-20,20);
  y -= 3;
  image(balloon,x,y,100,100);
}
