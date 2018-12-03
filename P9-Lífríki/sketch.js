//Slá niður Eggerta með því að smella á nef þeirra
//Minni Eggert gefur fleiri stig

var eggertar = []; //Listi - Array með Eggetrum
var stigateljari =0;
var hitti =0;

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < 10; i++){
      eggertar[i] = new eggert(i*50,i*10,i*20,0,i*20,i*20);
  }
}

function draw() {
	background(100,10,130);
  fill(200,100,16);
  //noStroke();
	ellipse(400,400,500,500);
  // Eggertar hreyfðir og byggðir
  for (var i = 0; i < eggertar.length; i++){
    eggertar[i].faera();
    eggertar[i].byggja();
  }
  fill(255,255,255)
  textSize(20);
  text("Stig: " + stigateljari,10,30);
  text("Smelltu á nebbann",550,30);
  text("Hittir: " + hitti,10,50);
  text(((800 - mouseY)/50).toFixed(0)    ,mouseX+20,mouseY+10);
}

function mouseClicked(){
  // Ef smellt er á nef Eggerts er honum eytt og teljari gefur stig eftir stærð og fjölda
  hitti =0
  for (var i = eggertar.length-1; i >= 0; i = i-1){
    if(fjarlægð(eggertar[i].x,eggertar[i].y,mouseX,mouseY) < mouseY/9){
		    eggertar.splice(i,1);
        stigateljari =  stigateljari + Number(((800 - mouseY)/50).toFixed(0));
        hitti = hitti+1;
	  }
  }
}
// Klassi fyrir breytur
class eggert{
  constructor(x,y,r,g,b) {
    this.x = x;
    this.y = y;
    this.dir = random(0,2*PI);
    this.speed = random(0,5);
    this.augnlitur = color(100,100,100);
    this.augasteinslitur = color(250,250,250);
    this.hofudlitur = color(r,g,b);
    this.neflitur = color(200,200,0);
    this.munnlitur = color(200,0,0);
  }

  //byggja Eggerta
  byggja(){
    stroke(0);
    fill(this.munnlitur);
    //fætur
    rect(this.x-this.y/12, this.y, this.y/4, 1.5*this.y);
    rect(this.x+this.y/2, this.y, this.y/4, 1.5*this.y);
    //búkur
    rect(this.x-this.y/12,this.y, this.y, this.y);
    //höfuð
    fill(this.hofudlitur);
    ellipse(this.x, this.y, this.y, this.y);
    //augu
    fill(this.augnlitur);
    ellipse(this.x-this.y/12, this.y-this.y/12, this.y/9, this.y/9);
    ellipse(this.x+this.y/12, this.y-this.y/12, this.y/9, this.y/9);
    fill(this.augasteinslitur);
    ellipse(this.x-this.y/12, this.y-this.y/12, this.y/12, this.y/12);
    ellipse(this.x+this.y/12, this.y-this.y/12, this.y/12, this.y/12);
    fill(0,0,0);
    ellipse(this.x-this.y/12, this.y-this.y/12, this.y/18, this.y/18);
    ellipse(this.x+this.y/12, this.y-this.y/12, this.y/18, this.y/18);
    //nef
    fill(this.neflitur);
    ellipse(this.x, this.y, this.y/9, this.y/9);
    textSize(30);
    //munnur
    fill(this.munnlitur);
    ellipse(this.x, this.y+this.y/12, this.y/5, 9);
    textSize(30);
  }

  // Hreyfir eggerta um skjáinn.
	faera(){
		this.x = this.x + this.speed*cos(this.dir);
		this.y = this.y + this.speed*sin(this.dir);
		this.speed = this.speed/1.05;
		if(this.speed < 0.1){
			this.dir = random(0,2*PI);
			this.speed = random(1,10);
		}
      if (fjarlægð(this.x,this.y,width/2,height/2) > 250){
        this.dir = atan((this.y - height/2)/(this.x-width/2));
        if(this.x - width/2 > 0){
        	this.dir = this.dir + PI;
        }
      }
	   }
   }
// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarlægð(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
