var fixedRect,movingRect;

function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(200,100,80,50);
  movingRect=createSprite(200,300,50,30);
  fixedRect.debug=true;
  movingRect.debug=true;
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  movingRect.velocityY=-4;
  fixedRect.velocityY=4;
}

function draw() {
  background(0);  
  // movingRect.x=mouseX;
  // movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(Math.abs(movingRect.x-fixedRect.x)===fixedRect.width/2+movingRect.width/2
  ||Math.abs(movingRect.y-fixedRect.y)===fixedRect.height/2+movingRect.height/2)
  {
    fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  movingRect.velocityY=movingRect.velocityY*-1;
  fixedRect.velocityY=fixedRect.velocityY*-1;
  }
  
  rectMode(CENTER);
 drawSprites();

 
}