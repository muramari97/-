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
    x[i] = random(100,width-100);
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
      }else{
        image(balloon,x[count],y,balsize,balsize);
      }
    }else{
      image(balloon,x[count],y,balsize,balsize);
    }
  }
  //もし風船が割れてなかったら
  if(!bombBal && y < 0){
    x[count] = random(100,300);
    y = height;
  }
  //割れたとき
  if(bombBal){
    count += 1;
    //10回繰り返す
    if(count < 10){
      y = height;
      bombBal = false;
    }else{
      background(255);
      textSize(50);
      text('Clear!',100,300);
    }
  }
  
}
