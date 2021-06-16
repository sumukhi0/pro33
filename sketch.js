var backgroundImg,background;
var snow;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  background = createSprite(500, 200, 800, 400);
  background.addImage(backgroundImg);
  snow = new Snow(400,200);
}

function draw() { 
  drawSprites();
  background.display();
  snow.display();
}
