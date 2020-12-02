
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render; 

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,40);
	dustbin = new Dustbin(1200,650);
	ground = new Ground(width/2,670,width,20);
	
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  drawSprites();

 paper.display();
 dustbin.display();
 ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}