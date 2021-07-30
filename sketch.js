var background,backGroundImg
var snow1




function preload(){

backGroundImg=loadImage("snow2.jpg")


  
}



function setup() {
  createCanvas(1280,720);
  background=createSprite(640, 200, 50, 50);
  background.addImage(backGroundImg)

snow1=new Snow(100,100)
}

function draw() {
  
  snow1.display();
  drawSprites();
}