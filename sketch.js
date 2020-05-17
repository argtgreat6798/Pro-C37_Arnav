

var saveb;
function setup(){
var canvas = createCanvas(640,640);
background(255,255,255);
var arrayCoods = []
saveb = createButton("Clear",600,620);

}

function draw(){

  noStroke();
  textSize(35)
  fill(100,120,192);
  text("press space to clear",200,200);

  stroke("black");
strokeWeight(0);
//saveb.display();
}

function mouseDragged(){
line(pmouseX,pmouseY,mouseX,mouseY);
arrayCoods = (mouseX,mouseY)
console.log(arrayCoods)


//if(saveb.mousePressed){
  //background(255,255,255);
//}
}

function keyPressed(){
  background(255,255,255);
  
}