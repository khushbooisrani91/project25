const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3,dustbin4;
var ground;

function preload(){
  

}


function setup() {
	var canvas = createCanvas(1400,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,200,20);
	ground = new Ground(700,480,1400,20);
	dustbin1 = new Dustbin();
	dustbin2 = new Dustbin(1140,370,20,200);
	dustbin3 = new Dustbin(965,370,5,200);
	dustbin4 = new Dustbin(1060,460,150,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();
  drawSprites();
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
	  
	}
}

