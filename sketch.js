
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var base1;
var base2;
var base3;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;

var ball;

var a;

function preload() { }

function setup() {
	
  createCanvas(1250, 550);

	engine = Engine.create();
	world = engine.world;

	  base1 = new Ground (625,530,1250,15);
    base2 = new Ground (600,400,280,15);
    base3 = new Ground (1000,200,180,15);

    ball = new Polygon (100,200,40);

    a = new Rope (ball.body, {x:200,y:350} );

    // Base 2 - level 1
    b1  = new BlockI (600,300);

    b2  = new BlockI (630,300);
    b3  = new BlockI (660,300);
    b4  = new BlockI (690,300);

    b5  = new BlockI (570,300);
    b6  = new BlockI (540,300);
    b7  = new BlockI (510,300);

     // Base 2 - level 2
     b8  = new BlockII (600,250);

     b9  = new BlockII (630,250);
     b10 = new BlockII (660,250);

     b11 = new BlockII (570,250);
     b12 = new BlockII (540,250);

     // Base 2 - level 3
     b13  = new BlockIII (600,200);

     b14  = new BlockIII (630,200);

     b15  = new BlockIII (570,200);

     // Base 2 - level 4
     b16  = new BlockIV (600,150);

     // Base 3 - level 1
     b17 = new BlockI (1000,150);

     b18 = new BlockI (1030,150);
     b19 = new BlockI (1060,150);

     b20 = new BlockI (970,150);
     b21 = new BlockI (940,150);

     // Base 3 - level 2
     b22 = new BlockII (1000,100);

     b23 = new BlockII (1030,100);

     b24 = new BlockII (970,100);

     // Base 3 - level 3
     b25 = new BlockIII (1000,50);

	Engine.run(engine);
  
}

function draw () {

  background(60,46,46);

  fill ("white");
  textSize(20);
  text ("Drag the Hexagonal stone and release it to destroy blocks. Press Space to get an other chance. Good Luck!!",30,40);

  rectMode(CENTER);

  Engine.update(engine);

  base1.display ();
  base2.display ();
  base3.display ();

  ball.display ();

  b1.display ();
  b2.display ();
  b3.display ();
  b4.display ();
  b5.display ();
  b6.display ();
  b7.display ();
 
  b8.display ();
  b9.display ();
  b10.display ();
  b11.display ();
  b12.display ();

  b13.display ();
  b14.display ();
  b15.display ();

  b16.display ();

  b17.display ();
  b18.display ();
  b19.display ();
  b20.display ();
  b21.display ();

  b22.display ();
  b23.display ();
  b24.display ();

  b25.display ();

  a.display ();

}

function mouseDragged () {

  Matter.Body.setPosition (ball.body, {x:mouseX,y:mouseY} )

}

function mouseReleased () {

  a.fly();

}

function keyPressed () {

  if (keyCode===32) {

    a.attach (ball.body);

  }

}
