//breytur
var karl1, karl2, karl3;

function setup() {
  createCanvas(600, 600);
  // Búum til þrjá karl hluti.
  karl1 = new karl(200,400,100);
  karl2 = new karl(300,300,75);
  karl3 = new karl(400,300,150);
}

function draw() {
	background(200,150,0);
  fill(207,93,216);
  noStroke();
	ellipse(300,300,500,500);
  // Ef hluturinn er nálgt miðjunni, þá hreyfir hann sig
  // Ef ekki þá stoppar hann og blikkar bara augunum.
  karl1.move();
  karl1.show();
  karl2.move();
  karl2.show();
  karl3.move();
  karl3.show();
}

// Klasinn karl
// (x,y): er miðpunkturinn sem hann er teiknaður útfrá.
// bukur: er lengdin á búknum
// dir: er stefnan sem hann ferðast í
// speed: er hraðinn sem hann ferðast á
// eyecolor: er liturinn á augunum hans
class karl{
  constructor(x,y,bukur) {
    this.x = x;
    this.y = y;
    this.bukur = bukur;
    this.dir = random(0,2*PI);
    this.speed = random(0,5);
    this.eyeColor = color(100,100,100);
  }

  // Teiknar geimveruna karl
  show(){
    rectMode(CENTER);
    strokeWeight(1.5);
    stroke(0);
    // Teiknum búkinn
    fill(236,36,94);
    rect(this.x,this.y,40,this.bukur);
    // Teiknum hausinn
    fill(255);
    ellipse(this.x,this.y - this.bukur/2, 80,80);
    // Teiknum augun
    fill(this.eyeColor);
    ellipse (this.x - 25,this.y - this.bukur/2, 20,40);
    ellipse (this.x + 25,this.y - this.bukur/2, 20,40);
    // Teiknum fæturna
    line (this.x - 20, this.y + this.bukur/2, this.x - 20, this.y + this.bukur/2 + 50);
    line (this.x + 20, this.y + this.bukur/2, this.x + 20, this.y + this.bukur/2 + 50);
  }

  // Hreyfir karl um skjáinn.
  // Hann minnkar sífelt hraðann, en velur svo slembistenfu
  // og fyglir henni á nyjum slbenum hraða.
	move(){
		this.x = this.x + this.speed*cos(this.dir);
		this.y = this.y + this.speed*sin(this.dir);
		this.speed = this.speed/1.05;
		if(this.speed < 0.1){
			this.dir = random(0,2*PI);
			this.speed = random(1,5);
		}
      if (fjarlægð(this.x,this.y,width/2,height/2) > 250){
      	this.blink();
        this.dir = atan((this.y - height/2)/(this.x-width/2));
        if(this.x - width/2 > 0){
        	this.dir = this.dir + PI;
        }
      }
	}

  // Velur slembinn lit fyrir augun á karl.
	blink(){
		this.eyeColor = color(random(255), random(255), random(255));
	}
}

// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarlægð(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
