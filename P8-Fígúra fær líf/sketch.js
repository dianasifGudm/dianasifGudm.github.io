//Eggertar á ferðinni

function setup() {
  createCanvas(600, 600);
  // Byggja eggerta með staðsetningu xy og höfuðlit
  eggert1 = new eggert(100,40,200,0,100);
  eggert2 = new eggert(300,30,0,0,200);
  eggert3 = new eggert(400,30,0,200,0);
  eggert4 = new eggert(500,30,200,80,200);
}

function draw() {
	background(100,10,130);
  fill(200,100,16);
  noStroke();
	ellipse(300,300,500,500);
  // Eggertar hreyfðir og byggðir
  eggert1.faera();
  eggert1.byggja();
  eggert2.faera();
  eggert2.byggja();
  eggert3.faera();
  eggert3.byggja();
  eggert4.faera();
  eggert4.byggja();
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
    this.munnlitur = color(200,0,0);
  }

  //byggja eggerta
  byggja(){
    stroke(0);
    fill(this.munnlitur);
    //fætur
    rect(this.x-this.y/8, this.y, this.y/4, 1.5*this.y);
    rect(this.x+this.y/2, this.y, this.y/4, 1.5*this.y);
    //búkur
    rect(this.x-this.y/8,this.y, this.y, this.y);
    //höfuð
    fill(this.hofudlitur);
    ellipse(this.x, this.y, this.y, this.y);
    //augu
    fill(this.augnlitur);
    ellipse(this.x-this.y/8, this.y-this.y/8, this.y/6, this.y/6);
    ellipse(this.x+this.y/8, this.y-this.y/8, this.y/6, this.y/6);
    fill(this.augasteinslitur);
    ellipse(this.x-this.y/8, this.y-this.y/8, this.y/8, this.y/8);
    ellipse(this.x+this.y/8, this.y-this.y/8, this.y/8, this.y/8);
    fill(0,0,0);
    ellipse(this.x-this.y/8, this.y-this.y/8, this.y/12, this.y/12);
    ellipse(this.x+this.y/8, this.y-this.y/8, this.y/12, this.y/12);
    //munnur
    fill(this.munnlitur);
    ellipse(this.x, this.y+this.y/8, this.y/6, 6);

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
