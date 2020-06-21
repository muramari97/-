let balloon; // 風船
let haretsu; //破裂した風船
let balsize = 100;
let x = [];
let y;
let bombBal = false;
let count = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  balloon = loadImage('sozai/balloon.png');
  haretsu = loadImage('sozai/haretsu.png');
  for(let i=0;i<10;i++){
    x[i] = random(width);
  }
  y = height;
}

function draw() {
  
  if(!bombBal){
    background(255);
    x[count] += random(-10,10);
    y -= 3;
    //当たり判定
    if (
      mouseX > x[count] - balsize &&
      mouseX < x[count] + balsize &&
      mouseY > y - balsize &&
      mouseY < y + balsize
    ) {
      if (mouseIsPressed) {
        image(haretsu,x[count],y,balsize,balsize);
        bombBal = true;
        count += 1;
      }else{
        image(balloon,x[count],y,balsize,balsize);
      }
    }else{
      image(balloon,x[count],y,balsize,balsize);
    }
  }
  
  //10回繰り返す
  if(bombBal && count < 10){
    y = height;
    bombBal = false;
  }

}
