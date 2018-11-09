//breytur
function setup() {
  createCanvas(600,600);
  background(100,200,0);
  strokeWeight(1);
  stroke(1);
}

function draw(){
  if(mouseX > 0 && mouseX < 200){
    fill(200,200,0);
    if(mouseY < 300){
      fill(236,36,94);
      ellipse(mouseX-15, mouseY-15, 30, 30)
    }
    else{
      fill(26,36,94);
      ellipse(mouseX-15, mouseY-15, 30, 30);
    }
  }
  if(mouseX > 200 && mouseX < 400){
    fill(200,200,0);
    if(mouseY<300){
      fill(180,200,94);
      rect(mouseX-30, mouseY-30, 30, 30);
    }
    else {
      fill(80,200,94);
      rect(mouseX-30, mouseY-30, 30, 30);
    }
  }
  if(mouseX > 400 && mouseX < 600){
    fill(200,200,0);
    if(mouseY<300){
      fill(236,36,94);
      triangle(mouseX,mouseY, mouseX-30,mouseY, mouseX-15, mouseY-25);
    }
    else{
      fill(36,36,94);
      triangle(mouseX,mouseY, mouseX-30,mouseY, mouseX-15, mouseY-25);
    }

    }
}
