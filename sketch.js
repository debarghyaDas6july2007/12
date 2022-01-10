
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img;
var zombie_run;
var tower;
var Player;
var zombies = [];
var arrow = [];

function preload(){
bg_img = loadImage("bg_img2.jpeg")
towerImage = loadImage("tower.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  Player = new Player(400,400,30,30)

}


function draw() 
{
  background(bg_img);
  
  Engine.update(engine);
  Player.display();

  push();
  translate();
  rotate();
  imageMode(CENTER);
  image(towerImage, 200,520, 200, 600);
  pop();

  drawSprites();

}

