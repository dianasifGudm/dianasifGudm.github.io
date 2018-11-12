//breytur

var mynd1;
var mynd2;
var pakkar;
var k = true;

function preload() {
  mynd1 = loadImage('minions2.jpeg');
  mynd2 = loadImage('minions.jpeg');
  pakkar = loadImage('Pakkar.png');
}

function setup() {
  createCanvas(500,300);
  //noStroke();
  fill(240);
  background(mynd1);
  colorMode(HSB);
  frameRate(1);
}

function draw(){
    //image(img, x, y, [width], [height])
    //imageMode(CENTER);
  //image(pakkar,random(0,600),random(1,300),30,30);
    //image(mynd,0,0,600,300);
}

function mouseClicked(){
    if (k==true){
      background(mynd2);
      image(pakkar,mouseX,mouseY, mouseY*0.5, mouseY*0.3);
      k=false;
    }else{
      background(mynd1);
      k=true;
    }


}
