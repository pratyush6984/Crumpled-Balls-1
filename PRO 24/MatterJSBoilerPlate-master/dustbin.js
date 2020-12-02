class Dustbin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
        this.angle=0;	
        
      this.boxBottom = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
      this.boxLeftSide = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
      Matter.Body.setAngle(this.boxLeftSide, this.angle);
		
    
      this.boxRightSide = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
      Matter.Body.setAngle(this.boxRightSide, -1*this.angle);
      World.add(world, this.boxBottom)
      World.add(world, this.boxLeftSide)
      World.add(world, this.boxRightSide);


    }
    display(){
        var boxBottom=this.boxBottom.position;
			var boxLeftSide=this.boxLeftSide.position;
            var boxRightSide=this.boxRightSide.position;
            
            push()
            fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()
            
            push()
            fill(255)
            stroke(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()
            
            push()
            stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
    }
}