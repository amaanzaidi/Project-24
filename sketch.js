const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var page;
var ground;
var line1,line2,line3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
   page = new Page(100,590,20);
   ground = new Ground(400,600,800,10);
   line1 = new bucket(590,590,150,10);
   line2 = new bucket(510,550,10,80);
   line3 = new bucket(670,550,10,80);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  page.display();
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  drawSprites();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(page.body,page.body.position,{x:10,y:-20});

  
  }
}