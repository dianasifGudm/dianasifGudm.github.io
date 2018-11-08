//breytur
var linulegt_munstur = true;

function setup() {
  createCanvas(400,400);
  background(255, 255, 0);
  fill(0);
  colorMode(HSB);
  frameRate(2);
}

function draw(){
  //20 raðir
  for(var r = 0; r < 20 ; r++) {
      //20 hringir í röð
      if (linulegt_munstur == true){
        //velja tilfallandi lit
        fill(random(0,360),75,100);
        for(var i = 0; i < 20 ; i++) {
          ellipse(10 + r*20, 10+i*20, 15, 15);
        }
      } else {
        for(var i = 0; i < 20 ; i++) {
          //velja tilfallandi lit
          fill(random(0,360),75,100);
          ellipse(10 + r*20, 10+i*20, 15, 15);
        }
      }
   }
}

function mouseClicked(){
  //Skipta á milli línulegs og breytilegs
  if (linulegt_munstur == true){
    linulegt_munstur = false
  } else {
    linulegt_munstur = true
  }
}
