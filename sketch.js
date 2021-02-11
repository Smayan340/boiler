
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	hammer1 = new Hammer(100,200,10,10);
	plane1 = new Plane(300,200,10,10);
	rubber1 = new Rubber(500,200,10,10);
	stone1 = new Stone(700,200,10,10);
		


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
hammer1.display();
	plane1.display();
	rubber1.display();
	stone1.display();
  
  drawSprites();
 
}



