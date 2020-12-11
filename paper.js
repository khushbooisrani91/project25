class Paper {

    constructor(x, y,radius) {
        var options = {
            isStatic:false,
            'restitution':0.5,
            'friction':0.3,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,options)  
        this.image = loadImage("paper.png");
   
        World.add(world, this.body);
      }
     display(){
      pop()
      var pos = this.body.position
       ellipseMode(CENTER)
       fill ("pink");
       ellipse(pos.x,pos.y,this.radius,this.radius)
       image(this.image);
      push()


     }

  }
