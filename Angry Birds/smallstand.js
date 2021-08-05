class Smallstand
{
    //to store natural and physical properties
    constructor(a,b,c,d,angle)//add all the unknown values of the properties inside the constructor()
    {
    //the physical properties are isStatic, restitution(bounciness), friction, density
    var options={
    isStatic:true,
    restitution:0,
    friction:0,
    density:1
    }
    //the natural properties are x, y, width, height, radius
    this.x=a;
    this.y=b;
    this.width=c;
    this.height=d;
    //creating a sprite of the object which is called a body 
    this.body=Bodies.rectangle(a,b,c,d,options)
    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)
    }
    
    //to display the characters in the browser
    display()
    {
        var angle=this.body.angle 
    var smallstandPosition=this.body.position
    push()
    fill("white")
    translate(smallstandPosition.x,smallstandPosition.y)
    rotate(angle)
    //to maintain the order of the natural properties
    rect(0,0,this.width,this.height)
    pop()
    }
    
    }