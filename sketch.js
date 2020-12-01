var PLAY = 1;
var END = 0;
var gameState = PLAY;


var monkey, monkey_running, moneky_still;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;

var score = 0;
var backGround;
var ground;



function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png",  "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png",      "sprite_6.png", "sprite_7.png", "sprite_8.png")
  monkey_still = loadAnimation("sprite_0.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backGroundImage = loadImage("jungle.jpg");

}


function setup() {

  createCanvas(600, 400);

  backGround = createSprite(200, 200, 20, 20);
  backGround.addImage(backGroundImage);
  backGround.velocityX = -4;

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.addAnimation("still", monkey_still);
  monkey.scale = 0.1;
  
  
  
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  console.log(ground.x);
  obstaclesGroup = createGroup();
  bananasGroup = createGroup();
  
  


}


function draw() {
  monkey.collide(ground);

    if(gameState === PLAY){
    
    
    if (ground.x < 400) {
    ground.x = ground.width / 2;
    }
      
    monkey.collide(ground);

    if (backGround.x < 150) {
    backGround.x = backGround.width / 2;
    }



    if (score > -1) {

    if (keyDown("space") && monkey.y >= 310) {
      monkey.velocityY = -19;
    }

    } 
 


    if (score > 0) {

    monkey.scale = 0.11;
    if (keyDown("space") && monkey.y >= 305) {
      monkey.velocityY = -19;
    }

    }

    if (score > 1) {

    monkey.scale = 0.12;
    if (keyDown("space") && monkey.y >= 300) {
      monkey.velocityY = -19;
    }

    }

    if (score > 2) {

    monkey.scale = 0.13;
    if (keyDown("space") && monkey.y >= 295) {
      monkey.velocityY = -19;
    }
    }  

    if (score > 3) {

    monkey.scale = 0.14;
    if (keyDown("space") && monkey.y >= 280) {
      monkey.velocityY = -19;
    }
    } 
   if (score > 4) {

    monkey.scale = 0.15;
    if (keyDown("space") && monkey.y >= 285) {
      monkey.velocityY = -19;
    }

    } 
 
    if (score > 5) {

    monkey.scale = 0.16;
    if (keyDown("space") && monkey.y >= 390) {
      monkey.velocityY = -19;
    }

    } 

    if (score > 6) {

    monkey.scale = 0.17;
    if (keyDown("space") && monkey.y >= 395) {
      monkey.velocityY = -19;
    }
    }

    if (score > 7) {

    monkey.scale = 0.18;
    if (keyDown("space") && monkey.y >= 400) {
      monkey.velocityY = -19;
    }   
    }  
    
    if( (score < 100 ) && (score >8)) {

     monkey.scale = 0.2;
    } 
      
    if (keyDown("space")) {
      monkey.velocityY = -19;
    }   

    
    if(obstaclesGroup.isTouching(monkey)){
      
         gameState = END;
     }
    
  

 } 
  if(gameState===END){
    
    
     ground.velocityX = 0;
     monkey.changeAnimation("still",monkey_still);
     monkey.velocityY=0;
     backGround.velocityX=0;
    
     stroke("red");
     textSize(20);
     fill("black");
     text("PRESS 'R' TO RESTART",120,200);   
     
     
      //set lifetime of the game objects so that they are never       destroyed
     obstaclesGroup.setLifetimeEach(-1);
     bananasGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     bananasGroup.setVelocityXEach(0); 
     
    
    if(keyDown("r")){
      reset();
    }
    
  }   




  if (frameCount % 80 === 0) {

    banana = createSprite(700, 40, 20, 20);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(40,400) * 0.3);
    banana.velocityX = -4;
    banana.setLifetime = 200;
    banana.scale = 0.1;
    bananasGroup.add(banana);
    banana.lifeTime = 200;

  }


  ground.visible = false;

  monkey.velocityY = monkey.velocityY + 0.8;

  
  spawnObstacle();
  touchingBanana();
  drawSprites();
    
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500, 50);
  
    
}

function spawnObstacle(){
   
   if(frameCount%250===0){
     obstacle= createSprite(700,330,100,100);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.14;
     obstacle.velocityX=-4;
     obstacle.lifetime=200;
     obstaclesGroup.add(obstacle);
     
   }

}

function touchingBanana() {

  if (bananasGroup.isTouching(monkey)) {

    bananasGroup.destroyEach();
    banana.VelocityX = 0;
    survivalTime = 1;
    score = score + 2;

  }
}
