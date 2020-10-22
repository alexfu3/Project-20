var car, wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50, 200, 50, 50);
  car.setCollider("rectangle",0,0,car.width+10,car.height)
 // car.debug = true;
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(car.x-wall.x < car.width/2 + wall.width/2 &&
    wall.x - car.x <car.width/2 + wall.width/2 &&
    car.y-wall.y < car.height/2 + wall.height/2 &&
    wall.y - car.y <car.height/2 + wall.height/2){ 
     deformation = 0.5*weight*speed*speed/22500
     if(deformation<100){
      car.shapeColor = "green";
     }
     else if(deformation>100 && deformation<180){
      car.shapeColor = "yellow";
     }
     else if(deformation>180){
       car.shapeColor = "red";
     }
    else{
       car.shapeColor = "blue";
      } 
      car.velocityX = 0;
    }
  drawSprites();
}