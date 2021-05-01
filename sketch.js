
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,hammer,rubber,stone,iron 

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var hammer = new Hammer(200,680);
	var rubber = new Rubber(400,680,50);
	var stone = new Stone(600,680,50,50);
	var plane = new Plane(600,height,850,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  hammer.display();
  rubber.display();
  stone.display();
  plane.display();
  
 
}



