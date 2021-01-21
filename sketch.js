//creating alases
var Engine=Matter.Engine;
var Bodies=Matter.Bodies;
var MWorld=Matter.World;

var myengine,myworld;
var ground,ball;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  myengine=Engine.create();
  myworld=myengine.world;
  var opt={
    isStatic: true
  }
  ground=Bodies.rectangle(100,180,800,20,opt);
  MWorld.add(myworld,ground)
}

function draw() {
  background(255,255,255);
  Engine.update(myengine)
  rectMode(CENTER)
  rect(ground.position.X,ground.position.Y,800,20)
}
