// This is a JavaScript file
var sample;

function preload() {
  sample = loadSound('assets/audio.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  sample.loop();
}

function draw() {
  background(200);
}