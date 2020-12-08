
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(765,365,250,20);
	box2 = new Box(890,310,20,110);
	box3 = new Box(640,310,20,110);
	ground = new Ground(20,385,2400,15);
	paper = new Paper(170,352);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();

  
  drawSprites();
 
}

function keyPressed(){
 if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85}); 	 
 }	 
}



