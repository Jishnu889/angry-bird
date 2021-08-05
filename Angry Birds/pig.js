class Pig
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
    var pigPosition=this.body.position
    fill("green")
    
    rect(pigPosition.x,pigPosition.y,this.width,this.height)
    }
    
    }