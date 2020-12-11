class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.body1 = Bodies.rectangle(1056,324,200,50);
      this.height1 = 300;
      this.width1 = 200;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var pos1 = this.body1.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x,pos.y,this.width,this.height);
      imageMode(CENTER);
      image(this.image,pos1.x,pos1.y,this.width1,this.height1);
      pop();
    }
  };