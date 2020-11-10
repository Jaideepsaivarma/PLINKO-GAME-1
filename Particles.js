class Particel {
    constructor(x,y) {
      var options = {
        restitution:0.4  
      }
      
      this.body = Bodies.circle(x,y,10,options);
      this.color = (random(0,255),random(0,255),random(0,255));
      this.width = 15;
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(pos.x, pos.y, this.width);
      pop();
    }
  };
