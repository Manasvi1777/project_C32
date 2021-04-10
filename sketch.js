const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var circle1,circle2,circle3,circle4,circle5,circle6,circle7,circle8,circle9;
var cons1,cons2,cons3,cons4,cons5,cons6,cons7,cons8;

function setup() {
  createCanvas(800,400);

  engine=Engine.create(); 
  world=engine.world;

  circle1 = new Circle(400,300,20);
  circle2 = new Circle(450,300,20);
  circle3 = new Circle(500,300,20);
  circle4 = new Circle(550,300,20);
  circle5 = new Circle(600,300,20);
  circle6 = new Circle(650,300,20);
  circle7 = new Circle(700,300,20);
  circle8 = new Circle(750,300,20);

  circle9 = new Circle(250,100,30);

  cons1 = new SlingShot(circle1.body,{x:400,y:1});
  cons2 = new SlingShot(circle2.body,{x:450,y:1});
  cons3 = new SlingShot(circle3.body,{x:500,y:1});
  cons4 = new SlingShot(circle4.body,{x:550,y:1});
  cons5 = new SlingShot(circle5.body,{x:600,y:1});
  cons6 = new SlingShot(circle6.body,{x:650,y:1});
  cons7 = new SlingShot(circle7.body,{x:700,y:1});
  cons8 = new SlingShot(circle8.body,{x:750,y:1});
  cons9 = new SlingShot(circle9.body,{x:200,y:100});

}

function draw() {
  background(233);  

  Engine.update(engine);

  detectcollision(circle9,circle1,cons1);
  detectcollision(circle9,circle2,cons2);
  detectcollision(circle9,circle3,cons3);
  detectcollision(circle9,circle4,cons4);
  detectcollision(circle9,circle5,cons5);
  detectcollision(circle9,circle6,cons6);
  detectcollision(circle9,circle7,cons7);
  detectcollision(circle9,circle8,cons8);

  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();

  cons1.display();
  cons2.display();
  cons3.display();
  cons4.display();
  cons5.display();
  cons6.display();
  cons7.display();
  cons8.display();
  cons9.display();

  fill("skyblue");
  circle9.display();

  drawSprites();
}
function mouseDragged() {
	
  Matter.Body.setPosition(circle9.body,{x:mouseX,y:mouseY});

}
function detectcollision(stone,circle,constraint) {
  circleBodyPosition=circle.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,circleBodyPosition.x,circleBodyPosition.y);
  if(distance<=circle.r+stone.r)
  {
   constraint.fly();
  }
}