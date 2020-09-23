var helicopterIMG, helicopterSprite, packageSprite,packageIMG, box1side, box2side, boxbottom;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 80 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

//Create a Ground
	ground = Bodies.rectangle(width/2, 350, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1side = new Box(310,615,20,100);
	 box2side = new Box(490,615,20,100);
	 boxbottom = new Box(400,655,200,20);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  drawSprites(); 
  box1side.display();
  box2side.display();
  boxbottom.display();
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  keyPressed();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);          
  } 
}



