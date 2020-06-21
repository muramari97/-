let balloon; // 風船
let haretsu; //破裂した風船
let balsize = 100;
let x;
let y;
let bombBal = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  balloon = loadImage('sozai/balloon.png');
  haretsu = loadImage('sozai/haretsu.png');
  x = random(width);
  y = height;
}

function draw() {
  if(!bombBal){
    background(255);
    x = random(-20,20);
    y -= 3;
    //当たり判定
    if (
      mouseX > x - balsize &&
      mouseX < x + balsize &&
      mouseY > y - balsize &&
      mouseY < y + balsize
    ) {
      if (mouseIsPressed) {
        image(haretsu,x,y,balsize,balsize);
        bombBal = true;
      }else{
        image(balloon,x,y,balsize,balsize);
      }
    }else{
      image(balloon,x,y,balsize,balsize);
    }
  }


}
