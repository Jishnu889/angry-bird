class Bird
{
    
    constructor(a,b,c,d)
    {
    var options={
    isStatic:true,
    restitution:0,
    friction:0,
    density:1
    }
    
    this.x=a;
    this.y=b;
    this.width=c;
    this.height=d;
    
    this.body=Bodies.rectangle(a,b,c,d,options)
    World.add(world,this.body)
    }
    
    
    display()
    {
    var birdPosition=this.body.position
    birdPosition.x=mouseX
    birdPosition.y=mouseY
    fill("red")
    rect(birdPosition.x,birdPosition.y,this.width,this.height)
    }
    
    }