
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var particles=[];
var plinkos = [];
var Divisons= [];
var Divisonheight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480,590);



	engine = Engine.create();
	world = engine.world;
	ground   = new Ground(240,580,500,20);
	Divider1 = new Dividers(2,495,10,150);
	Divider2 = new Dividers(80,495,10,150);
	Divider3 = new Dividers(160,495,10,150);
	Divider4 = new Dividers(240,495,10,150);
	Divider5 = new Dividers(320,495,10,150);
	Divider6 = new Dividers(400,495,10,150);
  Divider7 = new Dividers(477,495,10,150);
  //1st row
  plinko1 = new Plinko(20,60);
  plinko2 = new Plinko(60,60);
  plinko3 = new Plinko(100,60);
  plinko4 = new Plinko(140,60);
  plinko5 = new Plinko(180,60);
  plinko6 = new Plinko(220,60);
  plinko7 = new Plinko(260,60);
  plinko8 = new Plinko(300,60);
  Plinko9 = new Plinko(340,60);
  Plinko10 = new Plinko(380,60);
  Plinko11 = new Plinko(420,60);
  Plinko12 = new Plinko(460,60);
  //2nd row
  plinko13 = new Plinko(20,120);
  plinko14 = new Plinko(60,120);
  plinko15 = new Plinko(100,120);
  plinko16 = new Plinko(140,120);
  plinko17 = new Plinko(180,120);
  plinko18 = new Plinko(220,120);
  plinko19 = new Plinko(260,120);
  plinko20 = new Plinko(300,120);
  Plinko21 = new Plinko(340,120);
  Plinko22 = new Plinko(380,120);
  Plinko23 = new Plinko(420,120);
  Plinko24 = new Plinko(460,120);
  //Creating 3rd row
  plinko25 = new Plinko(20,180);
  plinko26 = new Plinko(60,180);
  plinko27 = new Plinko(100,180);
  plinko28 = new Plinko(140,180);
  plinko29 = new Plinko(180,180);
  plinko30 = new Plinko(220,180);
  plinko31 = new Plinko(260,180);
  plinko32 = new Plinko(300,180);
  Plinko33 = new Plinko(340,180);
  Plinko34 = new Plinko(380,180);
  Plinko35 = new Plinko(420,180);
  Plinko36 = new Plinko(460,180);
  //creating 4th row
  plinko37 = new Plinko(20,240);
  plinko38 = new Plinko(60,240);
  plinko39 = new Plinko(100,240);
  plinko40 = new Plinko(140,240);
  plinko41 = new Plinko(180,240);
  plinko42 = new Plinko(220,240);
  plinko43 = new Plinko(260,240);
  plinko44 = new Plinko(300,240);
  Plinko45 = new Plinko(340,240);
  Plinko46 = new Plinko(380,240);
  Plinko47 = new Plinko(420,240);
  Plinko48 = new Plinko(460,240);
  //creating 5th row
  plinko49 = new Plinko(20,300);
  plinko50 = new Plinko(60,300);
  plinko51 = new Plinko(100,300);
  plinko52 = new Plinko(140,300);
  plinko53 = new Plinko(180,300);
  plinko54 = new Plinko(220,300);
  plinko55 = new Plinko(260,300);
  plinko56 = new Plinko(300,300);
  Plinko57 = new Plinko(340,300);
  Plinko58 = new Plinko(380,300);
  Plinko59 = new Plinko(420,300);
  Plinko60 = new Plinko(460,300);
  //Creating 6th row
  plinko61 = new Plinko(20,360);
  plinko62 = new Plinko(60,360);
  plinko63 = new Plinko(100,360);
  plinko64 = new Plinko(140,360);
  plinko65 = new Plinko(180,360);
  plinko66 = new Plinko(220,360);
  plinko67 = new Plinko(260,360);
  plinko68 = new Plinko(300,360);
  Plinko69 = new Plinko(340,360);
  Plinko70 = new Plinko(380,360);
  Plinko71 = new Plinko(420,360);
  Plinko72 = new Plinko(460,360);
     





	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ground.display();
  Divider1.display();
  Divider2.display();
  Divider3.display();
  Divider4.display();
  Divider5.display();
  Divider6.display();
  Divider7.display();
  //row 1 display
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  Plinko9.display();
  Plinko10.display();
  Plinko11.display();
  Plinko12.display();
  //row 2 display
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display(); 
  plinko20.display();
  Plinko21.display();
  Plinko22.display();
  Plinko23.display();
  Plinko24.display();
  //displaying 3rd row
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  Plinko33.display();
  Plinko34.display();
  Plinko35.display();
  Plinko36.display();
  //displaying 4th row
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  Plinko45.display();
  Plinko46.display();
  Plinko47.display();
  Plinko48.display();
  //displying 5th row
  plinko49.display();
  plinko50.display();
  plinko51.display();
  plinko52.display();
  plinko53.display();
  plinko54.display();
  plinko55.display();
  plinko56.display();
  Plinko57.display();
  Plinko58.display();
  Plinko59.display();
  Plinko60.display();
  //displaying 6th row
  plinko61.display();
  plinko62.display();
  plinko63.display();
  plinko64.display();
  plinko65.display();
  plinko66.display();
  plinko67.display();
  plinko68.display();
  Plinko69.display();
  Plinko70.display();
  Plinko71.display();
  Plinko72.display();
  randomx = random(20,480);
  
  //creating particles
  if(frameCount%20===0){
    particles.push(new Particel(randomx,50));
    }
  
    for (var j = 0; j < particles.length;j++){
      particles[j].display();
    }
  console.log(particles)
  
  



  
  drawSprites();
 
}



