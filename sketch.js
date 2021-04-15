const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render


var dustbinObj,groundObject	
var engine,world;
var paperobj;




function setup() {
	var canvas = createCanvas(1600, 700);
rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;



	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobj= new Paper(100,550,100)


 
  	Engine.run(engine);

}


function draw() {
rectMode(CENTER)
  background(230);
  Engine.update(engine);



  groundObject.display();
  dustbinObj.display();
  paperobj.display();



}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
	  
    Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:2300,y:5450})
  
  }

}