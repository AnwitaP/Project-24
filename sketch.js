const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var box1, box2, box3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100, 600, 50);
	ground = new Ground(600,height,1200,20)

	box1 = new Dustbin(730, 640, 20, 100);
	box2 = new Dustbin(670, 680, 100, 20);
	box3 = new Dustbin(610, 640, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  background("skyblue");
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:65, y:-65});
}
}


