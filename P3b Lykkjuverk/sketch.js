//breytur
var staekkandi_hringir = true
var teljari = 1
var haekkandi_litur=true

function setup() {
  createCanvas(400,400);
  background(0, 0, 0);
  fill(0);
  colorMode(HSB);
  frameRate(100);
}

function draw(){
if (haekkandi_litur==true){
  teljari=teljari+1;
  if (teljari==255){
    haekkandi_litur=false;
  }
}
else{
  teljari=teljari-1;
  if (teljari==1){
    haekkandi_litur=true;
  }
}
      fill(teljari,75,100);
      for(var i = 0; i < 20 ; i++) {
        fill(teljari+i*3,75+i*8,10+i*8);
        rect(200-teljari, 200-teljari, 400-i*20, 400-i*20);
        for(var r = 0; r < 20 ; r++) {
          fill(teljari+i*2,75+r*8,100+r*8);
          ellipse(200, 200, 400-i*20, 400-i*20);
          ellipse(70+teljari, 70+teljari, 20, 20);
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
