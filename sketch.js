var monkey;
var stone, stoneGroup;
var ground;
var gamestate = "play";
var distance = 0;
var database;

function preload(){
}

function setup(){
  createCanvas(displayWidth-20,displayHeight-30);
  monkey = createSprite(100, 500, 50, 50);
  monkey.shapeColor = "brown";

  ground = createSprite(4000, 595, 8000, 10);
  ground.shapeColor = "grey"

  stoneGroup = new Group();
}

function draw(){
  background("white");
  textSize(30);
  stroke("black");
  fill("black");
  text("Press space to jump", camera.position.x - 400, camera.position.y - 230);
  text("Press right arrow to go forward", camera.position.x - 400, camera.position.y - 260);
  textSize(50);
  text("Monkey Go Happy", camera.position.x + 40, camera.position.y - 250);

  console.log(monkey.y);

  monkey.collide(ground);
  camera.position.x = monkey.x;

  if(gamestate === "play"){
    monkey.velocityY = monkey.velocityY + 1.2;
    if(keyDown(RIGHT_ARROW)){
      distance = distance + 2;
      monkey.x = monkey.x + 10;
    }

    if(keyDown("space") && monkey.y > 560){
      monkey.velocityY = -14;
    }

    if(monkey.collide(stoneGroup)){
      gamestate = "end";
    }
    }else{
      textSize(150);
      fill("black");
      text("Game Over", camera.position.x - 350, camera.position.y);
    }

  spawnstone();
  drawSprites();
}

function spawnstone(){
  if(monkey.x % 800 === 0){
    var stone = createSprite(monkey.x + 700, 576, 40, 40);
    stone.shapeColor = "black";
    stone.lifetime = 1000;
    stoneGroup.add(stone);
  }
}