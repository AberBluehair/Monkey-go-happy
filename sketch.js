//Global Variables
var bananaImage,obstacleImage,bananaGroup,obstacleGroup,bgimg,bg,score,Monkey_run,Monkey,ground,score = 0,Nomsound

function preload(){
  bgimg = loadImage("jungle.jpg");
  Monkey_run = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  Nomsound = loadSound("NOM.mp3")
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
}
 function setup() {
  createCanvas(600,300);
   fruitGroup = createGroup();
 obstacleGroup = createGroup();
  bg = createSprite(350,40,700,100)
  bg.addImage("JUNGLE",bgimg)
  bg.scale = 1.1
  bg.velocityX = -6
  ground = createSprite(350,275,700,10);
  ground.visible =false;
  Monkey = createSprite(40,200,610,610);
  Monkey.addAnimation("RUN",Monkey_run)
  Monkey.scale = 0.12
  //Monkey.debug = true;
  Monkey.setCollider("rectangle",0,0,600,600,0)
  ground.debug = true;
}


function draw(){
  background(255);
  drawSprites();
  stroke("white")
  textSize(20)
  fill("white")
  text("Score :"+score,500,50)
  Monkey.collide(ground)
  if(bg.x < 60)
   { 
    bg.x = bg.width / 2.5
   }
  switch(score){
    case 10: Monkey.scale = 0.12;
             break;
    case 20: Monkey.scale = 0.14;
             break;
    case 30: Monkey.scale = 0.16;
             break;
    case 40: Monkey.scale = 0.18;
             break;
    default: break;
  }
  if(keyDown("space")&&(Monkey.y = 225))
{
Monkey.velocityY = -17;
}
Monkey.velocityY=Monkey.velocityY+1;
    banana();
    obstacle();
    if (fruitGroup.collide(Monkey))
    {
     fruitGroup.destroyEach()
      score = score+2
      Nomsound.play()
    }
    if (obstacleGroup.collide(Monkey))
    {
    score = score -5
      obstacleGroup.destroyEach()
    }
 }
function banana() {
  if(frameCount%80===0) 
  {
   var Banana = createSprite(600,200,10,10)
   Banana.scale = 0.05
    Banana.velocityX = -10
   Banana.y = random(140,170)
    Banana.addImage("Yummy",bananaImage)
    fruitGroup.add(Banana)
  }
}
function obstacle() {
  if(frameCount%160===0)
  {
    var stone = createSprite(600,240,10,10)
    stone.addImage("ROCK",obstacleImage)
    stone.scale = 0.15
    stone.velocityX = -10
    obstacleGroup.add(stone)
  }
}