var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug = true;
  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug = true;
  movingRect.velocityX=2;
  fixedRect.velocityX=-2;
}

function draw() {
  background("brown"); 
  /*movingRect.y = mouseY;
  movingRect.x = mouseX;
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y <= movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor = "yellow"
  fixedRect.shapeColor = "yellow"

  }
  else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }*/
 
  //bounce off algrithom
  
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2){
    movingRect.velocityX=(-1)*movingRect.velocityX
    fixedRect.velocityX=(-1)*movingRect.velocityX
    }

  drawSprites();
  
}