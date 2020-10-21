var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,30,30);
  bullet.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);

  thickness=random(22,83);
  bullet.velocityX = 5;
}

function draw() {
  background(255,255,255);
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5 *weight*speed*speed/(thickness*thickness*thickness)

    if (damage>10){
      wall.shapeColor="red";
    }

    if (damage<10){
      wall.shapeColor="green"
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}