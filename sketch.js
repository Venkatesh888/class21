var fixedRect, movingRect,box1,box2,box3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(150,200,80,50);
  box1.shapeColor = "green";
  box2 = createSprite(450,300,50);
  box2.shapeColor = "green";
  box3 = createSprite(300,550,70,80);
  box3.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)||isTouching(movingRect,box1)||isTouching(movingRect,box2)||isTouching(movingRect,box3)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    box1.shapeColor = "aqua";
    box2.shapeColor = "orange";
    box3.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    box1.shapeColor = "green";
    box2.shapeColor = "green";
    box3.shapeColor = "green";
  }
  
  drawSprites();
}

