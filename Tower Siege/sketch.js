
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;

function preload()
{
  polygonImage = loadImage("polygon.png");
}
function setup() {
  createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  polygon = Bodies.circle(50,300,40);
  World.add(world,polygon);
   slingshot = new SlingShot(this.polygon,{x:100,y:250});
  Engine.run(engine);

  ground1 = new Ground (400,400,220,10);
  ground2 = new Ground (700,275,210,10);
  ground3 = new Ground (500,490,1000,10);

  block1 = new Block (315,375,30,40);
  block2 = new Block (345,375,30,40);
  block3 = new Block (375,375,30,40);
  block4 = new Block (405,375,30,40);
  block5 = new Block (435,375,30,40);
  block6 = new Block (465,375,30,40);
  block7 = new Block (495,375,30,40);
  block8 = new Block (345,335,30,40);
  block9 = new Block (375,335,30,40);
  block10 = new Block (405,335,30,40);
  block11 = new Block (435,335,30,40);
  block12 = new Block (465,335,30,40);
  block13 = new Block (375,295,30,40);
  block14 = new Block (405,295,30,40);
  block15 = new Block (435, 295,30,40);
  block16 = new Block (405,255,30,40)

  block17 = new Block (615,250,30,40);
  block18 = new Block (645,250,30,40);
  block19 = new Block (675,250,30,40);
  block20 = new Block (705,250,30,40);
  block21 = new Block (735,250,30,40);
  block22 = new Block (765,250,30,40);
  block23 = new Block (795,250,30,40);
  block24 = new Block (645,210,30,40);
  block25 = new Block (675,210,30,40);
  block26 = new Block (705,210,30,40);
  block27 = new Block (735,210,30,40);
  block28 = new Block (765,210,30,40);
  block29 = new Block (675,170,30,40);
  block30 = new Block (705,170,30,40);
  block31 = new Block (735, 170,30,40);
  block32 = new Block (705,130,30,40)
  
  

  
}


function draw() {
  background("black");
 textSize(20);
  fill("turquoise");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the Blocks.",10,20);
  text("SCORE: "+score,10,40);
  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();
  ground1.display();
  ground2.display();
  ground3.display();
  fill(255, 97, 234);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(253, 255, 138);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(156, 145, 255);
  block13.display();
  block14.display();
  block15.display();
  fill(135, 255, 249);
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill(253, 255, 138);
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill(255, 97, 234);
  block29.display();
  block30.display();
  block31.display();
  fill(156, 145, 255);
  block32.display();

  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  block7.Score();
  block8.Score();
  block9.Score();
  block10.Score();
  block11.Score();
  block12.Score();
  block13.Score();
  block14.Score();
  block15.Score();
  block16.Score();
  block17.Score();
  block18.Score();
  block19.Score();
  block20.Score();
  block21.Score();
  block22.Score();
  block23.Score();
  block24.Score();
  block25.Score();
  block26.Score();
  block27.Score();
  block28.Score();
  block29.Score();
  block30.Score();
  block31.Score();
  block32.Score();
 

 // drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
 
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}




