//breytur
var breidd_andlits = 100;
var haed_andlits  = 150;
var litur_andlits_raudur = "200"
var litur_andlits_graenn = "100"
var litur_andlits_blar = "200"
var haed_auga = 20
var breidd_auga= 30
var x_auga = 0
var y_auga = 0
var litur_auga = 180
var haed_munnur = 10
var breidd_munnur= 50
var litur_munnur = 100

var x = 150
var y = 150
var hopp = 1
var Klikk = false

function setup(){
  //teiknisvæði
  createCanvas (300,300);
}

function draw(){
  //bakgrunnur
  background(100);
  //andlit
  fill(litur_andlits_raudur, litur_andlits_graenn,litur_andlits_blar);
  ellipse(x, y, breidd_andlits, haed_andlits);
  //augu.  x_auga og y_auga hreyfa augu
  fill(255,255,255);
  ellipse(x-25, y-20, breidd_auga, haed_auga);
  ellipse(x+25, y-20, breidd_auga, haed_auga);
  fill(litur_andlits_raudur, 130,100);
  ellipse(x-25+x_auga, y-20+y_auga, breidd_auga*0.5, haed_auga*0.5);
  ellipse(x+25+x_auga, y-20+y_auga, breidd_auga*0.5, haed_auga*0.5);
  fill(0,0,0);
  ellipse(x-25+x_auga, y-20+y_auga, breidd_auga*0.2, haed_auga*0.2);
  ellipse(x+25+x_auga, y-20+y_auga, breidd_auga*0.2, haed_auga*0.2);
  //skegg
  triangle(x-breidd_munnur/2,y+30-haed_munnur/2, x+breidd_munnur/2,y+30-haed_munnur/2, x,y+25-haed_munnur/2);
  triangle(x-breidd_munnur/5,y+30+haed_munnur/2, x+breidd_munnur/5,y+30+haed_munnur/2, x,y+haed_andlits/3+5);
  //munnur
  fill(255,0,0);
  ellipse(x, y+30, breidd_munnur, haed_munnur);




  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mouseClicked(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  x = 150;
  y = 150;
  haed_andlits   = random(95,  250);
  breidd_andlits  = random(120, 250);
  litur_andlits_raudur = random(100, 250)
  litur_andlits_graenn = random(100, 250)
  litur_andlits_blar = random(100, 250)
  haed_auga    = random(10,  40);
  breidd_auga    = random(10,  40);
  haed_munnur    = random(5,  15);
  breidd_munnur    = random(10,  breidd_andlits-70);

  if (hopp == 1){
    y=haed_andlits/2;
    x_auga = breidd_auga/random(4,  breidd_auga);
    y_auga = haed_auga/random(4,  haed_auga);
    hopp=2
  } else {
    y=300-haed_andlits/2
    x_auga = -breidd_auga/random(4,  breidd_auga);
    y_auga = -haed_auga/random(4,  haed_auga);

    hopp =1
    Klikk = true
  }
}
function mouseMoved(){
    x_auga = 0;
    y_auga = 0;

if (Klikk == true){
  Klikk = false
  haed_auga =haed_auga +5;
  breidd_auga =breidd_auga +5;
  breidd_munnur = breidd_munnur+20
}

}
