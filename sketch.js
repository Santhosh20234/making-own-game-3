/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;*/
var background_image, background;
var snake, snakeImage;
var gameState = "PLAY"
var apple, appleImg;
var points = 0
var line, lineGroup
function preload(){
 appleImg = loadImage("./assets/apple.png")
}

function setup()
{
  createCanvas(800, 800);
  background_image = loadImage("./assets/snakeBackground.webp")
  snake = createSprite(100, 100, 40, 40)
  edges = createEdgeSprites()

  //vertical lines
  line = createSprite(62, 100, 10, 2000)
  line = createSprite(130, 100, 10, 2000)
  line = createSprite(130 + 67.5, 100, 10, 2000)
  line = createSprite(130 + 67.5*2, 100, 10, 2000)
  line = createSprite(130 + 67.5*3, 100, 10, 2000)
  line = createSprite(130 + 67.5*4, 100, 10, 2000)
  line = createSprite(130 + 67.5*5, 100, 10, 2000)
  line = createSprite(130 + 67.5*6, 100, 10, 2000)
  line = createSprite(130 + 67.5*7, 100, 10, 2000)
  line = createSprite(130 + 67.5*8, 100, 10, 2000)
  line = createSprite(130 + 67.5*9, 100, 10, 2000)

  //horizontal lines

  line = createSprite(400, 65, 1000, 10)
  line = createSprite(400, 66.6*2, 1000, 10)
  line = createSprite(400, 66.6*3, 1000, 10)
  line = createSprite(400, 66.6*4, 1000, 10)
  line = createSprite(400, 66.6*5, 1000, 10)
  line = createSprite(400, 66.6*6, 1000, 10)
  line = createSprite(400, 66.6*7, 1000, 10)
  line = createSprite(400, 66.6*8, 1000, 10)
  line = createSprite(400, 66.6*9, 1000, 10)
  line = createSprite(400, 66.6*10, 1000, 10)
  line = createSprite(400, 66.6*11, 1000, 10)
  
lineGroup.add(line)

  //Math.floor(Math.random() * (max - min) + min);
  apple = createSprite( Math.round(Math.random() * (600 - 200) + 200), Math.round(Math.random() * (600 - 200) + 200))
  apple.addImage(appleImg)
  apple.scale = 0.1
  
}

function draw() 
{
  background(background_image);
  textSize(30)
  text("Points: " + points, 650, 40)
  
  if(gameState === "PLAY"){
    snakeControl()
  }
 
  if(snake.isTouching(edges)){
    gameState = "END"
    snake.setSpeedAndDirection(0, 0)
  }
  
  snake.collide(edges)

  if(snake.isTouching(apple)){
  points = points + 1
  apple.destroy()
  apple = createSprite( Math.round(Math.random() * (600 - 200) + 200), Math.round(Math.random() * (600 - 200) + 200))
  apple.addImage(appleImg)
  apple.scale = 0.1
  }

  if(snake.isTouching(lineGroup)){
    
    
  }
 drawSprites()
}

function snakeControl(){
  
if(keyDown("RIGHT_ARROW")){

  snake.setSpeedAndDirection(2, 0)
}

if(keyDown("LEFT_ARROW")){

  snake.setSpeedAndDirection(-2, 0)
}

if(keyDown("UP_ARROW")){

  snake.setSpeedAndDirection(-2, 90)
}

if(keyDown("DOWN_ARROW")){

  snake.setSpeedAndDirection(2, 90)
}

}