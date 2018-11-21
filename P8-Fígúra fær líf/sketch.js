//breytur

function setup(){
  //teiknisvæði
  createCanvas (500,500);
}

function draw(){
  eggert(mouseX,mouseY,200,100,140,mouseY/2,true)
  eggert(500-mouseX,500-mouseY,150,200,75,300-mouseY/2,false)
}

function bakgrunnur(litur_bak){
  //bakgrunnur
  background(litur_bak);
  //andlit
}

function eggert(x,y,litur_andlits_raudur, litur_andlits_graenn,litur_andlits_blar,baklitur,hreinsa){
  //bakgrunnur
  if (hreinsa ==true){
      bakgrunnur(baklitur);
  }

  //fætur
  rect(x-y/8,y, y/4, 1.5*y);
  rect(x+y/2,y, y/4, 1.5*y);
  //búkur
  rect(x-y/8,y, y, y);
  //höfuð
  fill(litur_andlits_raudur, litur_andlits_graenn,litur_andlits_blar);
  ellipse(x, y, y, y);
  ellipse(x-y/8, y-y/8, y/6, y/6);
  ellipse(x+y/8, y-y/8, y/6, y/6);
  fill(litur_andlits_raudur, 130,100);
  ellipse(x-y/8, y-y/8, y/8, y/8);
  ellipse(x+y/8, y-y/8, y/8, y/8);
  fill(0,0,0);
  ellipse(x-y/8, y-y/8, y/12, y/12);
  ellipse(x+y/8, y-y/8, y/12, y/12);
    //munnur
  fill(255,0,0);
  ellipse(x, y+y/8, y/6, 6);
}
