
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var player;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,598,1200,10);
player=new Player(30,580,30,60);

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
 player.display();
 spawnObstacles();
 drawSprites();
}

function spawnObstacles(){
	if(frameCount%130===0){
	var obstacle=createSprite(1200,580,20,20);
	obstacle.shapeColor="yellow";
	obstacle.velocityX=-2;
 }
}

