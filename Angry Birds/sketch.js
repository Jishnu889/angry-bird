
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var stand1
var stand2
var stand3
var stand4
var box
var box2
var box3
var box4
var box5
var bird
var pig
var pig2
var ground

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
bird=new Bird(200,200,50,50)
pig=new Pig(1000,530,60,60)
pig2=new Pig(1000,430,60,60)
stand1=new Bigstand(800,390,430,30);
stand2=new Bigstand(800,490,430,30);
stand3=new Smallstand(800,300,20,PI/2);
stand4=new Smallstand(1400,320,20,200);
box=new Box(810,520,70,70)
box2=new Box(1150,520,70,70)
box3=new Box(810,420,70,70)
box4=new Box(1150,420,70,70)
box5=new Box(1000,320,70,70)
ground=new Ground(0,590,1600,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    bird.display();
    pig.display();
    pig2.display();
    ground.display();
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    stand1.display();
    stand2.display();
    stand3.display();
    stand4.display();
    fill("white");
    text(mouseX+","+mouseY,mouseX,mouseY)
}

