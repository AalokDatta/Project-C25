
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  box1 = new Box(700,680,170,20);
	box2 = new Box(780,680,20,120); 
	box3 = new Box(620,680,20,120);
	ground = new Ground(width/2, 750, width, 10 );
	paper = new Paper(200,200,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  drawSprites();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  paper.display();
  
  
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25});

  }

}

