const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,200,600,40);
	ball1=new BallClass(400,500,30,30)
	ball2=new BallClass(460,500,30,30)
	ball3=new BallClass(520,500,30,30)
	ball4=new BallClass(340,500,30,30)
	ball5=new BallClass(280,500,30,30)
    rope1 = new Rope(ball1.body,ground.body,0,0);
	rope2 = new Rope(ball2.body,ground.body,60,0);
	rope3 = new Rope(ball3.body,ground.body,120,0);
	rope4 = new Rope(ball4.body,ground.body,-60,0);
	rope5 = new Rope(ball5.body,ground.body,-120,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
   ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-40,y:-40})
	}
}

