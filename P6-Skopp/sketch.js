
    var x_bolti = 15;
    var y_bolti = 15;
    var x_Faersla = 3;
    var y_Faersla = 8;
    var pallur_breidd = 60
    var stigateljari =0;
    var varid_i_rod = 0;
    var bonusteljari = 10

    var mynd1;
    var mynd2;

    function preload() {
      mynd1 = loadImage('minions.jpeg');
      mynd2 = loadImage('minions2.jpeg');
      mynd = mynd2;

    }


function setup() {
  createCanvas(400,450);
  fill(240);
  background(200,0,0);
  background(mynd1);
  colorMode(RGB);
  fill(255,150,0)
  textSize(15);
}

  function draw() {
      background(mynd);
      ellipse(x_bolti, y_bolti, 30, 30);
      x_bolti = x_bolti + x_Faersla;
      y_bolti = y_bolti +y_Faersla;

      if ((x_bolti > width-15) || (x_bolti < 15)) {
        x_Faersla = -x_Faersla; //skipta um formerki á x-stefnu
      }

      if ((y_bolti > height-15) || (y_bolti < 15)) {
        y_Faersla = -y_Faersla; //skipta um formerki á y-stefnu

        if (y_bolti > height-15) {
          fill(255,150,0);
          varid_i_rod = 0;
          bonusteljari = 10;
          pallur_breidd=60;
          mynd = mynd2;
        }
      }else {

        if ((x_bolti > mouseX-10) && (x_bolti < mouseX+pallur_breidd+10)) {

          if ((y_bolti > 385) && (y_bolti < 385+y_Faersla))  {
            stigateljari = stigateljari+1;
             y_Faersla = -y_Faersla; //skipta um formerki á y-stefnu
             fill(0,255,255);
             varid_i_rod = varid_i_rod + 1;
             bonusteljari = bonusteljari-1;
             pallur_breidd=pallur_breidd-10+bonusteljari
             mynd = mynd1;

             if (bonusteljari<1){
                 stigateljari = stigateljari+10;
                 bonusteljari = 10;
                 pallur_breidd=60;
             }
          }
       }
      }

      rect(mouseX, 400, pallur_breidd, 20); //pallur styttist m.v. varið í röð
      textSize(20);
      text("Stig: " + stigateljari,20,50);
      textSize(15);
      text("5 bónusstig eftir: " + bonusteljari,20,70);
      text(varid_i_rod,mouseX+5,440);


    }

function mouseClicked(){
  varid_i_rod = 0;
  bonusteljari = 10;
  pallur_breidd=60;
  stigateljari = 0;
}
