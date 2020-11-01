var car, wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50, 200, 50, 50);
 // car.debug = true;
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(car.isTouching(wall||car.x>1470)){ 
     car.velocityX = 0;
     car.x = 1445;
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
    }
  drawSprites();
}